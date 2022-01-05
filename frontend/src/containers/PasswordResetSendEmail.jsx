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

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    //メールアドレスのバリデーションはる
    sendEmailToChangePasswordApi(email, passwordResetAuthURLFullURL)
      .then((data) => {
        messageDispatch({
          type: messageActionTypes.SET_MESSAGE,
          payload: {
            message: PASSWORD_RESET_SEND_EMAIL_TEXT.SEND_EMAIL_MESSAGE
          },
        })
        history.push(homeURL)
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
          {PASSWORD_RESET_SEND_EMAIL_TEXT.HEADER_TITLE}
        </HeaderWrapper>
        <EmailWrapper>
          <MaterialUITextField
            label={PASSWORD_RESET_SEND_EMAIL_TEXT.EMAIL_TEXT_FIELD_LABEL}
            value={email}
            setValue={setEmail}
            onKeyDown={(event) => onKeyDownEnter(event)}
          />
        </EmailWrapper>
        <ButtonWrapper>
          <MaterialUISendEmailButton
            onClick={handleSubmit}
            btnLabel={PASSWORD_RESET_SEND_EMAIL_TEXT.SUBMIT_BUTTON_LABEL}
          />
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
