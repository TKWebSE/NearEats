import { Fragment, useContext } from "react"
import styled from "styled-components";
import { EDIT_PASSWORD_TEXT } from "../constants";
import { SessionState, SessionDispatch } from "../context/Context";
import { MaterialUIUserPasswordLine } from "../component/userComponent/MaterialUIUserPasswordLine";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";

const HeaderWrapper = styled.h1`
    margin-top:5%;
    margin-left:7%;
`;

const UserEditCardWrapper = styled.div`
    margin-left:5%;
    margin-right:5%;
`;

const NowMailWrapper = styled.div``;

const ChangeMailWrapper = styled.div``;

const ButtonWrapper = styled.div``;

export const UserEditPassword = () => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);

  function handleSubmit() {

  }

  return (
    <Fragment>
      <HeaderWrapper>
        {EDIT_PASSWORD_TEXT.HEADER_TITLE}
      </HeaderWrapper>
      <ChangeMailWrapper>
        <MaterialUIUserPasswordLine />
      </ChangeMailWrapper>
      <ButtonWrapper>
        <MaterialUICommonButton />
      </ButtonWrapper>
    </Fragment>
  )
}
