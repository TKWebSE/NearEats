import { Fragment } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { BUY_POINT_MENU_TEXT } from "../constants";
import BuyPointRectangleModalComponent from "../component/PointComponent/BuyPointRectangleModalComponent";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { stripeCheckoutAApi, stripeCheckoutApi } from "../apis/stripeApis";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
`;

const NowPoint = styled.div``;

const BuyPointListWrapper = styled.div``;

export const BuyPointMenu = () => {
  const history = useHistory();

  function handleSubmit() {
    stripeCheckoutApi()
      .then((data) => {
        window.location.replace(data.url)
      })
  }

  return (
    <Fragment>
      <Wrapper>
        <TitleWrapper>
          {BUY_POINT_MENU_TEXT.TITLE}
        </TitleWrapper>
        <NowPoint>{BUY_POINT_MENU_TEXT.NOW_POINT}</NowPoint>
        <BuyPointListWrapper>
          <CommonReloadButton
            onClick={handleSubmit}
            btnLabel={"購入する"}
          />
        </BuyPointListWrapper>

      </Wrapper>
    </Fragment >
  )
}
