import { Fragment, useReducer, useContext, useEffect } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { EDIT_EMAIL_TEXT } from "../constants";
import { SessionState, SessionDispatch, UserDispatch, UserState, MessageState, MessageDispatch } from '../context/Context';
import { MaterialUIReadOnlyTextField } from "../component/userComponent/MaterialUIReadOnlyTextField";
import { MaterialUIUserEmailLine } from "../component/userComponent/MaterialUIUserEmailLine";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { sendEmailToChangeEmailAddressApi } from "../apis/sendEmailapis";
import { authChangeEmailURL } from "../urls/index";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateEmail } from "../AppFunction";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const HeaderWrapper = styled.h1`
  margin-top:5%;
`;

const NowEmailWrapper = styled.div`
  margin-top:5%;
`;

const ChangeEmailWrapper = styled.div`
  margin-top:3%;
`;

const ButtonWrapper = styled.div`
  margin-top:3%;
  text-align:right;
`;

export const UserEditEmail = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const [state, dispatch] = useReducer(userReducer, initializeState);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: userActionTypes.SETTINGUSEREMAIL,
      payload: {
        email: sessionAuthState.currentUser.email
      }
    })
  }, [])

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleSubmit() {
    try {
      validateEmail(state.user.email);
      sendEmailToChangeEmailAddressApi(sessionAuthState.currentUser.id, state.user.email)
        .then((data) => {
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: EDIT_EMAIL_TEXT.SEND_EMAIL_TEXT
            },
          })
          history.push(authChangeEmailURL)
        })
        .catch(e =>
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: EDIT_EMAIL_TEXT.ERROR_CHANGE_EMAIL_MESSAGE
            },
          })
        );
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
          {EDIT_EMAIL_TEXT.HEADER_TITLE}
        </HeaderWrapper>
        <UserDispatch.Provider value={dispatch}>
          <UserState.Provider value={state}>
            <NowEmailWrapper>
              <MaterialUIReadOnlyTextField
                label={EDIT_EMAIL_TEXT.NOW_EMAIL_LABEL}
                value={sessionAuthState.currentUser.email}
              />
            </NowEmailWrapper>
            <ChangeEmailWrapper>
              <MaterialUIUserEmailLine
                label={EDIT_EMAIL_TEXT.NEW_EMAIL_LABEL}
                onKeyDown={(event) => onKeyDownEnter(event)}
              />
            </ChangeEmailWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton
                  onClick={() => handleSubmit()}
                  btnLabel={EDIT_EMAIL_TEXT.SUBMIT_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </UserState.Provider>
        </UserDispatch.Provider>
      </Wrapper>
    </Fragment >
  )
}
