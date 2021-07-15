import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton"
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {useHistory} from "react-router-dom";
import {foodUpdateURL} from "../urls/index";
import {HOME_TITLE} from "../constants";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";

const HomeWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const TitleWrapper = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const SignUpWrapper = styled.div`
`;

const SignInWrapper = styled.div`
`;

export const Home = ()=> {
    const history = useHistory();

    function signUpHandle() {
        history.push(foodUpdateURL())
    }

    function signInHandle() {
        history.push(foodUpdateURL())
    }

    return (
        <Fragment>
            <HomeWrapper>
                <TitleWrapper>
                    {HOME_TITLE.HOME_TITLE}
                </TitleWrapper>
                <SignUpWrapper>
                    <MaterialUICommonButton onClick={() => signUpHandle()} btnLabel={HOME_TITLE.SOGNUP_BUTTON_LABEL}></MaterialUICommonButton>
                    {HOME_TITLE.SOGNUP_BUTTON_LABEL} 
                </SignUpWrapper>
                <SignInWrapper>
                <MaterialUICommonButton onClick={() => signInHandle()} btnLabel={HOME_TITLE.SIGNIN_BUTTON_LABEL}></MaterialUICommonButton>
                   {HOME_TITLE.SIGNIN_BUTTON_LABEL}
                </SignInWrapper>
            {
                <Fragment>
                    {/* <FoodCardWrapper>
                       <FoodDetailCard {...state.food}></FoodDetailCard>
                    </FoodCardWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <MaterialUICommonButton onClick={onClickHandle} btnLabel={"編集する"}/>
                    </ThemeProvider> */}
                </Fragment>
            }
            </HomeWrapper>
        </Fragment>
    )
}