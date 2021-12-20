import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { initializeState, signInActionTypes, signInReducer } from "../reducer/signInReducer";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import { signInApi } from "../apis/sessionApis";
import { SignInCard } from "../component/sessionComponent/SignInCard";
import { SessionDispatch, SessionState, MessageState, MessageDispatch } from "../context/Context";
import { foodsIndexURL, signInURL } from "../urls/index";
import { MaterialUILoginButton } from "../component/sessionComponent/MaterialUILoginButton";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { HTTP_STATUS_CODE, SIGNIN_TEXT } from "../constants";
import { messageActionTypes } from "../reducer/messageReducer";

const SignImnHeader = styled.h1`
  margin-top:5%;
  margin-left:7%;
`;

const MessageWrapper = styled.div`
  margin-left:6%;
  margin-right:5%;
`;

const MessageSuccessWrapper = styled.div`
  color:blue;
`;

const MessageErrorWrapper = styled.div`

`;

const SigninWrapper = styled.div`
  margin-left:5%;
  margin-right:5%;
`;

const SubmitbuttomWrapper = styled.div`
  padding-left:90%;
  ${media.lessThan("large")`
    padding-left:89%;
  `}
  ${media.lessThan("medium")`
    padding-left:80%;
  `}
  ${media.lessThan("small")`
    padding-left:70%;
  `}
`;

export const SignIn = () => {
  const [state, dispatch] = useReducer(signInReducer, initializeState);
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const history = useHistory();

  function onKeyDownEnter(event) {
    submitSignIn()
  }

  function submitSignIn() {
    signInApi(state.user)
      .then((data) => {
        SessionAuthDispatch({
          type: sessionActionTypes.SIGNIN,
          payload: {
            data: data,
          },
        });
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: SIGNIN_TEXT.SIGN_IN_SUCCESS_MESSAGE
          },
        })
        history.push(foodsIndexURL);
      })
      .catch((e) => {
        if (e.response.status === HTTP_STATUS_CODE.UN_AUTHORIZED) {
          console.log(e.response.status)
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: SIGNIN_TEXT.SIGN_IN_ERROR
            },
          })
          history.push(signInURL)
        } else {
          throw e;
        }
      })
  }

  return (
    <Fragment>
      <SignImnHeader>
        {SIGNIN_TEXT.SIGN_IN_TITLE}
      </SignImnHeader>
      <MessageWrapper>
      </MessageWrapper>
      <SigninWrapper>
        <SessionDispatch.Provider value={dispatch}>
          <SessionState.Provider value={state}>
            <SignInCard onKeyDown={(event) => onKeyDownEnter(event)}></SignInCard>
          </SessionState.Provider>
        </SessionDispatch.Provider>
        <SubmitbuttomWrapper>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUILoginButton onClick={() => submitSignIn()} btnLabel={SIGNIN_TEXT.SIGN_IN_BUTTON_LABEL} />
          </ThemeProvider>
        </SubmitbuttomWrapper>
      </SigninWrapper>
    </Fragment>
  )
}
