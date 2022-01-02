import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import {
  useParams,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { UPDATE_PASSWORD_TEXT } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { MaterialUIPasswordLine } from "../component/userComponent/MaterialUIPasswordLine";
import { editPasswordURL, authChangePasswordURL, settingURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { checkPasswordConfirmationCodeApi, updatePasswordApi } from "../apis/sendEmailapis";
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
  const [newPasswordValue, setNewPassword] = useState("");
  const [confirmationPasswordValue, setConfirmationPassword] = useState("")
  const [isAuthenticated, setAuthenticated] = useState(true);
  const history = useHistory();
  const params = useParams();
  console.log({ params })


  function handleOnClick() {
    history.push(editPasswordURL)
  }

  function onKeyDownEnterCheckAuthCode(event) {
    handleCheckAuthCodeSubmit()
  }

  function onKeyDownEnterUpdatePassword(event) {
    handlePasswordSubmit()
  }

  function handleCheckAuthCodeSubmit() {
    try {
      if (confirmationCode === "") {
        throw UPDATE_PASSWORD_TEXT.ERROR_BLANK_AUTHCODE_MESSAGE
      }
      checkPasswordConfirmationCodeApi(sessionAuthState.currentUser.id, confirmationCode)
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: UPDATE_PASSWORD_TEXT.COMPLETE_CHECK_AUTHCODE_MESSAGE
            },
          })
          setAuthenticated(true);
        })
        .catch((e) => {
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: UPDATE_PASSWORD_TEXT.ERROR_CHECK_AUTHCODE_MESSAGE
            },
          })
        });
    } catch (e) {
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: e
        },
      })
    }
  }

  function handlePasswordSubmit() {
    try {
      if (newPasswordValue === "" || confirmationPasswordValue === "") {
        throw UPDATE_PASSWORD_TEXT.ERROR_BLANK_PASSWORD_MESSAGE
      }
      if (!(newPasswordValue === confirmationPasswordValue)) {
        throw UPDATE_PASSWORD_TEXT.ERROR_UNMATCHPASSWORD_MESSAGE
      }
      const regexp = /^[A-Za-z0-9]{8,15}$/;
      if (!(regexp.test(newPasswordValue))) {
        throw UPDATE_PASSWORD_TEXT.ERROR_VALUATION_MESSAGE
      }
      updatePasswordApi(newPasswordValue, confirmationPasswordValue)
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: UPDATE_PASSWORD_TEXT.SEND_EMAIL_MESSAGE
            },
          })
          history.push(authChangePasswordURL)
        })
        .catch((e) =>
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: e
            },
          }));
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
            <TitleWrapper>
              {UPDATE_PASSWORD_TEXT.UPDATE_PASSWORD_TITLE}
            </TitleWrapper>
            <ChangePasswordWrapper>
              <MaterialUIPasswordLine
                label={UPDATE_PASSWORD_TEXT.NEW_PASSWORD_LABEL}
                value={newPasswordValue}
                setValue={setNewPassword}
                onKeyDown={(event) => onKeyDownEnterUpdatePassword(event)}
              />
            </ChangePasswordWrapper>
            <ConfirmPasswordWrapper>
              <MaterialUIPasswordLine
                label={UPDATE_PASSWORD_TEXT.CONFIRMATION_LABEL}
                value={confirmationPasswordValue}
                setValue={setConfirmationPassword}
                onKeyDown={(event) => onKeyDownEnterUpdatePassword(event)}
              />
            </ConfirmPasswordWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton
                  onClick={handlePasswordSubmit}
                  btnLabel={UPDATE_PASSWORD_TEXT.UPDATE_PASSWORD_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper>
          :
          <Wrapper>
            <TitleWrapper>
              {UPDATE_PASSWORD_TEXT.CHECK_AUTHCODE_TITLE}
            </TitleWrapper>
            <MaterialUITextField
              label={UPDATE_PASSWORD_TEXT.AUTHCODE_LABEL}
              value={confirmationCode}
              setValue={setConfirmationCode}
              onKeyDown={(event) => onKeyDownEnterCheckAuthCode(event)}
            />
            <LinkWrapper onClick={() => handleOnClick()}>
              {UPDATE_PASSWORD_TEXT.EDIT_PASSWORD_LINK_TEXT}
            </LinkWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton
                  onClick={() => handleCheckAuthCodeSubmit()}
                  btnLabel={UPDATE_PASSWORD_TEXT.CHECK_AUTHCODE_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper >
      }
    </Fragment >
  )
}
