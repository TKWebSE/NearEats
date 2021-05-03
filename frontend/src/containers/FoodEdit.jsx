import React, {Fragment, useEffect,useReducer} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import {REQUEST_STATE} from "../constants";
import { editfoodApi } from '../apis/foodApis';
import { 
  initializeState,
  foodEditActionTypes,
  foodEditReducer } from "../reducer/foodEditReducer";
import {FoodEditCard} from "../component/FoodEditCard";


const DetailWrapper = styled.div`
`;

const FoodDetailHeader = styled.h3`
`;

const FoodCardWraooer = styled.div`
    textalign:center;
`;


export const FoodEdit = ({match}) => { 
  const [state,dispatch] = useReducer(foodEditReducer,initializeState);

  useEffect(()=>  {
    dispatch({type:foodEditActionTypes.FETCHING});
    editfoodApi(match.params.foodId)
    .then((data)=> {
      dispatch({
        type:foodEditActionTypes.FETCH_SUCCESS,
        payload: {
          data: data.food
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