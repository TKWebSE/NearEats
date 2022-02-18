import React, { Fragment } from "react";
import styled from "styled-components";
import { MaterialUISetFoodNameLine } from "../foodComponent/MaterialUISetFoodNameLine";
import { MaterialUIFoodPriceLine } from "../foodComponent/MaterialUIFoodPriceLine";
import { MaterialUIFoodDescriptionMultiLine } from "../foodComponent/MaterialUIFoodDescriptionMultiLine";
import MUIAnimatedMultiSelect from "../../component/MUIAnimatedMultiSelect";
import { FOOD_CREATE_TEXT } from "../../constants";

const FoodCreateCardWrapper = styled.div`
`;

const FoodName = styled.div`
    margin-bottom:2%;
`;

const FoodPrice = styled.div`
    margin-bottom:2%;
`;

const FoodDescription = styled.div`
    margin-bottom:2%;
`;

const FoodCity = styled.div`
`;

const SelectWrapper = styled.div`
    margin-bottom:3%;
`;

export const FoodCreateCard = ({ setCity, city }) => {

    return (
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
                <FoodCity>
                    <SelectWrapper>
                        <MUIAnimatedMultiSelect
                            placeholederText={FOOD_CREATE_TEXT.LOCATION_PLACEHOLDER_TEXT}
                            setCity={setCity}
                            city={city}
                        />
                    </SelectWrapper>
                </FoodCity>
            </FoodCreateCardWrapper>
        </Fragment>
    )
}
