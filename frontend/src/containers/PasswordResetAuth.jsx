import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import {
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { PASSWORD_RESET_AUTH_TEXT } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { MaterialUIPasswordLine } from "../component/userComponent/MaterialUIPasswordLine";
import { signInURL, passwordResetSendEmailURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { checkPasswordConfirmationCodeApi, updatePasswordApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateDoublePassword } from "../AppFunction";

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

export const PasswordResetAuth = () => {
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [newPasswordValue, setNewPassword] = useState("");
  const [confirmationPasswordValue, setConfirmationPassword] = useState("")
  const history = useHistory();
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  function handleLinkClick() {
    history.push(passwordResetSendEmailURL);
  }

  function onKeyDownEnterUpdatePassword(event) {
    handlePasswordSubmit()
  }

  function handlePasswordSubmit() {
    try {
      validateDoublePassword(newPasswordValue, confirmationPasswordValue);
      updatePasswordApi(newPasswordValue, confirmationPasswordValue, query.get('reset_password_token'))
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: PASSWORD_RESET_AUTH_TEXT.COMPLETE_UPDATE_PASSWORD_MESSAGE
            },
          })
          history.push(signInURL);
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
      <Wrapper>
        <TitleWrapper>
          {PASSWORD_RESET_AUTH_TEXT.HEADER_TITLE}
        </TitleWrapper>
        <ChangePasswordWrapper>
          <MaterialUIPasswordLine
            label={PASSWORD_RESET_AUTH_TEXT.NEW_PASSWORD_LABEL}
            value={newPasswordValue}
            setValue={setNewPassword}
            onKeyDown={(event) => onKeyDownEnterUpdatePassword(event)}
          />
        </ChangePasswordWrapper>
        <ConfirmPasswordWrapper>
          <MaterialUIPasswordLine
            label={PASSWORD_RESET_AUTH_TEXT.CONFIMATION_PASSWORD_LABEL}
            value={confirmationPasswordValue}
            setValue={setConfirmationPassword}
            onKeyDown={(event) => onKeyDownEnterUpdatePassword(event)}
          />
        </ConfirmPasswordWrapper>
        <LinkWrapper onClick={() => handleLinkClick()}>
          {PASSWORD_RESET_AUTH_TEXT.SEND_EMAIL_LINK_TEXT}
        </LinkWrapper>
        <ButtonWrapper>
          <CommonReloadButton
            onClick={handlePasswordSubmit}
            btnLabel={PASSWORD_RESET_AUTH_TEXT.SUBMIT_BUTTON_LABEL}
          />
        </ButtonWrapper>
      </Wrapper>
    </Fragment >
  )
}
