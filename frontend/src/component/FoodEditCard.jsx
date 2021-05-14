import React,{ Fragment } from "react";
import styled from "styled-components";
import foodImage from "../images/food-image.jpg";
import {MaterialUIFoodDescriptionMultiLine} from "./MaterialUIFoodDescriptionMultiLine";
import {MaterialUIFoodPriceLine} from "./MaterialUIFoodPriceLine";
import MaterialUISetFoodNameLine from "./MaterialUISetFoodNameLine";
const FoodCardWrapper = styled.div`
    text-align:center;
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const FoodName = styled.h1`
    text-align:left;
    margin-left:5%;
    margin-right:5%;
`;

const FoodPrice = styled.h2`
   text-align:left;
   margin-left:5%;
   margin-right:5%;
`;

const FoodDesicription = styled.div`
    text-align:left;
    margin-left:5%;
    margin-right:5%;
`;

//foodの編集画面用のカードコンポーネント
export const FoodEditCard = (food,handleSetPriceValue) => {
    
    return (
        <Fragment>
        <FoodCardWrapper>
            <FoodImage src={foodImage} alt="foodImage"></FoodImage>
            <FoodName>
                <MaterialUISetFoodNameLine {...food}></MaterialUISetFoodNameLine>
            </FoodName>
            <FoodPrice>
                <MaterialUIFoodPriceLine {...food} handleSetPriceValue></MaterialUIFoodPriceLine>
            </FoodPrice>
            <FoodDesicription>
                <MaterialUIFoodDescriptionMultiLine {...food} ></MaterialUIFoodDescriptionMultiLine>
            </FoodDesicription>
        </FoodCardWrapper>
        </Fragment>
    )
}