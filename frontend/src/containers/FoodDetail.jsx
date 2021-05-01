import React from `react`;
import { useEffect, useReducer} from "react";
import styled from `styled-components`;
import { initializeState } from "../reducer/restaurants";
import REQUEST_STATE from `../constants`;
import fetchFoodDetails from `../apis/foods`;
import {initializeState,
        foodDetailActionTypes,
        foodDetailReducer} from `../reducer/foodDetails`;
import FoodDetailsCard from `../components`;

const DetailWrapper = styled.div`

`;

const FoodDetailHeader = styled.h3`
`;

const FoodDetailscard = styled.div

export const FoodDetail = ()=> {
    const [state,dispatch] = useReducer(foodDetailReducer,initializeState);
    
    useEffect(() => {
        dispatch({ type: foodDetailActionTypes.FETCHING })
        fetchFoodDetails(food_id)
        .then((data) => {
            dispatch({
                type:FETCH_STATE.OK,
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
            REQUEST.STATE.LOADING === state.fetchState?
                <Fragment>
                    <Skeleton variant="rect" width={450} height={300} />
                    <Skeleton variant="rect" width={450} height={300} />
                    <Skeleton variant="rect" width={450} height={300} />
                </Fragment>
            :
                <FoodDetailscard>
                     <FoodDetailsCard></FoodDetailsCard>
                </FoodDetailscard>
            </DetailWrapper>
        </Fragment>
    )
}