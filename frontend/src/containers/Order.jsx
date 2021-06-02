import React, {Fragment, useReducer  } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context/Context";
import { orderIndexReducer,initializeState } from "../reducer/orderIndexReducer";
import {orderDetailHistory} from "../urls/index";

const OrderIndexHeader = styled.div`
`;

export const OrderDetail =() => { 
    const [state,dispatch] = useReducer(orderIndexReducer,initializeState);
    const history = useHistory();

    function onClickHandle() {
        history.push(orderDetailHistory())
    }

    return(
        <Fragment>
            <OrderIndexHeader>
                {ORDER_HEADER_TITLE.ORDER_INDEX}
            </OrderIndexHeader>
            <OrderDispatch.Provide value={dispatch}>
                <OrderState.Provide value={state}>
                    {state.order.map}
                </OrderState.Provide>
            </OrderDispatch.Provide>
        </Fragment>
    )  
}
