import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ORDER_TASK_STATUS_NUMBERS } from "../../constants";
import { changeJSTDate } from "../../AppFunction";
import foodImage from "../../images/food-image.jpg";
import { COLORS } from "../../style_constants";
import { getOrderStatusText } from "./getOrderStatusText";
import { getOrderStatusTimeText } from "./getOrderStatusTimeText";
import { changeImageURL } from "../../AppImageFunction";

const OrderIndexCardWrapper = styled.div`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  justify-content:space-between;
  height:30%;
  width:100%;
`;

const FoodImageWrapper = styled.div`
  width:25%;
`;

const CancelFoodImageWrapper = styled.div`
  width:25%;
  opacity:0.3;
`;

const FoodImage = styled.img`
  width:100%;
  height:100%;
`;

const OrderIndexCardTextWrapper = styled.div`
  width:75%;
`;

const OrderIndexCardUpsideWrapper = styled.div`
  display: flex;
  align-items:center;
`;

const FoodNameWrapper = styled.h2`
  width:85%;
  font-size:30px;
  ${media.greaterThan("large")`
    font-size:40px;
  `}
  ${media.lessThan("large")`
    font-size:25px;
  `}
  ${media.lessThan("medium")`
    font-size:16px;
  `}
  ${media.lessThan("small")`
    font-size:11px;
  `}
`;

const OrderStatusWrapper = styled.div`
  width:21%;
  margin-bottom:1%;
  background-color:${COLORS.STATUS_COLOR};
  border-radius:100%;
  text-align:center;
  color:white;
  padding:2% 1% 2% 1%;
  margin:0% 1% 1% 1%;
  ${media.lessThan("large")`
    font-size:15px;
  `}
  ${media.lessThan("medium")`
    font-size:11px;
  `}
  ${media.lessThan("small")`
    font-size:1px;
  `}
`;

const OrderIndexCardDownsideWrapper = styled.div`
  display: flex;
  width:100%;
  align-items:center;
`;

const FoodPriceWrapper = styled.h2`
  width:40%;
  font-size:30px;
  ${media.greaterThan("large")`
    font-size:40px;
  `}
  ${media.lessThan("large")`
    font-size:25px;
  `}
  ${media.lessThan("medium")`
    font-size:15px;
  `}
  ${media.lessThan("small")`
    font-size:11px;
    width:10%;
  `}
`;

const TimeWrapper = styled.div`
  width:55%;
  text-align:right;
  font-size:20px;
  ${media.lessThan("large")`
    font-size:16px;
  `}
  ${media.lessThan("medium")`
    font-size:11px;
  `}
  ${media.lessThan("small")`
    font-size:5px;
    width:100%;
  `}
`;

const FinishedWrapper = styled.div`
  text-align:right;
`;

const UnFinishedWrapper = styled.div`
  text-align:right;
`;


export const OrderIndexCard = ({ order, food }) => {

  return (
    <Fragment>
      <OrderIndexCardWrapper>
        {
          order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL || order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL || order.order_status === ORDER_TASK_STATUS_NUMBERS.COMPLETE_ORDER ?
            <CancelFoodImageWrapper>
              <FoodImage src={changeImageURL(food.image.url)} alt="orderImage"></FoodImage>
            </CancelFoodImageWrapper>
            :
            <FoodImageWrapper>
              <FoodImage src={changeImageURL(food.image.url)} alt="orderImage"></FoodImage>
            </FoodImageWrapper>
        }
        <OrderIndexCardTextWrapper>
          <OrderIndexCardUpsideWrapper>
            <FoodNameWrapper>
              {food.name}
            </FoodNameWrapper>
            <OrderStatusWrapper>
              {getOrderStatusText(order.order_status).STATUS_TEXT}
            </OrderStatusWrapper>
          </OrderIndexCardUpsideWrapper>
          <OrderIndexCardDownsideWrapper>
            <FoodPriceWrapper>
              ￥{food.price}
            </FoodPriceWrapper>
            <TimeWrapper>
              {
                order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION ?
                  <UnFinishedWrapper>
                    {getOrderStatusTimeText(order.order_status).STATUS_TEXT}
                    {changeJSTDate(order.created_at)}
                  </UnFinishedWrapper>
                  :
                  <FinishedWrapper>
                    {getOrderStatusTimeText(order.order_status).STATUS_TEXT}
                    {changeJSTDate(order.updated_at)}
                  </FinishedWrapper>
              }
            </TimeWrapper>
          </OrderIndexCardDownsideWrapper>
        </OrderIndexCardTextWrapper>
      </OrderIndexCardWrapper>
    </Fragment>
  )
}
