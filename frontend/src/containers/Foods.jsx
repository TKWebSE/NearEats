import React, {Fragment, useEffect, useReducer} from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";

import { fetchFoodsIndexApi } from '../apis/foodApis';
import { REQUEST_STATE ,FOOD_HEADER_TITLE} from '../constants';
import { 
    initializeState,
    foodsActionTypes,
    foodsIndexReducer,
} from '../reducer/foods';
import {FoodCard} from '../component/FoodCard';



const FoodsWrapper = styled.div`
    display: inline-block
    float:left;
    margin-right:5%;
    margin-left:5%;
    margin-top:5%;
`;

const FoodsIndexTitle = styled.h2`
    margin-top:0px;
`;

const ContentsList = styled.div`
    display: flex;
    justify-content: space-around;
    float:left;
    width:18%;
    margin-left:1%;
    margin-right:1%;
`;

const FoodCards = styled(FoodCard)`
    display: inline-block
    float:left;
`;

export const Foods = () => {
    const [state,dispatch] = useReducer(foodsIndexReducer,initializeState);

    useEffect(() => {
        dispatch({type: foodsActionTypes.FETCHING})
        fetchFoodsIndexApi()
        .then((data) => {
            dispatch({
                type: foodsActionTypes.FETCH_SUCCESS,
                payload: {
                    foods: data.foods
                },
            });
        })
        .catch((e) => console.log(e))

    },[])

    return (
        <Fragment>
            <FoodsWrapper>
                <FoodsIndexTitle>
                    {FOOD_HEADER_TITLE.FOOD_INDEX}
                </FoodsIndexTitle>
                {
                state.fetchState === REQUEST_STATE.LOADING?
                    <ContentsList>
                    <Fragment>
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                    </Fragment>
                    </ContentsList>
                :
                state.foodsList.map((food) =>
                <ContentsList>
                    <Fragment>
                        <FoodCard food={food}></FoodCard>
                    </Fragment>
                </ContentsList>
                )
                }
            </FoodsWrapper>
        </Fragment>
    )
}