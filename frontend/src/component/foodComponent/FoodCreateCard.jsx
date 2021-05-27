import React,{Fragment} from "react";
import styled from "styled-components";
import {MaterialUISetFoodNameLine} from "../foodComponent/MaterialUISetFoodNameLine";
import {MaterialUIFoodPriceLine} from "../foodComponent/MaterialUIFoodPriceLine";
import {MaterialUIFoodDescriptionMultiLine} from "../foodComponent/MaterialUIFoodDescriptionMultiLine";

const FoodCreateCardWrapper = styled.div`
`;

const FoodName = styled.div`
`;

const FoodPrice = styled.div`
`;

const FoodDescription = styled.div`
`;
export const FoodCreateCard = () => {
    return(
        <Fragment>
            <FoodCreateCardWrapper>
                <FoodName>
                    <MaterialUISetFoodNameLine></MaterialUISetFoodNameLine>
                </FoodName>
                <FoodPrice>
                    <MaterialUIFoodPriceLine></MaterialUIFoodPriceLine>
                </FoodPrice>
                <FoodDescription>
                    <MaterialUIFoodDescriptionMultiLine></MaterialUIFoodDescriptionMultiLine>
                </FoodDescription>
            </FoodCreateCardWrapper>
        </Fragment>
    )
}
