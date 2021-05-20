import React, {Fragment, useEffect, useReducer} from "react";
import styled from "styled-components";
import {FoodCreateCard} from "../component/FoodCreateCard";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {SaveButton} from "../component/MaterialUISaveButton";
import {FOOD_HEADER_TITLE} from "../constants";
import {COLORS} from "../style_constants";
import { initializeState,
        foodCreateReducer } from "../reducer/foodCreateReducer";
import {createFoodApi} from "../apis/foodApis";
import {useHistory} from "react-router-dom";
import {foodShowHistory} from "../urls/index";
import {FoodState,FoodDispatch} from "../context/FoodContext";

const FoodCreateWrappwer = styled.div`
`;

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const saveButtonTheme = createMuiTheme({
    palette: {
      primary: {
        main: COLORS.MAIN_COLOR
      },
    },
  });

export const FoodCreate = () => {
    const[state,dispatch] = useReducer(foodCreateReducer,initializeState);
    const history = useHistory()
    useEffect(() => {
        console.log();
    },[]);

    function SubmitHandle() {
        //user認証機能実装次第改修
        const user_id = 1
        createFoodApi(state.food,user_id)
        .then((data) => {
            console.log(data)
            history.push(foodShowHistory(1))
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
                        <FoodCreateCard/>
                    </FoodState.Provider>
                </FoodDispatch.Provider>
                <ThemeProvider theme={saveButtonTheme}>
                    <SaveButton onClick={SubmitHandle} />
                </ThemeProvider>
            </FoodCreateWrappwer>
        </Fragment>
    )
}