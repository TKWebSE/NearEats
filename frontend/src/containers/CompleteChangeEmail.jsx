import { Fragment } from "react";
import styled from "styled-components";
import { COMPLETE_CHANGE_EMAIL } from "../constants";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
`;

const TextWrapper = styled.h2`
`;

export const CompleteChangeEmail = () => {

  return (
    <Fragment>
      <Wrapper>
        <TitleWrapper>
          {COMPLETE_CHANGE_EMAIL.TITLE}
        </TitleWrapper>
        <TextWrapper>
          {COMPLETE_CHANGE_EMAIL.SUB_TEXT}
        </TextWrapper>
      </Wrapper>
    </Fragment>
  )
}
