import React,{Fragment,useEffect, useReducer} from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton"
import {REQUEST_STATE} from "../constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {FoodDetailCard} from "../component/FoodDetailCard";

const DetailWrapper = styled.div`

`;

const FoodDetailHeader = styled.h3`
`;

const FoodCardWraooer = styled.div`
    textalign:center;
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
                    料理詳細画面
                </FoodDetailHeader>
            {
            REQUEST_STATE.LOADING === state.fetchState?
                <Fragment>
                    <Skeleton variant="rect" width={450} height={300} />
                    <Skeleton variant="rect" width={450} height={300} />
                    <Skeleton variant="rect" width={450} height={300} />
                </Fragment>
            :
                <Fragment>
                    <FoodCardWraooer>
                       <FoodDetailCard {...state.food}></FoodDetailCard>
                    </FoodCardWraooer>
                </Fragment>
            }
            </DetailWrapper>
        </Fragment>
    )
}