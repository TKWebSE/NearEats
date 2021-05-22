import React, {Fragment, useReducer  } from "react";
import { ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context";


export const Order =() => { 
    const [state,dispatch] = useReducer(OrderIndexReducer,initialize);


        
    return(
        <Fragment>
            <OrderIndexHeader>
                {ORDER_HEADER_TITLE.ORDER_INDEX}
            </OrderIndexHeader>
            <OrderDispatch.Provide value={dispatch}>
                <OrderState.Provide value={state}>

                </OrderState.Provide>
            </OrderDispatch.Provide>
        </Fragment>
    )  
}
