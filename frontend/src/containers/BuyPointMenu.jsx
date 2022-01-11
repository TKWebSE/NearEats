import { Fragment } from "react"
import styled from "styled-components";
import { BUY_POINT_MENU_TEXT } from "../constants";
import BuyPointRectangleModalComponent from "../component/PointComponent/BuyPointRectangleModalComponent";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { stripeCheckoutApi } from "../apis/stripeApis";

const Wrapper = styled.div``;

const NowPoint = styled.div``;

const BuyPointListWrapper = styled.div``;

export const BuyPointMenu = () => {

  function handleSubmit() {
    stripeCheckoutApi()
  }

  return (
    <Fragment>
      <Wrapper>
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
