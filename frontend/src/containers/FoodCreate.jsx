import React, { Fragment, useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import { FOOD_CREATE_TEXT } from "../constants";
import { ButtonTheme } from "../style_constants";
import {
    initializeState,
    foodCreateReducer,
    foodCreateActionTypes
} from "../reducer/foodCreateReducer";
import { createFoodApi } from "../apis/foodApis";
import { useHistory } from "react-router-dom";
import { foodShowURL } from "../urls/index";
import MUIAnimatedMultiSelect from "../component/MUIAnimatedMultiSelect";
import { TextFieldInReducer } from "../component/TextFieldInReducer";
import { MultiLineTextFieldInReducer } from "../component/MultiLineTextFieldInReducer";
import foodSelectImage from "../images/food-select.jpg";
import { ImageComponent } from "../component/commonComponent/ImageComponent/ImageComponent";
import { useEffect } from "react";
import { createFormData } from "../AppImageFunction";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { messageActionTypes } from "../reducer/messageReducer";
import MaterialUISimpleModal from "../component/MaterialUISimpleModal";

const FoodCreateWrappwer = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const FoodCreateCardWrapper = styled.div`
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

const ButtonWrapper = styled.div`
    text-align:right;
    margin-bottom:3%;
`;

export const FoodCreate = () => {
    const [state, dispatch] = useReducer(foodCreateReducer, initializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const [city, setCity] = useState(SessionAuthState.currentUser.city);
    const history = useHistory();

    function onKeyDownEnter(event) {
        submitHandle()
    }

    function submitHandle() {
        try {
            const formData = createFormData(state, city, SessionAuthState.currentUser.id);
            createFoodApi(formData)
                .then((data) => {
                    console.log(data)
                    history.push(foodShowURL(data.food.id))
                })
                .catch(e => console.log(e))
        } catch (e) {
            messageDispatch({
                type: messageActionTypes.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: e
                }
            })
        }
    }

    return (
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    {FOOD_CREATE_TEXT.HEADER_TITLE}
                </FoodCreateHeader>
                <ImageComponent
                    dispatch={dispatch}
                    actionType={foodCreateActionTypes.SETFOODIMAGE}
                />
                <FoodName>
                    <TextFieldInReducer
                        label={FOOD_CREATE_TEXT.FOOD_NAME_LABEL}
                        value={state.food.name}
                        dispatch={dispatch}
                        actionType={foodCreateActionTypes.SETTINGFOODNAME}
                        onKeyDown={onKeyDownEnter}
                    />
                </FoodName>
                <FoodPrice>
                    <TextFieldInReducer
                        label={FOOD_CREATE_TEXT.FOOD_PRICE_LABEL}
                        value={state.food.price}
                        dispatch={dispatch}
                        actionType={foodCreateActionTypes.SETTINGFOODPRICE}
                        onKeyDown={onKeyDownEnter}
                    />
                </FoodPrice>
                <FoodDescription>
                    <MultiLineTextFieldInReducer
                        label={FOOD_CREATE_TEXT.FOOD_DESCRIPTION_LABEL}
                        value={state.food.description}
                        dispatch={dispatch}
                        actionType={foodCreateActionTypes.SETTINGFOODDESCRIPTION}
                        onKeyDown={onKeyDownEnter}
                    />
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

                <ButtonWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <SaveButton
                            onClick={submitHandle}
                            btnLabel={FOOD_CREATE_TEXT.SAVE_BTN_LABEL}
                        />
                    </ThemeProvider>
                </ButtonWrapper>
            </FoodCreateWrappwer>
        </Fragment>
    )
}
