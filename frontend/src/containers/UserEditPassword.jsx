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
  padding-left:90%;
  ${media.lessThan("large")`
    padding-left:89%;
  `}
  ${media.lessThan("medium")`
    padding-left:80%;
  `}
  ${media.lessThan("small")`
    padding-left:70%;
  `}
`;

export const UserEditPassword = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [newPasswordValue, setNewPassword] = useState("");
  const [confirmationPasswordValue, setConfirmationPassword] = useState("");
  // const [state, dispatch] = useReducer(userReducer, initializeState);
  const history = useHistory();

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    console.log("aaaaaa")
    try {
      if (!(newPasswordValue === confirmationPasswordValue)) {
        throw EDIT_PASSWORD_TEXT.ERROR_UNMATCHPASSWORD
      }
      sendEmailToChangePasswordApi(sessionAuthState.currentUser.id, newPasswordValue)
        .then((data) => {
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
              onClick={() => handleSubmit}
              btnLabel={EDIT_PASSWORD_TEXT.SUBMIT_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
