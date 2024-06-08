import { Fragment } from "react";
import NotFoundCat from "../../images/NotFoundCat.jpeg";
import styled from "styled-components";
import media from "styled-media-query";
import { MaterialUICommonButton } from "../MaterialUICommonButton";

const DetailWrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
  margin-bottom:5%;
`;

const NotFoundCatWrapper = styled.div`
`;

const NotFoundCatImage = styled.img`
    ${media.lessThan("small")`
        width:120%;
    `}
`;

const FirstTextWrapper = styled.div`
  position:absolute;
  font-weight:bold;
  top: 50%;
  left: 30%;
  font-size:160%;
  ${media.lessThan("large")`
    left:33%;
  `}
  ${media.lessThan("medium")`
      left:20%;
  `}
  ${media.lessThan("small")`
      left:5%;
  `}
`;

const SecondTextWrapper = styled.div`
  position:absolute;
  font-weight:bold;
  top: 60%;
  left: 30%;
  font-size:160%;
  ${media.lessThan("large")`
      left:33%;
  `}
  ${media.lessThan("medium")`
      left:20%;
  `}
  ${media.lessThan("small")`
      left:5%;
  `}
`;

const BtnWrapper = styled.div`
  position:absolute;
  top: 80%;
  left: 35%;
  ${media.lessThan("huge")`
      left:40%;
  `}
  ${media.lessThan("large")`
      left:43%;
  `}
  ${media.lessThan("medium")`
      left:30%;
  `}
  ${media.lessThan("small")`
      left:22%;
  `}
`;

export const NotFoundCatComponent = ({ firstText, secondText, btnLabel, onClick }) => {

  return (
    <Fragment>
      <NotFoundCatWrapper>
        <NotFoundCatImage src={NotFoundCat} />
      </NotFoundCatWrapper>
      <FirstTextWrapper>
        {firstText}
      </FirstTextWrapper>
      <SecondTextWrapper>
        {secondText}
      </SecondTextWrapper>
      <BtnWrapper>
        <MaterialUICommonButton
          onClick={onClick}
          btnLabel={btnLabel} />
      </BtnWrapper>
    </Fragment>
  )
}
