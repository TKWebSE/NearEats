import React ,{ Fragment,useContext } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import {OrderState,OrderDispatch} from "../../context/Context";

import foodImage from "../../images/food-image.jpg";

const FoodCardWrapper = styled.div`
    text-align:center;
`;

const MainfoodImage = styled.img`
    width:100%;
    height:60%;
`;

const TextWrapper = styled.div`
    margin-bottom:5%;
    text-align:left;
`;

const FoodName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    text-decoration: none;
`;

const FoodPrice = styled.div`
    margin-left:5%;
`;


//foodを表示するカードコンポーネント
export const OrderIndexCard = () => {
    const orderState = useContext(OrderState);
    console.log(orderState)
    return(
    <Fragment>
        {
            /* <FoodCardWrapper>
            <Link to={`orders/${orderState.order.id}`} style={{ textDecoration: 'none' }}>
                <MainfoodImage src={orderImage} alt="orderImage"></MainfoodImage>
                <TextWrapper>
                    <FoodName>
                        {food.name}
                    </FoodName>
                    <FoodPrice>
                        ￥{food.price}
                    </FoodPrice>
                </TextWrapper>
            </Link>
            </FoodCardWrapper> */
            // console.log(orderState)
            // <Fragment>
            // <h1>"neko"</h1>
            <div>
            {orderState.id}
            </div>
            // </Fragment>
        }
    </Fragment>
    )
}