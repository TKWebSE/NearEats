import React,{Fragment,useEffect, useReducer} from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton"
import {REQUEST_STATE,FOOD_HEADER_TITLE} from "../constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {FoodDetailCard} from "../component/FoodDetailCard";

const DetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const LoadingWrapper = styled.div`
    
`;

const FoodDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const FoodCardWrapper = styled.div`
    margin-bottom:5%;
`;

export const FoodDetail = ({match})=> {
    const [state,dispatch] = useReducer(foodDetailReducer,initializeState);

    useEffect(() => {
        dispatch({ type: foodDetailActionTypes.FETCHING })
        fetchFoodApi(match.params.foodId)
        .then((data) => {
            dispatch({
                type:foodDetailActionTypes.FETCH_SUCCESS,
                payload:
                    {food: data.food},
            })
        })
        .catch(e => console.log(e));
    },[]);

    return (
        <Fragment>
            <DetailWrapper>
                <FoodDetailHeader>
                    {FOOD_HEADER_TITLE.FOOD_DETAIL}
                </FoodDetailHeader>
            {
            REQUEST_STATE.LOADING === state.fetchState?
                <Fragment>
                    <LoadingWrapper>
                        <Skeleton variant="rect" width={450} height={300} />
                    </LoadingWrapper>
                </Fragment>
            :
                <Fragment>
                    <FoodCardWrapper>
                       <FoodDetailCard {...state.food}></FoodDetailCard>
                    </FoodCardWrapper>
                </Fragment>
            }
            </DetailWrapper>
        </Fragment>
    )
}