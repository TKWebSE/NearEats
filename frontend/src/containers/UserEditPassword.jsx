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

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const HeaderWrapper = styled.h1`
    margin-top:5%;
`;

const ChangePasswordWrapper = styled.div``;

const ConfirmPasswordWrapper = styled.div``;

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
    try {
      if (newPasswordValue === "" || confirmationPasswordValue === "") {
        throw EDIT_PASSWORD_TEXT.ERROR_BLANK_PASSWORD_MESSAGE
      }
      if (!(newPasswordValue === confirmationPasswordValue)) {
        throw EDIT_PASSWORD_TEXT.ERROR_UNMATCHPASSWORD_MESSAGE
      }
      const regexp = /^[A-Za-z0-9]{8,15}$/;
      if (!(regexp.test(newPasswordValue))) {
        throw EDIT_PASSWORD_TEXT.ERROR_VALUATION_MESSAGE
      }
      sendEmailToChangePasswordApi(sessionAuthState.currentUser.id, newPasswordValue)
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: EDIT_PASSWORD_TEXT.SEND_EMAIL_MESSAGE
            },
          })
          history.push(authChangePasswordURL)
        })
        .catch(e => console.log(e));
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
        <HeaderWrapper>
          {EDIT_PASSWORD_TEXT.HEADER_TITLE}
        </HeaderWrapper>
        <ChangePasswordWrapper>
          <MaterialUIPasswordLine
            label={EDIT_PASSWORD_TEXT.NEW_PASSWORD_LABEL}
            value={newPasswordValue}
            setValue={setNewPassword}
            onKeyDown={(event) => onKeyDownEnter(event)}
          />
        </ChangePasswordWrapper>
        <ConfirmPasswordWrapper>
          <MaterialUIPasswordLine
            label={EDIT_PASSWORD_TEXT.CONFIRMATION_LABEL}
            value={confirmationPasswordValue}
            setValue={setConfirmationPassword}
            onKeyDown={(event) => onKeyDownEnter(event)}
          />
        </ConfirmPasswordWrapper>
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
