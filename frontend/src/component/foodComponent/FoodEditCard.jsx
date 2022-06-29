import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import foodSelectImage from "../../images/food-select.jpg";
import { MaterialUIFoodDescriptionMultiLine } from "../foodComponent/MaterialUIFoodDescriptionMultiLine";
import { MaterialUIFoodPriceLine } from "../foodComponent/MaterialUIFoodPriceLine";
import { MaterialUISetFoodNameLine } from "../foodComponent/MaterialUISetFoodNameLine";
import MUIAnimatedMultiSelect from "../../component/MUIAnimatedMultiSelect";
import { FOOD_EDIT_TEXT, REQUEST_STATE } from "../../constants";
import { foodEditActionTypes } from "../../reducer/foodEditReducer";
import { FoodDispatch, FoodState } from '../../context/Context';

const FoodCardWrapper = styled.div`
    text-align:center;
`;

const FoodImageWrapper = styled.label`
position:relative;

&:hover{
    transition: all .3s;
    opacity: 0.5;
    color:black;
    transform: scale(1.05);
}
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
    &:hover{
        transition: all .3s;
        transform: scale(1.05);
    }
`;

// const FoodUploadText = styled.div`
//     position:absolute;
//     top:45%;
//     left: 30%;
//     font-size: 3vw;
//     font-weight: bold;
//     opacity: 0;

//     &:hover{
//         transition: all .3s;
//         opacity: 0.5;
//     }
// `;

const FoodName = styled.h1`
    text-align:left;
`;

const FoodPrice = styled.h2`
   text-align:left;
`;

const FoodDesicription = styled.div`
    text-align:left;
`;

const FoodCity = styled.div``;

const SelectWrapper = styled.div`
    margin-top:2%;
    margin-bottom:2%;
`;

//foodの編集画面用のカードコンポーネント
export const FoodEditCard = ({ setCity, city }) => {
    const FoodEditState = useContext(FoodState)
    const FoodEditDispatch = useContext(FoodDispatch)

    const onChangeFhoto = (e) => {
        const files = e.target.files
        if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                FoodEditDispatch({
                    type: foodEditActionTypes.SETTINGFOODIMAGE,
                    payload: {
                        image: e.target.result
                    }
                })
            };
            reader.readAsDataURL(file)
        } else {
            FoodEditDispatch({
                type: foodEditActionTypes.SETTINGFOODIMAGE,
                payload: {
                    image: null
                }
            })
        }
    }

    console.log(FoodEditState)
    return (
        <Fragment>
            <FoodCardWrapper>
                <FoodImageWrapper htmlFor={"upload-button"} >
                    {
                        FoodEditState.food.image ?
                            <FoodImage src={
                                foodSelectImage
                            }
                                alt="dummy" >
                            </FoodImage>
                            :
                            <FoodImage src={
                                FoodEditState.food.image
                            }
                                alt="dummy" >
                            </FoodImage>
                    }
                </FoodImageWrapper>
                <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={onChangeFhoto}
                />
                <FoodName>
                    <MaterialUISetFoodNameLine></MaterialUISetFoodNameLine>
                </FoodName>
                <FoodPrice>
                    <MaterialUIFoodPriceLine></MaterialUIFoodPriceLine>
                </FoodPrice>
                {
                    FoodEditState.food.image.url ?
                        "true"
                        :
                        "false"
                }
                <FoodDesicription>
                    <MaterialUIFoodDescriptionMultiLine></MaterialUIFoodDescriptionMultiLine>
                </FoodDesicription>
                <FoodCity>
                    <SelectWrapper>
                        <MUIAnimatedMultiSelect
                            placeholederText={FOOD_EDIT_TEXT.LOCATION_PLACEHOLDER_TEXT}
                            setCity={setCity}
                            city={city}
                        />
                    </SelectWrapper>
                </FoodCity>
            </FoodCardWrapper>
        </Fragment >
    )
}
