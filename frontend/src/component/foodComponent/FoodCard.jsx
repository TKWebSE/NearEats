import React, { Fragment } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import foodImage from "../../images/food-image.jpg";
import { foodShowURL } from "../../urls/index";
import Skeleton from '@material-ui/lab/Skeleton';
import { changeImageURL } from "../../AppImageFunction";
import noImage from "../../images/noImage.jpg";

const FoodCardWrapper = styled.div`
    text-align:center;
`;

const FoodImage = styled.img`
// width:320px;
// height:180px;
${media.greaterThan("huge")`
width:300px;
height:160px;
`}
    ${media.lessThan("huge")`
    width:200px;
    height:140px;
    `}
    ${media.lessThan("medium")`
    width:140px;
    height:100px;
    `}
    ${media.lessThan("small")`
    width:320px;
    height:180px;
    `}
`;

const TextWrapper = styled.div`
    margin-bottom:5%;
    text-align:left;
    color:black;
`;

const FoodName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    text-decoration: none;
    font-size:180%;
    width:100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${media.lessThan("large")`
        font-size:150%;
    `}
    ${media.lessThan("medium")`
        font-size:120%;
    `}
    ${media.lessThan("small")`
        font-size:150%;
    `}
`;

const FoodPrice = styled.div`
    font-size:150%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${media.lessThan("large")`
        font-size:120%;
    `}
    ${media.lessThan("medium")`
        font-size:100%;
    `}
    ${media.lessThan("small")`
        font-size:120%;
    `}
`;

const OneSkeltonWrapper = styled.div`
    width:100%;
    height:60%;
`;


//foodを表示するカードコンポーネント
export const FoodCard = ({ food }) => {
    return (
        <Fragment>
            <FoodCardWrapper>
                <Link to={foodShowURL(food.id)} style={{ textDecoration: 'none' }}>
                    <FoodImage src={food.image.url === null ? noImage : changeImageURL(food.image.url)} alt="foodImage"></FoodImage>
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
