import React, {Fragment, useContext, useReducer} from "react";
import styled from "styled-components";
import {ThemeProvider } from '@material-ui/core/styles';
import {SaveButton} from "../component/MaterialUISaveButton";
import {FOOD_HEADER_TITLE} from "../constants";
import {ButtonTheme} from "../style_constants";
import { initializeState,
        foodCreateReducer } from "../reducer/foodCreateReducer";
import {createFoodApi} from "../apis/foodApis";
import {useHistory} from "react-router-dom";
import {foodShowURL} from "../urls/index";
import {SessionState,SessionDispatch} from "../context/Context";
import {FoodState,FoodDispatch} from "../context/Context";
import {FoodCreateCard} from "../component/foodComponent/FoodCreateCard";

const FoodCreateWrappwer = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:5%;
`;


export const FoodCreate = () => {
    const[state,dispatch] = useReducer(foodCreateReducer,initializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const history = useHistory();

    function SubmitHandle() {
        createFoodApi(state.food,SessionAuthState.currentUser.id)
        .then((data) => {
            history.push(foodShowURL(data.food.id))
        })
        .catch(e => console.log(e))
    }

    return(
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    {FOOD_HEADER_TITLE.FOOD_CREATE}
                </FoodCreateHeader>
                <FoodDispatch.Provider value={dispatch}>
                    <FoodState.Provider value={state}>
                        <FoodCreateCard></FoodCreateCard>
                    </FoodState.Provider>
                </FoodDispatch.Provider>
                <ThemeProvider theme={ButtonTheme}>
                    <SaveButton onClick={SubmitHandle}/>
                </ThemeProvider>
            </FoodCreateWrappwer>
        </Fragment>
    )
}
