import React, {Fragment,useEffect, useReducer} from 'react'
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router";
import { initializeState,orderDetailActionTypes,orderDetailReducer} from "../reducer/orderDetailReducer";
import {fetchOrderApis} from "../apis/orderApis";
import {orderEditHistory} from "../urls/index";
import { REQUEST_STATE, ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context/Context";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";
import {SaveButton} from "../component/MaterialUISaveButton";
import {OrderDetailCard} from "../component/orderComponent/OrderDetailCard";

const OrderDetailHeader = styled.div`
`;

const OrderDetailCardWrapper = styled.div`
`;

const OrderDetailButton = styled.div`
`;

export const OrderDetail = ({match}) => { 
  const [state,dispatch] = useReducer(orderDetailReducer,initializeState);
  const history = useHistory();

  useEffect(() =>  {
    dispatch({type:orderDetailActionTypes.FETCHING});
    fetchOrderApis(match.params.orderId)
    .then((data)=> {
      dispatch({  
        type:orderDetailActionTypes.FETCH_SUCCESS,
        payload: {
          order: data.order
        }
      })
    })
    .catch(e => console.log(e))
  },[]);

  function submitHandle() {
     history.push(orderEditHistory(state.user.id))
  }

  return (
    <Fragment>
      <OrderDetailHeader>
          {ORDER_HEADER_TITLE.OrderDetail}
      </OrderDetailHeader>
      {
      REQUEST_STATE.OK === state.fetchState?
          <Fragment>
              <OrderDetailCardWrapper>
                  <OrderDispatch.Provider value={dispatch}>
                      <OrderState.Provider value={state}>
                          <OrderDetailCard/>
                      </OrderState.Provider>
                  </OrderDispatch.Provider>   
              </OrderDetailCardWrapper>
              <OrderDetailButton>
                  <ThemeProvider theme={ButtonTheme}>
                      <SaveButton onClick={submitHandle} />
                  </ThemeProvider>
              </OrderDetailButton>
          </Fragment>
      :
          <Fragment>
              <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
      } 
    </Fragment>
  )
}