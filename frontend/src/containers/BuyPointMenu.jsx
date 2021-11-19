import { Fragment } from "react"
import styled from "styled-components";
import { BUY_POINT_MENU_TEXT } from "../constants";

const NowPoint = styled.div``;

export const BuyPointMenu = () => {

  return (
    <Fragment>
      <NowPoint>{BUY_POINT_MENU_TEXT.NOW_POINT}</NowPoint>
    </Fragment>
  )
}
