import React ,{Fragment} from "react";
import styled from "styled-components";
import { FoodDispatch } from "../../context/Context";


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
                    {Food.Name} 
                </OrderFoodName>
                <OrderFoodPrice>
                    {Food.Price}
                </OrderFoodPrice>
                <OrderFoodMaker>
                    {Food.Maker}
                </OrderFoodMaker>
                <OrderStatus>
                    {Food.status}
                </OrderStatus>
            </DetailCardWrapper>
        </Fragment>
    )
}