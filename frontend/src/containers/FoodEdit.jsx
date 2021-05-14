import React, {Fragment, useEffect,useReducer} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import {SaveButton} from "../component/MaterialUISaveButton";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {REQUEST_STATE} from "../constants";
import {COLORS} from "../style_constants";
import { fetchFoodApi, updateFoodApi} from '../apis/foodApis';
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

const saveButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});

export const FoodEdit = ({match}) => { 
  const [state,dispatch] = useReducer(foodEditReducer,initializeState);

  const handleSetPriceValue = () => {
    dispatch({type:foodEditActionTypes.SETTING,
              payload:{
                food_price: state.food.price
              }
      })
    console.log(state);
  }

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

  const submitHandle=(() => {
    dispatch({type:foodEditActionTypes.UPDATING});
    console.log(state.food)
    updateFoodApi(state.food)
    .then((data) => {
      dispatch({type:foodEditActionTypes.UPDATE_SUCCESS})
    })
    .catch(e => console.log(e))
  })

  return (
    <Fragment>
      <DetailWrapper>
          <FoodDetailHeader>
              料理編集画面
          </FoodDetailHeader>
      {
      REQUEST_STATE.LOADING === state.fetchState || state.food === undefined?
            <Fragment>
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
            </Fragment>
      :
          <Fragment>
              <FoodCardWrapper>
                  <FoodEditCard {...state.food} onChange={handleSetPriceValue}></FoodEditCard>
                  <ThemeProvider theme={saveButtonTheme}>
                    <SaveButton onClick={submitHandle} />
                  </ThemeProvider>
              </FoodCardWrapper>
          </Fragment>
      }
      </DetailWrapper>
    </Fragment>
　  )
}