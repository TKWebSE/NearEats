import React,{Fragmnet} from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { foodEditActionTypes } from "../reducer/foodEditReducer";
import MaterialUISetFoodNameLine from "./MaterialUISetFoodNameLine";

const FoodCreateCardWrapper = styled.div`
`;

const FoodName = styled.div`
`;

const FoodPrice = styled.div`
`;

const FoodDescription = styled.div`
`;
const food = {name: "aaa"}
export const FoodCreateCard = () => {
    return(
        <Fragment>
            <FoodCreateCardWrapper>
                <FoodName>
                    <MaterialUISetFoodNameLine food={food}></MaterialUISetFoodNameLine>
                </FoodName>
                <FoodPrice>
                    
                </FoodPrice>
                <FoodDescription>

                </FoodDescription>
            </FoodCreateCardWrapper>
        </Fragment>
    )
}