import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { fetchOrderApi, updateCancelOrderApi, updateValuationOrderApi } from "../apis/orderApis";
import { SessionState, SessionDispatch, OrderState, OrderDispatch } from "../context/Context";
import { initializeState, orderActionTypes, orderReducer } from "../reducer/orderReducer";
import { foodInitializeState, foodActionTypes, foodReducer } from "../reducer/foodReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE, ORDER_TASK_STATUS_NUMBERS } from "../constants";
import { OrderDetailCard } from "../component/orderComponent/OrderDetailCard";
import { myTaskShowBackendURL, foodsIndexURL, ordersIndexURL } from "../urls/index";
import { COLORS } from "../style_constants";

const OrderDetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const OrderDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const OrderDetailCardWrapper = styled.div`
    margin-bottom:5%;
`;

const SkeltonsWrapper = styled.div`
`;

const SkeltonCardWrapper = styled.div`
    margin-left:1%;
    width:23%;
    margin-right:1%;
    padding-bottom:5%;
    float: left;
`;

const SkeltonImageWrapper = styled.div`
`;

const SkeltonTitleWrapper = styled.div`
    padding-top:6%;
`;


export const OrderDetail = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch)
  const [state, dispatch] = useReducer(orderReducer, initializeState);
  const [foodState, foodDispatch] = useReducer(foodReducer, foodInitializeState);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: orderActionTypes.FETCHING })
    fetchOrderApi(match.params.orderId)
      .then((data) => {
        if (data.order.order_user_id === SessionAuthState.currentUser.id) {
          console.log(data)
          foodDispatch({
            type: foodActionTypes.FETCH_SUCCESS,
            payload: {
              food: data.food
            },
          });
          dispatch({
            type: orderActionTypes.FETCH_ORDER,
            payload: {
              order: data.order
            },
          });
          dispatch({
            type: orderActionTypes.FETCH_MAKE_USER,
            payload: {
              make_user: data.make_user
            },
          });
          dispatch({
            type: orderActionTypes.FETCH_SUCCESS,
          });
        } else {
          history.push(foodsIndexURL)
        }
      })
      .catch((e) => console.log(e))
  }, [])

  function submitOrderCancelHandle() {
    updateCancelOrderApi(state.order, ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL)
      .then((data) => {
        history.push(ordersIndexURL);
      })
  }

  function submitValuationHandle() {
    updateValuationOrderApi(state.order, state.valuation)
      .then((data) => {
        history.push(ordersIndexURL);
      })
  }

  console.log(state)
  console.log(foodState)
  console.log(foodState.food)
  return (
    <Fragment>
      <OrderDetailWrapper>
        <OrderDetailHeader>
          {ORDER_HEADER_TITLE.ORDER_DETAIL_TITLE}
        </OrderDetailHeader>
        {
          state.fetchState === REQUEST_STATE.OK ?
            <OrderDetailCardWrapper>
              <OrderDetailCard order={state.order} food={foodState.food} user={state.make_user} valuation={state.valuation} cancelHandle={submitOrderCancelHandle} valuationHandle={submitValuationHandle} dispatch={dispatch} />
            </OrderDetailCardWrapper>
            :
            <SkeltonsWrapper>
              <SkeltonCardWrapper>
                <SkeltonImageWrapper>
                  <Skeleton variant="rect" height={180} />
                </SkeltonImageWrapper>
                <SkeltonTitleWrapper>
                  <Skeleton variant="rect" height={40} />
                </SkeltonTitleWrapper>
              </SkeltonCardWrapper>
            </SkeltonsWrapper>
        }
      </OrderDetailWrapper>
    </Fragment>
  )
}
