import { Fragment, useContext, useReducer, useEffect } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { EDIT_PASSWORD_TEXT } from "../constants";
import { SessionState, SessionDispatch } from "../context/Context";
import { MaterialUIUserPasswordLine } from "../component/userComponent/MaterialUIUserPasswordLine";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { updatePasswordApi } from "../apis/userApis";
import { settingURL } from "../urls/index";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const HeaderWrapper = styled.h1`
    margin-top:5%;
`;

const ChangePasswordWrapper = styled.div``;

const ConfirmPasswordWrapper = styled.div``;

const ButtonWrapper = styled.div``;

export const UserEditPassword = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const [state, dispatch] = useReducer(userReducer, initializeState);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: userActionTypes.SETTINGUSERPASSWORD,
      payload: {
        password: sessionAuthState.currentUser.password
      }
    })
  }, [])

  function handleSubmit() {
    updatePasswordApi(sessionAuthState.currentUser.id, state.user.password)
      .then((data) => {
        history.push(settingURL)
      })
      .catch(e => console.log(e));
  }
  //passwordLineに送るvalueをどうするか？
  return (
    <Fragment>
      <Wrapper>
        <HeaderWrapper>
          {EDIT_PASSWORD_TEXT.HEADER_TITLE}
        </HeaderWrapper>
        <ChangePasswordWrapper>
          <MaterialUIUserPasswordLine />
        </ChangePasswordWrapper>
        <MaterialUIUserPasswordLine />
        <ConfirmPasswordWrapper>
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
