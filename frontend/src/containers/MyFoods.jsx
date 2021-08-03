import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import { fetchMyFoodsIndex } from '../apis/foodApis';
import { REQUEST_STATE ,FOOD_HEADER_TITLE} from '../constants';
import { 
    initializeState,
    foodsListActionTypes,
    foodsListReducer,
} from '../reducer/foodsListReducer';
import {FoodCard} from '../component/foodComponent/FoodCard';
import Cookies from "js-cookie";


const FoodsWrapper = styled.div`
    display: inline-block
    float:left;
    margin-right:10%;
    margin-left:10%;
    margin-top:5%;
`;

const FoodsIndexTitle = styled.h2`
    margin-top:0px;
    font-size:180%;
    ${media.lessThan("large")`
        font-size:160%;
    `}
    ${media.lessThan("medium")`
        font-size:130%;
    `}
    ${media.lessThan("small")`
        font-size:110%;
    `}
`;

const ContentsList = styled.div`
    display: flex;
    justify-content: space-around;
    float:left;
    width:23%;
    margin-left:1%;
    margin-right:1%;
    ${media.lessThan("medium")`
        width:30%;
    `}
    ${media.lessThan("small")`
        width:48%;
    `}
`;

const FoodCards = styled(FoodCard)`
    display: inline-block
    float:left;
`;

export const MyFoods = () => {
    const [state,dispatch] = useReducer(foodsListReducer,initializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)

    useEffect(() => {
        dispatch({type: foodsListActionTypes.FETCHING})
        fetchMyFoodsIndex(1
            // SessionAuthState.currentUser.id
            )
        .then((data) => {
            dispatch({
                type: foodsListActionTypes.FETCH_SUCCESS,
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
                    {FOOD_HEADER_TITLE.MYFOOD}
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
                state.foodsList.map((food,i) =>
                <ContentsList key={i}>
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