import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import {
  useLocation,
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
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [newPasswordValue, setNewPassword] = useState("");
  const [confirmationPasswordValue, setConfirmationPassword] = useState("")
  const history = useHistory();
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  function handleLinkClick() {
    history.push(editPasswordURL)
  }

  function onKeyDownEnterUpdatePassword(event) {
    handlePasswordSubmit()
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
      updatePasswordApi(newPasswordValue, confirmationPasswordValue, query.get('reset_password_token'))
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: UPDATE_PASSWORD_TEXT.COMPLETE_UPDATE_PASSWORD_MESSAGE
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
        <LinkWrapper onClick={() => handleLinkClick()}>
          {UPDATE_PASSWORD_TEXT.EDIT_PASSWORD_LINK_TEXT}
        </LinkWrapper>
        <ButtonWrapper>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton
              onClick={handlePasswordSubmit}
              btnLabel={UPDATE_PASSWORD_TEXT.UPDATE_PASSWORD_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper>
    </Fragment >
  )
}
