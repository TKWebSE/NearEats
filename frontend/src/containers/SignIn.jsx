import React, { Fragment,useRef,useReducer,useEffect } from "react";
import styled from "styled-components";
import {initializeState,signInActionTypes,signInReducer} from "../reducer/signInReducer";
import { useHistory } from "react-router";
import {signInApi} from "../apis/sessionApis";
import {SESSION_HEADER_TITLE} from "../constants";
import {SignInCard} from "../component/sessionComponent/SignInCard";
import {SessionDispatch,SessionState} from "../context/Context";
import {foodsIndex} from "../urls/index";
import {MaterialUILoginButton} from "../component/sessionComponent/MaterialUILoginButton";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";

const SignImnHeader = styled.h1`
  margin-top:3%;
  margin-bottom:3%;
`;

const SigninWrapper = styled.div`
  margin-bottom:5%;
`;

const SubmitbuttomWrapper = styled.div`
`;

export const SignIn= () =>{
  const [state,dispatch] = useReducer(signInReducer,initializeState);
  const history = useHistory();


  function submitSignIn () {
    signInApi(state.user)
    .then((data) => {
      dispatch({
          type:signInActionTypes.SIGNIN,
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
        <SignImnHeader>
          {SESSION_HEADER_TITLE.SIGN_IN}
        </SignImnHeader>
        <SigninWrapper>
        <SessionDispatch.Provider value={dispatch}>
          <SessionState.Provider value={state}>
            <SignInCard></SignInCard>
          </SessionState.Provider>
        </SessionDispatch.Provider>
        <SubmitbuttomWrapper>
        <ThemeProvider theme={ButtonTheme}>
          <MaterialUILoginButton onClick={() => submitSignIn()} />
        </ThemeProvider>
        </SubmitbuttomWrapper>
        </SigninWrapper>
    </Fragment>
  )
}