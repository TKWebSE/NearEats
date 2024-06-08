import { Fragment, useContext, useReducer, useEffect, useState } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import media from "styled-media-query";
import { EDIT_PASSWORD_TEXT } from "../constants";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from "../context/Context";
import { MaterialUISendEmailButton } from "../component/MaterialUISendEmailButton";
import { sendEmailToChangePasswordApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";
import { settingURL, authChangePasswordFullURL } from "../urls/index";
import { MaterialUIReadOnlyTextField } from "../component/userComponent/MaterialUIReadOnlyTextField";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const HeaderWrapper = styled.h1`
    margin-top:5%;
`;

const EmailWrapper = styled.div`
margin-bottom:1%;
`;

const ButtonWrapper = styled.div`
  text-align:right;
`;

export const UserEditPassword = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const history = useHistory();

  function handleSubmit() {
    sendEmailToChangePasswordApi(sessionAuthState.currentUser.email, authChangePasswordFullURL)
      .then((data) => {
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: EDIT_PASSWORD_TEXT.SEND_EMAIL_MESSAGE
          },
        })
        history.push(settingURL)
      })
      .catch(e =>
        messageDispatch({
          type: messageActionTypes.SET_ERROR_MESSAGE,
          payload: {
            errorMessage: e
          },
        })
      );
  }

  return (
    <Fragment>
      <Wrapper>
        <HeaderWrapper>
          {EDIT_PASSWORD_TEXT.HEADER_TITLE}
        </HeaderWrapper>
        <EmailWrapper>
          <MaterialUIReadOnlyTextField
            label={EDIT_PASSWORD_TEXT.NOW_EMAIL_LABEL}
            value={sessionAuthState.currentUser.email}
          />
        </EmailWrapper>
        <ButtonWrapper>
          <MaterialUISendEmailButton
            onClick={handleSubmit}
            btnLabel={EDIT_PASSWORD_TEXT.SUBMIT_BUTTON_LABEL}
          />
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
