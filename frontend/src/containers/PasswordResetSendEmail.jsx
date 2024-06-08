import { Fragment, useContext, useReducer, useEffect, useState } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import media from "styled-media-query";
import { PASSWORD_RESET_SEND_EMAIL_TEXT } from "../constants";
import { MessageState, MessageDispatch } from "../context/Context";
import { MaterialUISendEmailButton } from "../component/MaterialUISendEmailButton";
import { sendEmailToChangePasswordApi } from "../apis/sendEmailapis";
import { messageActionTypes } from "../reducer/messageReducer";
import { homeURL, passwordResetAuthURLFullURL } from "../urls/index";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { validateEmail } from "../AppFunction";
import CircularProgress from '@material-ui/core/CircularProgress';

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

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

export const PasswordResetSendEmail = () => {
  const messageState = useContext(MessageState);
  const [email, setEmail] = useState();
  const messageDispatch = useContext(MessageDispatch);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    setLoading(true);
    try {
      validateEmail(email);
      sendEmailToChangePasswordApi(email, passwordResetAuthURLFullURL)
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: PASSWORD_RESET_SEND_EMAIL_TEXT.SEND_EMAIL_MESSAGE
            },
          })
          setLoading(false);
          history.push(homeURL)
        })
        .catch((e) => {
          setLoading(false);
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: e
            },
          })
        });
    } catch (e) {
      setLoading(false);
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
        loading ?
          <CircleWrapper>
            <CircularProgress />
          </CircleWrapper>
          :
          <Wrapper>
            <HeaderWrapper>
              {PASSWORD_RESET_SEND_EMAIL_TEXT.HEADER_TITLE}
            </HeaderWrapper>
            <EmailWrapper>
              <MaterialUITextField
                label={PASSWORD_RESET_SEND_EMAIL_TEXT.EMAIL_TEXT_FIELD_LABEL}
                value={email}
                setValue={setEmail}
                onKeyDown={(event) => onKeyDownEnter(event)}
                helperText={PASSWORD_RESET_SEND_EMAIL_TEXT.HEADER_TEXT}
              />
            </EmailWrapper>
            <ButtonWrapper>
              <MaterialUISendEmailButton
                onClick={handleSubmit}
                btnLabel={PASSWORD_RESET_SEND_EMAIL_TEXT.SUBMIT_BUTTON_LABEL}
              />
            </ButtonWrapper>
          </Wrapper>
      }
    </Fragment>
  )
}
