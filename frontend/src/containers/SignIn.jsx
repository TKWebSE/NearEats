import React, { Fragment,useRef,useReducer,useEffect } from "react";
import styled from "styled-components";
import {initializeState,sessionActionTypes,sessionReducer} from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import {signInApi} from "../apis/sessionApis";
import {SESSION_HEADER_TITLE} from "../constants";
import {signInCard} from "../component/sessionComponent/sessionCard";
import {SessionDispatch,SessionState} from "../context/Context";
import {foodsIndex} from "../urls/index";
import {MaterialUILoginButton} from "../component/sessionComponent/MaterialUILoginButton";

const SessionHeader = styled.div`
`;

const SigninWrapper = styled.div`
`;

const SubmitbuttomWrapper = styled.div`
`;

export const SignIn= () =>{
  const [state,dispatch] = useReducer(sessionReducer,initializeState);
  const history = useHistory();

  function submitSignIn () {
    signInApi()
    .then((data) => {
      dispatch({
          type:sessionActionTypes.SIGNIN,
          payload: {
            currentUser: data.currentUser
          },
      });
      history.push(foodsIndex);
    })
    .catch((e) => console.log(e))
  }

  return(
    <Fragment>
        <SessionHeader>
          {SESSION_HEADER_TITLE.SIGN_IN}
        </SessionHeader>
        <SigninWrapper>
        <SessionDispatch.Provider value={dispatch}>
          <SessionState.Provider value={state}>
            <signInCard></signInCard>
          </SessionState.Provider>
        </SessionDispatch.Provider>
        <SubmitbuttomWrapper>
          <MaterialUILoginButton onClick={submitSignIn()} />
        </SubmitbuttomWrapper>
        </SigninWrapper>
    </Fragment>
  )
}