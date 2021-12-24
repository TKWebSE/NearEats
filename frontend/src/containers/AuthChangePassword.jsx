import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { AUTH_CHANGE_PASSWORD } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { editEmailURL, settingURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { updateEmailApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
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

  function handleOnClick() {
    history.push(editEmailURL)
  }

  function handleSubmit() {
    //ここ変える
    updateEmailApi(sessionAuthState.currentUser.id, confirmationCode)
      .then((data) => {
        console.log(data)
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: AUTH_CHANGE_PASSWORD.COMPLETE_CHANGE_EMAIL_MESSAGE
          },
        })
        history.push(settingURL);
      })
      .catch((e) => {
        messageDispatch({
          type: messageActionTypes.SET_ERROR_MESSAGE,
          payload: {
            errorMessage: AUTH_CHANGE_PASSWORD.ERROR_CHANGE_EMAIL_MESSAGE
          },
        })
      });
  }

  return (
    <Fragment>
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
          {AUTH_CHANGE_PASSWORD.EDIT_EMAIL_LINK_TEXT}
        </LinkWrapper>
        <ButtonWrapper>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton
              onClick={() => handleSubmit()}
              btnLabel={AUTH_CHANGE_PASSWORD.SUBMIT_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper >
    </Fragment >
  )
}
