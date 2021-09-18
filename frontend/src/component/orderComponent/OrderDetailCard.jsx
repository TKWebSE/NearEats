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
import { updateValuationOrderApi, updateCancelOrderApi } from "../../apis/orderApis";
import { useHistory } from "react-router-dom";
import { ordersIndexURL } from "../../urls/index";
import { COLORS } from "../../style_constants";
import { getOrderStatusText } from "./getOrderStatusText";
import MaterialUIUpdateRatingStar from "../MaterialUIUpdateRatingStar";
import { orderActionTypes } from "../../reducer/orderReducer";

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
    margin:0 0 0 auto;
`;

const OrderDetailCancelButtomWrapper = styled.div`
`;



export const OrderDetailCard = () => {
    const state = useContext(OrderState);
    const dispatch = useContext(OrderDispatch)
    const history = useHistory();

    function submitOrderCancelHandle() {
        updateCancelOrderApi(state.order, ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL)
            .then((data) => {
                console.log(data)
                history.push(ordersIndexURL);
            })
    }

    function submitValuationHandle() {
        updateValuationOrderApi(state.order, ORDER_TASK_STATUS_NUMBERS.TASKFINISH)
            .then((data) => {
                console.log(data)
                history.push(ordersIndexURL);
            })
    }

    return (
        <Fragment>
            <OrderDetailCardWrapper>
                <ImageStatusWrapper>
                    <FoodImage src={foodImage} alt="foodImage"></FoodImage>
                    <OrderStatus>
                        {getOrderStatusText(state.order.order_status).STATUS_TEXT}
                    </OrderStatus>
                </ImageStatusWrapper>
                <FoodName>
                    {state.order.name}
                </FoodName>
                <FoodPrice>
                    ￥{state.order.price}
                </FoodPrice>
                <FoodDescription>
                    {state.order.description}
                </FoodDescription>
                <OrderStatusWrapper>
                    <OrderStatusTextWrapper>
                        {getOrderStatusTimeText(state.order.order_status).STATUS_TEXT}
                    </OrderStatusTextWrapper>
                    <OrderStatusTImeWrapper>
                        {
                            state.order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED ?
                                <UnFinishedWrapper>
                                    <OrderCreateTimeWrapper>
                                        {changeJSTDate(state.order.created_at)}
                                    </OrderCreateTimeWrapper>
                                </UnFinishedWrapper>
                                :
                                <FinishedWrapper>
                                    <OrderUpdateTimeWrapper>
                                        {changeJSTDate(state.order.updated_at)}
                                    </OrderUpdateTimeWrapper>
                                </FinishedWrapper>
                        }

                    </OrderStatusTImeWrapper>
                </OrderStatusWrapper>
                {
                    state.order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED ?
                        <OrderCancelWrapper>
                            <OrderValuationText>
                                {ORDER_TEXT.ORDER_CANCEL_TEXT}
                            </OrderValuationText>
                            <ThemeProvider theme={ButtonTheme}>
                                <ValuationButtomWrapper>
                                    <MaterialUICommonButton
                                        onClick={() => submitOrderCancelHandle()}
                                        btnLabel={ORDER_TEXT.ORDER_CANCEL_BUTTON_LABEL}
                                    />
                                </ValuationButtomWrapper>
                            </ThemeProvider>
                        </OrderCancelWrapper>
                        :
                        null
                }
                {
                    state.order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION ?
                        <OrderValuationWrapper>
                            <OrderValuationText>
                                {ORDER_TEXT.ORDER_VALUATION_TEXT}
                            </OrderValuationText>
                            <RatingStarWrapper>
                                <MaterialUIUpdateRatingStar />
                            </RatingStarWrapper>
                            <ThemeProvider theme={ButtonTheme}>
                                <ValuationButtomWrapper>
                                    <MaterialUICommonButton
                                        onClick={() => submitValuationHandle()}
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
