import React, {Fragment, useEffect, useReducer,createContext} from "react";
import styled from "styled-components";
import {FoodCreateCard} from "../component/FoodCreateCard";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {SaveButton} from "../component/MaterialUISaveButton";
import {COLORS} from "../style_constants";
import { initializeState,
        foodCreateActionTypes,
        foodCreateReducer } from "../reducer/foodCreateReducer";
import {createFoodApi} from "../apis/foodApis";

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

export const FoodCreateState = createContext("");
export const FoodCreateDispatch = createContext("");

export const FoodCreate = () => {
    const[state,dispatch] = useReducer(foodCreateReducer,initializeState);
    
    useEffect(() => {
        console.log();
    },[]);

    function submitHandle() {
        //user認証機能実装次第改修
        const user_id = 1
        createFoodApi(state.food,user_id);
        console.log(state.food);
    }

    return(
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    料理作成画面
                </FoodCreateHeader>
                <FoodCreateDispatch.Provider value={dispatch}>
                    <FoodCreateState.Provider value={state}>
                        <FoodCreateCard/>
                    </FoodCreateState.Provider>
                </FoodCreateDispatch.Provider>
                <ThemeProvider theme={saveButtonTheme}>
                    <SaveButton onClick={submitHandle} />
                </ThemeProvider>
            </FoodCreateWrappwer>
        </Fragment>
    )
}