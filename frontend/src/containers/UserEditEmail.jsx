import { Fragment, useReducer, useContext, useEffect } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { EDIT_EMAIL_TEXT } from "../constants";
import { SessionState, SessionDispatch, UserDispatch, UserState } from '../context/Context';
import { MaterialUIReadOnlyTextField } from "../component/userComponent/MaterialUIReadOnlyTextField";
import { MaterialUIUserEmailLine } from "../component/userComponent/MaterialUIUserEmailLine";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { updateEmailApi } from "../apis/userApis";
import { settingURL } from "../urls/index";

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
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: userActionTypes.SETTINGUSEREMAIL,
      payload: {
        email: sessionAuthState.currentUser.email
      }
    })
  }, [])

  function handleSubmit() {
    updateEmailApi(sessionAuthState.currentUser.id, state.user.email)
      .then((data) => {
        console.log("seiko")
        // history.push(settingURL)
      })
      .catch(e => console.log(e));
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
