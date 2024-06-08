import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useParams, } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { GUEST_ACTIVATE } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { guestCreateURL, passwordRegistrationURL } from "../urls/index";
import { GuestDispatch, GuestState, MessageState, MessageDispatch } from '../context/Context';
import { guestActivateApi } from "../apis/guestApis";
import { guestSessionActionTypes } from "../reducer/guestSessionReducer";
import { messageActionTypes } from "../reducer/messageReducer";
import CircularProgress from '@material-ui/core/CircularProgress';

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

export const GuestActivate = () => {
  const guestState = useContext(GuestState);
  const guestDispatch = useContext(GuestDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [authCode, setAuthCode] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function onKeyDownEnter(event) {
    handleSubmit()
  }

  function handleLinkClick() {
    history.push(guestCreateURL)
  }

  function handleSubmit() {
    try {
      setLoading(true);
      guestActivateApi(guestState.guest.id, authCode)
        .then((data) => {
          console.log("activateかんりょう")
          guestDispatch({
            type: guestSessionActionTypes.SET_ACTIVATE,
            payload: {
              activate: true
            },
          })
          messageDispatch({
            type: messageActionTypes.SET_MESSAGE,
            payload: {
              message: GUEST_ACTIVATE.COMPLETE_ACTIVATE_MESSAGE
            },
          })
          setLoading(false);
          history.push(passwordRegistrationURL);
        })
        .catch((e) => {
          setLoading(false);
          messageDispatch({
            type: messageActionTypes.SET_ERROR_MESSAGE,
            payload: {
              errorMessage: GUEST_ACTIVATE.ERROR_ACTIVATE_MESSAGE
            },
          })
        });
    } catch (e) {
      setLoading(false);
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: GUEST_ACTIVATE.ERROR_ACTIVATE_MESSAGE
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
              {GUEST_ACTIVATE.HEADER_TITLE}
            </TitleWrapper>
            <MaterialUITextField
              label={GUEST_ACTIVATE.TEXT_FIELD_LABEL}
              value={authCode}
              setValue={setAuthCode}
              onKeyDown={(event) => onKeyDownEnter(event)}
              helperText={GUEST_ACTIVATE.AUTH_CODE_HELPER_TEXT}
            />
            <LinkWrapper onClick={() => handleLinkClick()}>
              {GUEST_ACTIVATE.SIGN_UP_LINK_TEXT}
            </LinkWrapper>
            <ButtonWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton
                  onClick={() => handleSubmit()}
                  btnLabel={GUEST_ACTIVATE.SUBMIT_BUTTON_LABEL}
                />
              </ThemeProvider>
            </ButtonWrapper>
          </Wrapper>
      }
    </Fragment>
  )
}
