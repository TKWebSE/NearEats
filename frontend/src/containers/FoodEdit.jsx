import React, { Fragment, useEffect, useReducer, useContext, useState } from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import { ButtonTheme } from "../style_constants";
import { FOOD_EDIT_TEXT, REQUEST_STATE } from "../constants";
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
`;

const FoodCardWrapper = styled.div`
  margin-bottom:5%;
  margin-left:5&;
`;
const BtnWrapper = styled.div`
  text-align:right;
`;

const SkeltonImage = styled.div`
  margin-bottom:2%;
`;

const SkeltonTitle = styled.div`
  margin-bottom:2%;
`;

const SkeltonDescription = styled.div``;


export const FoodEdit = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const [state, dispatch] = useReducer(foodEditReducer, initializeState);
  const [city, setCity] = useState(SessionAuthState.currentUser.city);
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
    updateFoodApi(state.food, city)
      .then((data) => {
        history.push(foodShowURL(data.food.id))
      })
      .catch(e => console.log(e))
  }
  console.log(state)
  return (
    <Fragment>
      <DetailWrapper>
        <FoodEditHeader>
          {FOOD_EDIT_TEXT.HEADER_TITLE}
        </FoodEditHeader>
        {
          REQUEST_STATE.OK === state.fetchstate ?
            <Fragment>
              <FoodCardWrapper>
                <FoodDispatch.Provider value={dispatch}>
                  <FoodState.Provider value={state}>
                    <FoodEditCard
                      setCity={setCity}
                      city={city}
                    />
                  </FoodState.Provider>
                </FoodDispatch.Provider>
                <BtnWrapper>
                  <ThemeProvider theme={ButtonTheme}>
                    <SaveButton
                      onClick={submitHandle}
                      btnLabel={FOOD_EDIT_TEXT.SAVE_BTN_LABEL}
                    />
                  </ThemeProvider>
                </BtnWrapper>
              </FoodCardWrapper>
            </Fragment>
            :
            <Fragment>
              <SkeltonImage>
                <Skeleton variant="rect" width={450} height={300} />
              </SkeltonImage>
              <SkeltonTitle>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonTitle>
              <SkeltonDescription>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonDescription>
            </Fragment>
        }
      </DetailWrapper>
    </Fragment>
  )
}
