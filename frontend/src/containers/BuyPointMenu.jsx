import { Fragment } from "react"
import styled from "styled-components";
import { BUY_POINT_MENU_TEXT } from "../constants";
import { BuyPointRectangleModalComponent } from "../component/PointComponent/BuyPointRectangleModalComponent";

const NowPoint = styled.div``;

const BuyPointListWrapper = styled.div``;

export const BuyPointMenu = () => {

  return (
    <Fragment>
      <NowPoint>{BUY_POINT_MENU_TEXT.NOW_POINT}</NowPoint>
      <BuyPointListWrapper>
        <BuyPointRectangleModalComponent />
      </BuyPointListWrapper>
    </Fragment>
  )
}
