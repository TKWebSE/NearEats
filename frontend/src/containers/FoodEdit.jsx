import React, {Fragment, useEffect,useReducer} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import {REQUEST_STATE} from "../constants";
import { fetchFoodApi } from '../apis/foodApis';
import { 
  initializeState,
  foodEditActionTypes,
  foodEditReducer } from "../reducer/foodEditReducer";
import {FoodEditCard} from "../component/FoodEditCard";

const DetailWrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const FoodDetailHeader = styled.h1`
  margin-top:3%;
  margin-bottom:3%;
`;

const FoodCardWrapper = styled.div`
  margin-bottom:5%;
`;

export const FoodEdit = ({match}) => { 
  const [state,dispatch] = useReducer(foodEditReducer,initializeState);

  useEffect(()=>  {
    dispatch({type:foodEditActionTypes.FETCHING});
    fetchFoodApi(match.params.foodId)
    .then((data)=> {
      dispatch({
        type:foodEditActionTypes.FETCH_SUCCESS,
        payload: {
          food: data.food
        }
      })
    })
    .catch(e => console.log(e))
  },[]);
 
  return (
    <Fragment>
      <DetailWrapper>
          <FoodDetailHeader>
              料理編集画面
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
              <FoodCardWrapper>
                  <FoodEditCard {...state.food}></FoodEditCard>
              </FoodCardWrapper>
          </Fragment>
      }
      </DetailWrapper>
    </Fragment>
　  )
}