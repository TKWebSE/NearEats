import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton"
import {SaveButton} from "../component/MaterialUISaveButton";
import { DeleteButton } from "../component/MaterialUIButtons";
import {REQUEST_STATE,FOOD_HEADER_TITLE} from "../constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {FoodDetailCard} from "../component/FoodDetailCard";
import {foodUpdate} from "../urls/index";
import {useHistory} from "react-router-dom";
import {foodUpdateHistory} from "../urls/index";

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
    const history = useHistory();

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

    function onChangeHandle() {
        console.log("pekopeko")
        console.log(state.food.id)
        history.push(foodUpdateHistory(state.food.id))
    }

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
                            <SaveButton onClick={onChangeHandle}/>
                    <DeleteButton></DeleteButton>
                </Fragment>
            }
            </DetailWrapper>
        </Fragment>
    )
}