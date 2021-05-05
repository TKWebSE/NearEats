import React,{ Fragment } from "react";
import styled from "styled-components";
import foodImage from "../images/food-image.jpg";
import {MaterialUIFoodDescriptionMultiLine} from "./MaterialUIFoodDescriptionMultiLine";
import {MaterialUIFoodPriceLine} from "./MaterialUIFoodPriceLine";
import TextField from '@material-ui/core/TextField';
const FoodCardWrapper = styled.div`
`;

const FoodImage = styled.img`
    width:60%;
    height:40%;
    margin-left:5%;
`;

const FoodName = styled.h1`
    margin-left:5%;
`;

const FoodPrice = styled.h2`
   margin-left:5%;
`;

const FoodDesicription = styled.div`
    margin-left:5%;
`;

//foodの編集画面用のカードコンポーネント
export const FoodEditCard = (food) => {
    
    return (
        <Fragment>
        <FoodCardWrapper>
            <FoodImage src={foodImage} alt="foodImage"></FoodImage>
            <FoodName>
                {food.name}
            </FoodName>
            <FoodPrice>
                ￥<MaterialUIFoodPriceLine {...food}></MaterialUIFoodPriceLine>
            </FoodPrice>
            <FoodDesicription>
                <MaterialUIFoodDescriptionMultiLine {...food} ></MaterialUIFoodDescriptionMultiLine>
            </FoodDesicription>
        </FoodCardWrapper>
        </Fragment>
    )
}