import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { AUTH_CHANGE_EMAIL } from "../constants";
import { MaterialUITextField } from "../component/MaterialUITextField";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { editEmailURL } from "../urls/index";
import { SessionState, SessionDispatch } from '../context/Context';
import { updateEmailApi } from "../apis/sendEmailapis";

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

export const AuthChangeEmail = () => {
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);
  const [value, setValue] = useState("");
  const history = useHistory();

  function handleOnClick() {
    history.push(editEmailURL)
  }
  //どこからnewEmailをもってくるか
  function handleSubmit() {
    updateEmailApi(sessionAuthState.currentUser.id);
  }

  return (
    <Fragment>
      <Wrapper>
        <TitleWrapper>
          {AUTH_CHANGE_EMAIL.HEADER_TITLE}
        </TitleWrapper>
        <MaterialUITextField
          label={AUTH_CHANGE_EMAIL.TEXT_FIELD_LABEL}
          value={value}
          setValue={setValue}
        />
        <LinkWrapper onClick={() => handleOnClick()}>
          {AUTH_CHANGE_EMAIL.EDIT_EMAIL_LINK_TEXT}
        </LinkWrapper>
        <ButtonWrapper>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton
              onClick={() => handleSubmit()}
              btnLabel={AUTH_CHANGE_EMAIL.SUBMIT_BUTTON_LABEL}
            />
          </ThemeProvider>
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
  )
}
