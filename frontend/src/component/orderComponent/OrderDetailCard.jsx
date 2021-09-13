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
import MaterialUISimpleModal from "../MaterialUISimpleModal";
import { updateOrderApi } from "../../apis/orderApis";
import { useHistory } from "react-router-dom";
import { myTaskIndexURL } from "../../urls/index";
import { COLORS } from "../../style_constants";
import { getOrderStatusText } from "./getOrderStatusText";

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

const OrderUserInfoText = styled.h2`
    color:${COLORS.STATUS_COLOR};
    margin-bottom:0;
`;

const OrderUserName = styled.h3`
    margin-top:1%;

`;

const OrderUserAddress = styled.div`
    margin-top:1%;
`;

const OrderStatusTextWrapper = styled.div`
    float:left;
`;

const OrderStatusTImeWrapper = styled.div`
`;

const OrderNotFinishedWrapper = styled.div`
`;

const UnFinishedWrapper = styled.div`
    display: flex;
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

const OrderDetailFinisheButtomWrapper = styled.div`
    margin:0 0 0 auto;
`;

const OrderDetailCancelButtomWrapper = styled.div`
`;



export const OrderDetailCard = () => {
    const state = useContext(OrderState);
    const dispatch = useContext(OrderDispatch)
    const history = useHistory();

    function orderCancelHandle() {
        console.log(state)
        updateOrderApi(state.order, ORDER_TASK_STATUS_NUMBERS.TASKCANCEL)
            .then((data) => {
                history.push(myTaskIndexURL);
            })
    }

    function orderFinisiheHandle() {
        updateOrderApi(state.order, ORDER_TASK_STATUS_NUMBERS.TASKFINISH)
            .then((data) => {
                history.push(myTaskIndexURL);
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
                    state.order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION ?
                        <OrderNotFinishedWrapper>
                            <OrderUserInfoText>
                                {ORDER_TEXT.ORDER_VALUATION_TEXT}
                            </OrderUserInfoText>
                            <OrderUserInfoWrapper>
                                <OrderUserName>
                                    {state.order_user.name}
                                </OrderUserName>
                                <OrderUserAddress>
                                    {state.order_user.address}
                                </OrderUserAddress>
                            </OrderUserInfoWrapper>
                            <OrderDetailCardButtom>
                                <ThemeProvider theme={ButtonTheme}>
                                    <OrderDetailFinisheButtomWrapper>
                                        <MaterialUISimpleModal
                                            onClick={() => orderFinisiheHandle()}
                                            btnLabel={ORDER_TEXT.TASK_FINISH_BUTTOM_LABEL}
                                            modalTilte={ORDER_TEXT.TASK_FINISH_MODALTITLE}
                                            modalText={ORDER_TEXT.TASK_FINISH_MODAL_TEXT}
                                        />
                                    </OrderDetailFinisheButtomWrapper>
                                    <OrderDetailCancelButtomWrapper>
                                        <MaterialUISimpleModal
                                            onClick={() => orderCancelHandle()}
                                            btnLabel={ORDER_TEXT.TASK_CANCEL_BUTTOM_LABEL}
                                            modalTilte={ORDER_TEXT.TASK_CANCEL_MODAL_TITLE}
                                            modalText={ORDER_TEXT.TASK_CANCEL_MODAL_TEXT}
                                        />
                                    </OrderDetailCancelButtomWrapper>
                                </ThemeProvider>
                            </OrderDetailCardButtom>
                        </OrderNotFinishedWrapper>
                        :
                        null
                }
            </OrderDetailCardWrapper>
        </Fragment >
    )
}
