import { Fragment, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useParams, } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { PASSWORD_REGISTRATION } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { guestCreateURL, userActivateURL, signInURL } from "../urls/index";
import { GuestDispatch, GuestState, MessageState, MessageDispatch } from '../context/Context';
import { signUpApi } from "../apis/sessionApis"
import { userCreateApi } from "../apis/userApis";
import { guestSessionActionTypes } from "../reducer/guestSessionReducer";
import { messageActionTypes } from "../reducer/messageReducer";
import CircularProgress from '@material-ui/core/CircularProgress';
import { PasswordTextField } from "../component/PasswordTextField";
import { validateDoublePassword } from "../AppFunction";

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

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

export const PasswordRegistration = () => {
  const guestState = useContext(GuestState);
  const guestDispatch = useContext(GuestDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleLinkClick() {
    history.push(guestCreateURL)
  }
  console.log(loading)
  function handleSubmit() {
    try {
      setLoading(true);
      validateDoublePassword(password, passwordConfirmation);
      signUpApi(guestState.guest.name, guestState.guest.email, password, passwordConfirmation)
        .then((data) => {
          userCreateApi(guestState.guest.email)
            .then((dataB) => {
              guestDispatch({
                type: guestSessionActionTypes.RESET_GUEST,
              })
              messageDispatch({
                type: messageActionTypes.SET_MESSAGE,
                payload: {
                  message: PASSWORD_REGISTRATION.COMPLETE_REGISTRATION_MESSAGE
                },
              })
              setLoading(false);
              history.push(signInURL);
            })
            .catch((e) => {
              setLoading(false);
              messageDispatch({
                type: messageActionTypes.SET_ERROR_MESSAGE,
                payload: {
                  errorMessage: PASSWORD_REGISTRATION.ERROR_PASSWORD_RAGISTRATION_MESSAGE
                },
              })
            });
        })
    } catch (e) {
      setLoading(false);
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: PASSWORD_REGISTRATION.ERROR_PASSWORD_RAGISTRATION_MESSAGE
        },
      })
    }
  }

  return (
    <Fragment>
      {
        loading ?
          <CircleWrapper>
            <CircularProgress />
          </CircleWrapper>
          :
          <Wrapper>
            <TitleWrapper>
              {PASSWORD_REGISTRATION.HEADER_TITLE}
            </TitleWrapper>
            <PasswordTextField
              label={PASSWORD_REGISTRATION.PASSWORD_TEXTFIELD_LABEL}
              value={password}
              setValue={setPassword}
              onKeyDown={onKeyDownEnter}
            />
            <PasswordTextField
              label={PASSWORD_REGISTRATION.PASSWORD_CONFIRMATION_TEXTFIELD_LABEL}
              value={passwordConfirmation}
              setValue={setPasswordConfirmation}
              onKeyDown={onKeyDownEnter}
            />
            <LinkWrapper onClick={() => handleLinkClick()}>
              {PASSWORD_REGISTRATION.SIGN_UP_LINK_TEXT}
            </LinkWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <CommonReloadButton
                  onClick={handleSubmit}
                  btnLabel={PASSWORD_REGISTRATION.SUBMIT_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper>
      }
    </Fragment>
  )
}
