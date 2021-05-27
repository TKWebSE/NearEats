import React, {Fragment, useReducer  } from "react";
import { useHistory } from "react-router";
import { ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context/Context";
import { orderIndexReducer,initializeState } from "../reducer/orderIndexReducer";

export const Order =() => { 
    const [state,dispatch] = useReducer(orderIndexReducer,initializeState);
    const history = useHistory();


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
