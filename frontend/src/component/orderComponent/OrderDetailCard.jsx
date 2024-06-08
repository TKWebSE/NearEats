import React, { Fragment, useContext, useState } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme, RedButtonTheme } from "../../style_constants";
import { OrderState, OrderDispatch } from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import { changeJSTDate } from "../../AppFunction";
import { ORDER_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";
import { getOrderStatusTimeText } from "./getOrderStatusTimeText";
import { MaterialUICommonButton } from "../MaterialUICommonButton";
import { useHistory } from "react-router-dom";
import { ordersIndexURL } from "../../urls/index";
import { COLORS } from "../../style_constants";
import { getOrderStatusText } from "./getOrderStatusText";
import MaterialUIUpdateRatingStar from "../MaterialUIUpdateRatingStar";
import { orderActionTypes } from "../../reducer/orderReducer";
import MaterialUISimpleModal from "../../component/MaterialUISimpleModal";
import { changeImageURL } from "../../AppImageFunction";

const OrderDetailCardWrapper = styled.div`
    text-align:left;
`;

const OrderStatusWrapper = styled.div`
`;

const ImageStatusWrapper = styled.div`
    position:relative;
`;

const FoodImage = styled.img`
    width:100%;
    height:100%;
    margin-bottom:2%;
`;

const OrderStatus = styled.div`
    position:absolute;
    font-weight:bolder;
    top:0%;
    left:50;
    width:18%;
    margin-bottom:1%;
    background-color:red;
    text-align:center;
    color:white;
    padding:1%;
`;

const FoodName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodPrice = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodDescription = styled.h2`
`;

const OrderUserInfoWrapper = styled.div`
    border: solid;
    border-color: #F0F0F0 ;
    border-radius:5%;
    padding-top:1%;
    padding-left:1%;
    padding-right:1%;
    padding-bottom:1%;
`;

const OrderValuationText = styled.h2`
    // color:red;
    margin-bottom:0;
`;
const OrderStatusTextWrapper = styled.div`
    float:left;
`;

const OrderStatusTImeWrapper = styled.div`
`;

const OrderCancelWrapper = styled.div`
`;

const OrderValuationWrapper = styled.div`
    border: solid;
    border-color: #F0F0F0;
    padding-top:2%;
    padding-left:2%;
    padding-bottom:3%;
`;

const UnFinishedWrapper = styled.div`
    // display: flex;
`;

const OrderCreateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

const FinishedWrapper = styled.div`
    display: flex;
`;

const OrderUpdateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

const OrderDetailCardButtom = styled.div`
    display: flex;
    margin-top:2%;
`;

const RatingStarWrapper = styled.div`
`;

const ValuationButtomWrapper = styled.div`
    // margin:0 0 0 auto;
    text-align:right;
`;

const OrderDetailCancelButtomWrapper = styled.div`
`;



export const OrderDetailCard = ({ order, food, valuation, cancelHandle, valuationHandle, dispatch }) => {
    const history = useHistory();


    console.log(order)
    console.log(food)
    console.log(valuation)
    return (
        <Fragment>
            <OrderDetailCardWrapper>
                <ImageStatusWrapper>
                    <FoodImage src={changeImageURL(food.image.url)} alt="foodImage"></FoodImage>
                    <OrderStatus>
                        {getOrderStatusText(order.order_status).STATUS_TEXT}
                    </OrderStatus>
                </ImageStatusWrapper>
                <FoodName>
                    {food.name}
                </FoodName>
                <FoodPrice>
                    ￥{food.price}
                </FoodPrice>
                <FoodDescription>
                    {food.description}
                </FoodDescription>
                <OrderStatusWrapper>
                    <OrderStatusTextWrapper>
                        {getOrderStatusTimeText(order.order_status).STATUS_TEXT}
                    </OrderStatusTextWrapper>
                    <OrderStatusTImeWrapper>
                        {
                            order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED ?
                                <UnFinishedWrapper>
                                    <OrderCreateTimeWrapper>
                                        {changeJSTDate(order.created_at)}
                                    </OrderCreateTimeWrapper>
                                </UnFinishedWrapper>
                                :
                                <FinishedWrapper>
                                    <OrderUpdateTimeWrapper>
                                        {changeJSTDate(order.updated_at)}
                                    </OrderUpdateTimeWrapper>
                                </FinishedWrapper>
                        }

                    </OrderStatusTImeWrapper>
                </OrderStatusWrapper>
                {
                    order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED ?
                        <OrderCancelWrapper>
                            <OrderValuationText>
                                {ORDER_TEXT.ORDER_CANCEL_TEXT}
                            </OrderValuationText>
                            <ThemeProvider theme={ButtonTheme}>
                                <ValuationButtomWrapper>
                                    <MaterialUISimpleModal
                                        btnLabel={ORDER_TEXT.ORDER_CANCEL_BUTTON_LABEL}
                                        onClick={cancelHandle}
                                        modalTilte={ORDER_TEXT.ORDER_CANCEL_MODAL_TITLE}
                                        modalText={ORDER_TEXT.ORDER_CANCEL_MODAL_TEXT}
                                    />
                                </ValuationButtomWrapper>
                            </ThemeProvider>
                        </OrderCancelWrapper>
                        :
                        null
                }
                {
                    order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION ?
                        <OrderValuationWrapper>
                            <OrderValuationText>
                                {ORDER_TEXT.ORDER_VALUATION_TEXT}
                            </OrderValuationText>
                            <RatingStarWrapper>
                                <MaterialUIUpdateRatingStar valuation={valuation} dispatch={dispatch} />
                            </RatingStarWrapper>
                            <ThemeProvider theme={ButtonTheme}>
                                <ValuationButtomWrapper>
                                    <MaterialUICommonButton
                                        onClick={valuationHandle}
                                        btnLabel={ORDER_TEXT.FINISHTASK_BUTTON_LABEL}
                                    />
                                </ValuationButtomWrapper>
                            </ThemeProvider>
                        </OrderValuationWrapper>
                        :
                        null
                }
            </OrderDetailCardWrapper>
        </Fragment >
    )
}
