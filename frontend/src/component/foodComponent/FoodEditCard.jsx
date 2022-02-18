import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import { MaterialUIFoodDescriptionMultiLine } from "../foodComponent/MaterialUIFoodDescriptionMultiLine";
import { MaterialUIFoodPriceLine } from "../foodComponent/MaterialUIFoodPriceLine";
import { MaterialUISetFoodNameLine } from "../foodComponent/MaterialUISetFoodNameLine";
import MUIAnimatedMultiSelect from "../../component/MUIAnimatedMultiSelect";
import { FOOD_EDIT_TEXT } from "../../constants";
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
    const [image, setImage] = useState({
        file: foodImage,
    });
    const FoodEditState = useContext(FoodState)
    const FoodEditDispatch = useContext(FoodDispatch)

    const onChangeFhoto = (e) => {
        const files = e.target.files
        if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader()
            reader.onload = (e) => {
                // setImage({ file: e.target.result })
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

        // if (e.target.files && e.target.files[0]) {
        //     const file = e.target.files[0]
        //     const reader = new FileReader()
        //     // reader.readAsText(e.target.files[0])
        //     reader.onload = (e) => {
        //         console.log(e)
        //         FoodEditDispatch({
        //             type: foodEditActionTypes.SETTINGFOODIMAGE,
        //             payload: {
        //                 image: e.target.result
        //             }
        //         })
        //         reader.readAsDataURL(file)
        //     }
        // }
    }
    console.log(FoodEditState)
    return (
        <Fragment>
            <FoodCardWrapper>
                <FoodImageWrapper htmlfor={"upload-button"} >
                    {
                        FoodEditState.food.image ?
                            <FoodImage src={
                                FoodEditState.food.image
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

                    {/* <FoodImage src={image.file} alt="dummy" > */}
                    {/* </FoodImage> */}
                    {/* <FoodUploadText >
                        {FOOD_EDIT_TEXT.FOOD_PHOTO_UPLOAD_TEXT}
                    </FoodUploadText > */}
                </FoodImageWrapper>
                <input
                    type="file"
                    id="upload-button"
                    // style={{ display: "none" }}
                    onChange={onChangeFhoto}
                />
                <FoodName>
                    <MaterialUISetFoodNameLine></MaterialUISetFoodNameLine>
                </FoodName>
                <FoodPrice>
                    <MaterialUIFoodPriceLine></MaterialUIFoodPriceLine>
                </FoodPrice>
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
