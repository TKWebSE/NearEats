import React, { Fragment, useState, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { initializeState, signInActionTypes, signInReducer } from "../reducer/signInReducer";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import { signInApi } from "../apis/sessionApis";
import { SessionDispatch, SessionState, MessageState, MessageDispatch } from "../context/Context";
import { foodsIndexURL, signInURL, passwordResetSendEmailURL } from "../urls/index";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { HTTP_STATUS_CODE, SIGNIN_TEXT } from "../constants";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateEmail } from "../AppFunction";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { PasswordTextField } from "../component/PasswordTextField";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const SignImnHeader = styled.h1`
  margin-top:5%;
  // margin-left:7%;
`;

const LinkWrapper = styled.a`
  padding-left:1%;
  color:skyblue;
  cursor : pointer;
  transition: color .3s;
  &:hover {
    transition: color .3s;
    color:blue;
  }
`;

const SubmitbuttomWrapper = styled.div`
  text-align:right;
  // padding-left:90%;
  // ${media.lessThan("large")`
  //   padding-left:89%;
  // `}
  // ${media.lessThan("medium")`
  //   padding-left:80%;
  // `}
  // ${media.lessThan("small")`
  //   padding-left:70%;
  // `}
`;

export const SignIn = () => {
  const [state, dispatch] = useReducer(signInReducer, initializeState);
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleLinkClick() {
    history.push(passwordResetSendEmailURL);
  }

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    try {
      validateEmail(email);
      signInApi(email, password)
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
    } catch (e) {
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: e
        },
      })
    }
  }

  return (
    <Fragment>
      <Wrapper>
        <SignImnHeader>
          {SIGNIN_TEXT.SIGN_IN_TITLE}
        </SignImnHeader>
        <MaterialUITextField
          label={SIGNIN_TEXT.EMAIL_TEXTFIELD_LABEL}
          value={email}
          setValue={setEmail}
          onKeyDown={onKeyDownEnter}
        />
        <PasswordTextField
          label={SIGNIN_TEXT.PASSWORD_TEXTFIELD_LABEL}
          value={password}
          setValue={setPassword}
          onKeyDown={onKeyDownEnter}
        />
        <LinkWrapper onClick={() => handleLinkClick()}>
          {SIGNIN_TEXT.FORGET_PASSWORD_LINK_TEXT}
        </LinkWrapper>
        <SubmitbuttomWrapper>
          <CommonReloadButton
            onClick={() => handleSubmit()}
            btnLabel={SIGNIN_TEXT.SIGN_IN_BUTTON_LABEL}
          />
        </SubmitbuttomWrapper>
      </Wrapper>
    </Fragment>
  )
}
