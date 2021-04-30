import React ,{ Fragment } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import foodImage from "../images/food-image.jpg";

const FoodCardWrapper = styled.div`
    width:100%;
    height:100%;
`;

const TextWrapper = styled.div`
    margin-bottom:5%;
`;

const FoodName = styled.h3`
    margin-top:5%;
    margin-bottom:0px;
    text-decoration: none;
`;

const FoodPrice = styled.div`
    
`;

const FoodDescription = styled.div`
`;

const MainfoodImage = styled.img`
    width:100%;
    height:30%;
`;

//foodを表示するカードコンポーネント
export const FoodCard = ({food}) => {
    return(
    <Fragment>
        <FoodCardWrapper>
        <Link to={"foods/${food.id}"} style={{ textDecoration: 'none' }}>
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