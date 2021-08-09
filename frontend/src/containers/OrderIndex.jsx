import React, {Fragment, useEffect, useReducer  } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import { REQUEST_STATE,ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context/Context";
import { initializeState,oredersActionTypes,orderIndexReducer } from "../reducer/orderIndexReducer";
import {orderShowURL} from "../urls/index";
import {orederIndexApi} from "../apis/orderApis";
import {OrderIndexCard} from "../component/orderComponent/OrderIndexCard";

const OrderIndexHeader = styled.h1`
    margin-top:5%;
    margin-left:5%;
`;
const ContentsList = styled.div`
`;

export const OrderIndex =() => { 
    const [state,dispatch] = useReducer(orderIndexReducer,initializeState);
    const history = useHistory();
    useEffect(() => {
        dispatch({type:oredersActionTypes.FETCHING})
        orederIndexApi()
        .then((data) => {
            dispatch({
                type:oredersActionTypes.FETCH_SUCCESS,
                payload: {
                    orders: data.orders
                },
            });
        })
        .catch((e) => console.log(e))
    },[])

    function onClickHandle() {
        history.push(orderShowURL())
    }

    return(
        <Fragment>
            <OrderIndexHeader>
                {ORDER_HEADER_TITLE.ORDER_INDEX}
                ORDERINDEX
            </OrderIndexHeader>
            {
                state.fetchState === REQUEST_STATE.OK?
                // <OrderDispatch.Provide value={dispatch}>
                    state.orderList.map((order,index) => 
                    <Link to={`/orders/${order.id}`}  key={index} style={{ textDecoration: 'none' }}>
                        <OrderState.Provider value={order}>
                            {/* order.food_id */}
                            <OrderIndexCard></OrderIndexCard>
                        </OrderState.Provider>
                    
                    </Link>
                    )
                // </OrderDispatch.Provide>
                :
                <ContentsList>
                        <Fragment>
                            <Skeleton variant="rect" width={450} height={300} />
                            <Skeleton variant="rect" width={450} height={300} />
                            <Skeleton variant="rect" width={450} height={300} />
                        </Fragment>
                    </ContentsList>
            }
        </Fragment>
    )  
}
