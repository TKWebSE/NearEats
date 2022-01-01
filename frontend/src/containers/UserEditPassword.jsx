import { Fragment, useContext, useReducer, useEffect, useState } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import media from "styled-media-query";
import { ButtonTheme } from "../style_constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { EDIT_PASSWORD_TEXT } from "../constants";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from "../context/Context";
import { MaterialUIPasswordLine } from "../component/userComponent/MaterialUIPasswordLine";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { sendEmailToChangePasswordApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";
import { authChangePasswordURL } from "../urls/index";
import { MaterialUIReadOnlyTextField } from "../component/userComponent/MaterialUIReadOnlyTextField";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const HeaderWrapper = styled.h1`
    margin-top:5%;
`;

const EmailWrapper = styled.div``;

const ButtonWrapper = styled.div`
  text-align:right;
`;

export const UserEditPassword = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [newPasswordValue, setNewPassword] = useState("");
  const [confirmationPasswordValue, setConfirmationPassword] = useState("");
  const history = useHistory();

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    sendEmailToChangePasswordApi(sessionAuthState.currentUser.id)
      .then((data) => {
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: EDIT_PASSWORD_TEXT.SEND_EMAIL_MESSAGE
          },
        })
        history.push(authChangePasswordURL)
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
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton
              onClick={handleSubmit}
              btnLabel={EDIT_PASSWORD_TEXT.SUBMIT_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
