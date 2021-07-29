import React, { Fragment,useReducer } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import {initializeState,signInActionTypes,signInReducer} from "../reducer/signInReducer";
import { useHistory } from "react-router";
import {signInApi} from "../apis/sessionApis";
import {SESSION_HEADER_TITLE} from "../constants";
import {SignInCard} from "../component/sessionComponent/SignInCard";
import {SessionDispatch,SessionState} from "../context/Context";
import {foodsIndexURL} from "../urls/index";
import {MaterialUILoginButton} from "../component/sessionComponent/MaterialUILoginButton";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";
import Cookies from "js-cookie";
import {isLoginApi} from "../apis/sessionApis";

const SignImnHeader = styled.h1`
  margin-top:5%;
  margin-left:7%;
`;

const SigninWrapper = styled.div`
  margin-left:5%;
  margin-right:5%;
`;

const SubmitbuttomWrapper = styled.div`
`;

export const SignIn= () =>{
  const [state,dispatch] = useReducer(signInReducer,initializeState);
  const history = useHistory();

  function submitSignIn () {
    signInApi(state.user)
    .then((data) => {
      const dataaru = isLoginApi(data.user)
        console.log(dataaru)
      dispatch({
          type:signInActionTypes.SIGNIN,
          payload: {
            currentUser: data.currentUser
          },
      });
      console.log(Cookies.get())
      history.push(foodsIndexURL);
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
          <MaterialUILoginButton onClick={() => submitSignIn()} btnLabel={"ログイン"}/>
        </ThemeProvider>
        </SubmitbuttomWrapper>
        </SigninWrapper>
    </Fragment>
  )
}