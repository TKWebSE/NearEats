import React ,{ Fragment } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import foodImage from "../../images/food-image.jpg";
import {foodShowURL} from "../../urls/index";

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
    font-size:180%;
    ${media.lessThan("large")`
        font-size:150%;
    `}
    ${media.lessThan("medium")`
        font-size:120%;
    `}
    ${media.lessThan("small")`
        font-size:110%;
    `}
`;

const FoodPrice = styled.div`
    font-size:150%;
    ${media.lessThan("large")`
        font-size:120%;
    `}
    ${media.lessThan("medium")`
        font-size:100%;
    `}
    ${media.lessThan("small")`
        font-size:90%;
    `}
`;


//foodを表示するカードコンポーネント
export const FoodCard = ({food}) => {
    return(
    <Fragment>
        <FoodCardWrapper>
        <Link to={foodShowURL(food.id)} style={{ textDecoration: 'none' }}>
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