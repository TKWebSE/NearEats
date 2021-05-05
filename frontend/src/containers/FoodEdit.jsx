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
import TextField from '@material-ui/core/TextField';

const DetailWrapper = styled.div`
`;

const FoodDetailHeader = styled.h2`
  margin-left:5%;
`;

const FoodCardWraooer = styled.div`
    textalign:center;
`;
const APP_KEY = 'sampleApp';

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
              <FoodCardWraooer>
                  <FoodEditCard {...state.food}></FoodEditCard>
              </FoodCardWraooer>
              
          </Fragment>
      }
      </DetailWrapper>
    </Fragment>
　  )
}