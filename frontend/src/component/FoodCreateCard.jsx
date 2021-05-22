import React,{Fragmnet} from "react";
import styled from "styled-components";
import {MaterialUISetFoodNameLine} from "./MaterialUISetFoodNameLine";
import {MaterialUIFoodPriceLine} from "./MaterialUIFoodPriceLine";
import {MaterialUIFoodDescriptionMultiLine} from "./MaterialUIFoodDescriptionMultiLine";

const FoodCreateCardWrapper = styled.div`
`;

const FoodName = styled.div`
`;

const FoodPrice = styled.div`
`;

const FoodDescription = styled.div`
`;
export const FoodCreateCard= () => {
    return(
        <Fragmnet>
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
        </Fragmnet>
    )
}
