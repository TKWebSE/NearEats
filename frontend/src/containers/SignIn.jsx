import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { initializeState, signInActionTypes, signInReducer } from "../reducer/signInReducer";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import { signInApi } from "../apis/sessionApis";
import { SESSION_HEADER_TITLE } from "../constants";
import { SignInCard } from "../component/sessionComponent/SignInCard";
import { SessionDispatch, SessionState } from "../context/Context";
import { foodsIndexURL, signInURL } from "../urls/index";
import { MaterialUILoginButton } from "../component/sessionComponent/MaterialUILoginButton";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from "../constants";
import { MaterialUIErrorSnackber } from "../component/MaterialUIErrorSnackber";
import { MaterialUISuccessSnackber } from "../component/MaterialUISuccessSnackber";

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
  const history = useHistory();

  useEffect(() => {
    if (SessionAuthState.message !== "") {
      if (state.message === "") {
        dispatch({
          type: signInActionTypes.SETTINGMESSAGE,
          payload: {
            message: SessionAuthState.message
          },
        })
      }
    }
  }, [signInActionTypes])

  function submitSignIn() {
    dispatch({
      type: signInActionTypes.SETTINGERRORMESSAGE,
      payload: {
        errorMessage: ""
      },
    })
    dispatch({
      type: signInActionTypes.SETTINGMESSAGE,
      payload: {
        message: ""
      },
    })
    signInApi(state.user)
      .then((data) => {
        dispatch({
          type: signInActionTypes.SIGNIN,
          payload: {
            currentUser: data.currentUser
          },
        });
        console.log(data)
        SessionAuthDispatch({
          type: sessionActionTypes.SETNOWLOCATION,
          payload: {
            nowLocation: data.city
          },
        });
        history.push(foodsIndexURL);
      })
      .catch((e) => {
        console.log(e)
        if (e.response.status === HTTP_STATUS_CODE.UN_AUTHORIZED) {
          console.log(e.response.status)
          dispatch({
            type: signInActionTypes.SETTINGERRORMESSAGE,
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

  return (
    <Fragment>
      <SignImnHeader>
        {SESSION_HEADER_TITLE.SIGN_IN}
      </SignImnHeader>
      <MessageWrapper>
        {
          state.errorMessage === "" ?
            state.message === "" ?
              null
              :
              <MessageSuccessWrapper>
                <MaterialUISuccessSnackber message={state.message} />
              </MessageSuccessWrapper>
            :
            <MessageErrorWrapper>
              <MaterialUIErrorSnackber message={state.errorMessage} />
            </MessageErrorWrapper>
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
            <MaterialUILoginButton onClick={() => submitSignIn()} btnLabel={"ログイン"} />
          </ThemeProvider>
        </SubmitbuttomWrapper>
      </SigninWrapper>
    </Fragment>
  )
}
