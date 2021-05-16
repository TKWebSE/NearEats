import React,{Fragmnet} from "react";
import { Fragment } from "react";
import styled from "styled-components";
import MaterialUISetFoodNameLine from "./MaterialUISetFoodNameLine";

export const FoodCreateCard = () => {
    return(
        <Fragment>
            <FoodCreateCardWrapper>
                <FoodName>
                    <MaterialUISetFoodNameLine></MaterialUISetFoodNameLine>
                </FoodName>
                <FoodPrice>
                    
                </FoodPrice>
                <FoodDescription>

                </FoodDescription>
            </FoodCreateCardWrapper>
        </Fragment>
    )
}