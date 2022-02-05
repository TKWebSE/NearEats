import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import { ButtonTheme } from "../style_constants";
import { FOOD_HEADER_TITLE, REQUEST_STATE } from "../constants";
import { fetchFoodApi, updateFoodApi } from '../apis/foodApis';
import { initializeState, foodEditActionTypes, foodEditReducer } from "../reducer/foodEditReducer";
import { FoodEditCard } from "../component/foodComponent/FoodEditCard";
import { FoodDispatch, FoodState } from '../context/Context';
import { useHistory } from "react-router-dom";
import { foodShowURL } from "../urls/index";
import { SessionState, SessionDispatch } from "../context/Context";
import { foodsIndexURL } from "../urls/index";

const DetailWrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const FoodEditHeader = styled.h1`
  margin-top:5%;
  margin-left:5%;
`;

const FoodCardWrapper = styled.div`
  margin-bottom:5%;
  margin-left:5&;
`;

export const FoodEdit = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const [state, dispatch] = useReducer(foodEditReducer, initializeState);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: foodEditActionTypes.FETCHING });
    fetchFoodApi(match.params.foodId)
      .then((data) => {
        if (data.food.user_id === SessionAuthState.currentUser.id) {
          dispatch({
            type: foodEditActionTypes.FETCH_SUCCESS,
            payload: {
              food: data.food
            }
          })
        } else {
          history.push(foodsIndexURL);
        }
      })
      .catch(e => console.log(e))
  }, []);

  const submitHandle = (e) => {
    updateFoodApi(state.food)
      .then((data) => {
        history.push(foodShowURL(data.food.id))
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
          REQUEST_STATE.LOADING === state.fetchState ?
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
