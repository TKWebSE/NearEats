import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { AUTH_CHANGE_PASSWORD } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { editPasswordURL, settingURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { updatePasswordApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
`;

const ChangePasswordWrapper = styled.div``;

const ConfirmPasswordWrapper = styled.div``;

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

const ButtonWrapper = styled.div`
  text-align:right;
`;

export const AuthChangePassword = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [confirmationCode, setConfirmationCode] = useState("");
  const history = useHistory();
  const [isAuthenticated, setAuth] = useState(false);

  function handleOnClick() {
    history.push(editPasswordURL)
  }

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleCheckAuthCodeSubmit() {
    updatePasswordApi(sessionAuthState.currentUser.id, confirmationCode)
      .then((data) => {
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: AUTH_CHANGE_PASSWORD.COMPLETE_CHANGE_PASSWORD_MESSAGE
          },
        })
        history.push(settingURL);
      })
      .catch((e) => {
        messageDispatch({
          type: messageActionTypes.SET_ERROR_MESSAGE,
          payload: {
            errorMessage: AUTH_CHANGE_PASSWORD.ERROR_CHANGE_PASSWORD_MESSAGE
          },
        })
      });
  }


  function handlePasswordSubmit() {
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
      {
        isAuthenticated ?
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
                  onClick={handlePasswordSubmit}
                  btnLabel={EDIT_PASSWORD_TEXT.SUBMIT_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper>
          :
          <Wrapper>
            <TitleWrapper>
              {AUTH_CHANGE_PASSWORD.HEADER_TITLE}
            </TitleWrapper>
            <MaterialUITextField
              label={AUTH_CHANGE_PASSWORD.TEXT_FIELD_LABEL}
              value={confirmationCode}
              setValue={setConfirmationCode}
            />
            <LinkWrapper onClick={() => handleOnClick()}>
              {AUTH_CHANGE_PASSWORD.EDIT_PASSWORD_LINK_TEXT}
            </LinkWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton
                  onClick={() => handleCheckAuthCodeSubmit()}
                  btnLabel={AUTH_CHANGE_PASSWORD.SUBMIT_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper >
      }
    </Fragment >
  )
}
