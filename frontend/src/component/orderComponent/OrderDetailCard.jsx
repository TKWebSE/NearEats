import React ,{Fragment} from "react";
import styled from "styled-components";
import {OrderState,OrderDispatch} from "../../context/Context";


const DetailCardWrapper = styled.div`
`;

const OrderFoodName = styled.div`
`;

const OrderFoodPrice = styled.div`
`;

const OrderFoodMaker = styled.div`
`;

const OrderStatus = styled.div`
`;

export const OrderDetailCard = () => {

    return(
        <Fragment>
            <DetailCardWrapper>
                <OrderFoodName>
                    {OrderState.FoodName} 
                </OrderFoodName>
                <OrderFoodPrice>
                    {OrderState.FoodPrice}
                </OrderFoodPrice>
                <OrderFoodMaker>
                    {OrderState.FoodMaker}
                </OrderFoodMaker>
                <OrderStatus>
                    {OrderState.status}
                </OrderStatus>
            </DetailCardWrapper>
        </Fragment>
    )
}