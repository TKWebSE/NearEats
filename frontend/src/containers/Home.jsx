import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton"
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {REQUEST_STATE,FOOD_HEADER_TITLE} from "../constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {FoodDetailCard} from "../component/foodComponent/FoodDetailCard";
import {useHistory} from "react-router-dom";
import {foodUpdateHistory} from "../urls/index";

const HomeWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const TitleWrapper = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const TitleWrapper = styled.div`
`;

const SignInWrapper = styled.div`
`;

const FoodCardWrapper = styled.div`
    margin-bottom:5%;
`;

export const Home = ()=> {
    const history = useHistory();

    function onClickHandle() {
        history.push(foodUpdateHistory(state.food.id))
    }

    return (
        <Fragment>
            <HomeWrapper>
                <TitleWrapper>
                    {HOME_TITLE.HOME_TITLE}
                </TitleWrapper>
                <SignUpWrapper>
                    {HOME_TITLE.SIGNIN_BUTTON_LABEL} 
                </SignUpWrapper>
                <SignInWrapper>
                   {HOME_TITLE.SOGNUP_BUTTON_LABEL}
                </SignInWrapper>
            {
                <Fragment>
                    <FoodCardWrapper>
                       <FoodDetailCard {...state.food}></FoodDetailCard>
                    </FoodCardWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <MaterialUICommonButton onClick={onClickHandle} btnLabel={"編集する"}/>
                    </ThemeProvider>
                </Fragment>
            }
            </HomeWrapper>
        </Fragment>
    )
}