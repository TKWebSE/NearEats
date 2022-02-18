import React, { Fragment, useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import { FOOD_CREATE_TEXT } from "../constants";
import { ButtonTheme } from "../style_constants";
import {
    initializeState,
    foodCreateReducer
} from "../reducer/foodCreateReducer";
import { createFoodApi } from "../apis/foodApis";
import { useHistory } from "react-router-dom";
import { foodShowURL } from "../urls/index";
import { SessionState, SessionDispatch } from "../context/Context";
import { FoodState, FoodDispatch } from "../context/Context";
import { FoodCreateCard } from "../component/foodComponent/FoodCreateCard";

const FoodCreateWrappwer = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;
const ButtonWrapper = styled.div`
    text-align:right;
`;

export const FoodCreate = () => {
    const [state, dispatch] = useReducer(foodCreateReducer, initializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const [city, setCity] = useState(SessionAuthState.currentUser.city);
    const history = useHistory();

    function SubmitHandle() {
        createFoodApi(state.food, city, SessionAuthState.currentUser.id)
            .then((data) => {
                history.push(foodShowURL(data.food.id))
            })
            .catch(e => console.log(e))
    }

    return (
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    {FOOD_CREATE_TEXT.HEADER_TITLE}
                </FoodCreateHeader>
                <FoodDispatch.Provider value={dispatch}>
                    <FoodState.Provider value={state}>
                        <FoodCreateCard
                            setCity={setCity}
                            city={city}
                        ></FoodCreateCard>
                    </FoodState.Provider>
                </FoodDispatch.Provider>
                <ButtonWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <SaveButton
                            onClick={SubmitHandle}
                            btnLabel={FOOD_CREATE_TEXT.SAVE_BTN_LABEL}
                        />
                    </ThemeProvider>
                </ButtonWrapper>
            </FoodCreateWrappwer>
        </Fragment>
    )
}
