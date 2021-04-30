import React from `react`;
import { useEffect, useReducer} from "react";
import styled from `styled-components`;
import { initializeState } from "../reducer/restaurants";
import REQUEST_STATE from `../constants`;
import fetchFoodDetails from `../apis/foods`;
import {initializeState,
        foodDetailActionTypes,
        foodDetailReducer} from `../reducer/foodDetails`;


export const FoodDetail = ()=> {
    const [state,dispatch] = useReducer(initializeState);
    
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
        
        </Fragment>
    )
}