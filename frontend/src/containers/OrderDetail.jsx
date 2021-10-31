import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { fetchOrderApi, updateOrderApi } from "../apis/orderApis";
import { SessionState, SessionDispatch, OrderState, OrderDispatch } from "../context/Context";
import { initializeState, orderActionTypes, orderReducer } from "../reducer/orderReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE } from "../constants";
import { OrderDetailCard } from "../component/orderComponent/OrderDetailCard";
import { myTaskShowBackendURL, foodsIndexURL } from "../urls/index";
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
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: orderActionTypes.FETCHING })
    fetchOrderApi(match.params.orderId)
      .then((data) => {
        if (data.order[0].order_user_id === SessionAuthState.currentUser.id) {
          dispatch({
            type: orderActionTypes.FETCH_ORDER,
            payload: {
              order: data.order[0]
            },
          });
          dispatch({
            type: orderActionTypes.FETCH_MAKE_USER,
            payload: {
              make_user: data.make_user[0]
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

  console.log(state)
  return (
    <Fragment>
      <OrderDetailWrapper>
        <OrderDetailHeader>
          {ORDER_HEADER_TITLE.ORDER_DETAIL_TITLE}
        </OrderDetailHeader>
        {
          state.fetchState === REQUEST_STATE.OK ?
            <OrderDispatch.Provider value={dispatch}>
              <OrderState.Provider value={state}>
                <OrderDetailCardWrapper>
                  <OrderDetailCard />
                </OrderDetailCardWrapper>
              </OrderState.Provider>
            </OrderDispatch.Provider>
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
