import React, {Fragment, useEffect,useReducer} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import {SaveButton} from "../component/MaterialUISaveButton";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {REQUEST_STATE} from "../constants";
import {COLORS} from "../style_constants";
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

const saveButtonTheme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.MAIN_COLOR
    },
  },
});

const submitHandle=(() => {

})

export const FoodEdit = ({match}) => { 
  const [state,dispatch] = useReducer(foodEditReducer,initializeState);
  function handleSetValue(e){
    e.preventDefault();
    console.log("neko")
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
      :REQUEST_STATE.LOADING === state.ok && !state.food === nil?
          <Fragment>
              <FoodCardWrapper>
                <form >
                  <FoodEditCard {...state.food}></FoodEditCard>
                  {FoodEditCard.value}
                  <ThemeProvider theme={saveButtonTheme}>
                    <SaveButton onChange={handleSetValue}/>
                  </ThemeProvider>
                </form>
              </FoodCardWrapper>
          </Fragment>
      }
      </DetailWrapper>
    </Fragment>
　  )
}