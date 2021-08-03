import React, { Fragment,useEffect,useReducer,useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import {initializeState,signInActionTypes,signInReducer} from "../reducer/signInReducer";
import { useHistory } from "react-router";
import {signInApi} from "../apis/sessionApis";
import {SESSION_HEADER_TITLE} from "../constants";
import {SignInCard} from "../component/sessionComponent/SignInCard";
import {SessionDispatch,SessionState} from "../context/Context";
import {foodsIndexURL,signInURL} from "../urls/index";
import {MaterialUILoginButton} from "../component/sessionComponent/MaterialUILoginButton";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";
import Cookies from "js-cookie";
import {REQUEST_STATE} from "../constants";
import {sessionActionTypes} from "../reducer/sessionReducer";
import {HTTP_STATUS_CODE,ERROR_MESSAGE} from "../constants";

const SignImnHeader = styled.h1`
  margin-top:5%;
  margin-left:7%;
`;

const MessageWrapper = styled.div`
  margin-left:6%;
  margin-right:5%;
`;

const MessageBlueWrapper = styled.h2`
  color:blue;
`;

const MessageRedWrapper = styled.h2`
  color:red;
`;

const SigninWrapper = styled.div`
  margin-left:5%;
  margin-right:5%;
`;

const SubmitbuttomWrapper = styled.div`
`;

export const SignIn= () =>{
  const [state,dispatch] = useReducer(signInReducer,initializeState);
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const history = useHistory();

  useEffect(() => {
    if(SessionAuthState.message !== ""){
      if(state.message === ""){
        dispatch({
          type:signInActionTypes.SETTINGMESSAGE,
          payload: {
            message: SessionAuthState.message
          },  
        })
      }
    }
  },[signInActionTypes])

  function submitSignIn () {
    signInApi(state.user)
    .then((data) => {
      dispatch({
          type:signInActionTypes.SIGNIN,
          payload: {
            currentUser: data.currentUser
          },
      });
      history.push(foodsIndexURL);
    })
    .catch((e) => {
      if(e.response.status === HTTP_STATUS_CODE.UN_AUTHORIZED){
        console.log(e.response.status)
        dispatch({
            type:signInActionTypes.SETTINGERRORMESSAGE,
            payload: {
              errorMessage: ERROR_MESSAGE.USER_SIGNIN_ERROR
            },
        })
        history.push(signInURL)          
      } else {
        throw e;
      }
    })
  }
  console.log(state)

  return(
    <Fragment>
        <SignImnHeader>
          {SESSION_HEADER_TITLE.SIGN_IN}
        </SignImnHeader>
          <MessageWrapper>
        {
          state.errorMessage === ""?   
            state.message === ""?
              null
            :
            <MessageBlueWrapper>
              {state.message}
            </MessageBlueWrapper>
          :
          <MessageRedWrapper>
            {state.errorMessage}
          </MessageRedWrapper>
        }
        
        </MessageWrapper>
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