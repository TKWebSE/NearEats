import React, {Fragment, useEffect,useReducer} from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from '@material-ui/core/styles';
import {SaveButton} from "../component/MaterialUISaveButton";
import {ButtonTheme} from "../style_constants";
import {FOOD_HEADER_TITLE, REQUEST_STATE} from "../constants";
import { fetchFoodApi, updateFoodApi} from '../apis/foodApis';
import { initializeState,foodEditActionTypes,foodEditReducer } from "../reducer/foodEditReducer";
import {FoodEditCard} from "../component/foodComponent/FoodEditCard";
import { FoodDispatch,FoodState } from '../context/Context';
import {useHistory} from "react-router-dom";
import {foodShowHistory} from "../urls/index";

const DetailWrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const FoodEditHeader = styled.h1`
  margin-top:3%;
  margin-bottom:3%;
`;

const FoodCardWrapper = styled.div`
  margin-bottom:5%;
`;

export const FoodEdit = ({match}) => { 
  const [state,dispatch] = useReducer(foodEditReducer,initializeState);
  const history = useHistory();

  useEffect(() =>  {
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

  const submitHandle=(e) => {
    updateFoodApi(state.food)
    .then((data) => {
      history.push(foodShowHistory(data.food.id))
    })
    .catch(e => console.log(e))
  }

  return (
    <Fragment>
      <DetailWrapper>
          <FoodEditHeader>
              {FOOD_HEADER_TITLE.FOOD_EDIT}
          </FoodEditHeader>
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
                <FoodDispatch.Provider value={dispatch}>
                  <FoodState.Provider value={state}>
                    <FoodEditCard />
                  </FoodState.Provider>
                </FoodDispatch.Provider>
                  <ThemeProvider theme={ButtonTheme}>
                    <SaveButton onClick={submitHandle} />
                  </ThemeProvider>
              </FoodCardWrapper>             
          </Fragment>
      }
      </DetailWrapper>
    </Fragment>
　  )
}