import { Fragment } from "react"
import styled from "styled-components";
import { EDIT_MAIL_TEXT } from "../constants";

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

export const UserEditEmail = () => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);

  function handleSubmit() {

  }

  return (
    <Fragment>
      <HeaderWrapper>
        {EDIT_MAIL_TEXT.HEADER_TITLE}
      </HeaderWrapper>
      <NowMailWrapper>
        {EDIT_MAIL_TEXT}
      </NowMailWrapper>
      <ChangeMailWrapper>

      </ChangeMailWrapper>
      <ButtonWrapper>

      </ButtonWrapper>
    </Fragment>
  )
}
