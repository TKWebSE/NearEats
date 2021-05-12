import React ,{ Fragment } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import foodImage from "../images/food-image.jpg";

const FoodCardWrapper = styled.div`
    text-align:center;
`;

const MainfoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const TextWrapper = styled.div`
    margin-bottom:5%;
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
export const FoodCard = ({food}) => {
    return(
    <Fragment>
        <FoodCardWrapper>
        <Link to={`foods/${food.id}`} style={{ textDecoration: 'none' }}>
            <MainfoodImage src={foodImage} alt="foodImage"></MainfoodImage>
            <TextWrapper>
                <FoodName>
                    {food.name}
                </FoodName>
                <FoodPrice>
                    ￥{food.price}
                </FoodPrice>
            </TextWrapper>
        </Link>
        </FoodCardWrapper>
    </Fragment>
    )
}