import React,{ Fragment } from "react";
import styled from "styled-components";
import foodImage from "../images/food-image.jpg";
import {OutlinedMultilineStatic} from "./MaterialUIMultiLine";

const FoodCardWrapper = styled.div`
`;

const FoodImage = styled.img`
    width:60%;
    height:40%;
`;

const FoodName = styled.h1`
    margin-left:5%;
`;

const FoodPrice = styled.h2`
   margin-left:5%;
`;

const FoodDesicription = styled.div`
`;


export const FoodEditCard = (food) => {
    return (
        <Fragment>
        <FoodCardWrapper>
            <div class="form-control">
            <FoodImage src={foodImage} alt="foodImage"></FoodImage>
            <FoodName>
                {food.name}
            </FoodName>
            <FoodPrice>
                ￥{food.price}
            </FoodPrice>
            <FoodDesicription>
                <OutlinedMultilineStatic></OutlinedMultilineStatic>
            </FoodDesicription>
            </div>
        </FoodCardWrapper>
        </Fragment>
    )
}