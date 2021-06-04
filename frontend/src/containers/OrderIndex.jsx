import React, {Fragment, useEffect, useReducer  } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import { REQUEST_STATE,ORDER_HEADER_TITLE } from "../constants";
import {OrderDispatch,OrderState} from "../context/Context";
import { initializeState,oredersActionTypes,orderIndexReducer } from "../reducer/orderIndexReducer";
import {orderDetailHistory} from "../urls/index";
import {orederIndexApis} from "../apis/orderApis";
import {OrderIndexCard} from "../component/orderComponent/OrderIndexCard";

const OrderIndexHeader = styled.div`
`;
const ContentsList = styled.div`
`;
export const OrderIndex =() => { 
    const [state,dispatch] = useReducer(orderIndexReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatchEvent({type:oredersActionTypes.FETCHING})
        orederIndexApis()
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
        history.push(orderDetailHistory())
    }

    return(
        <Fragment>
            <OrderIndexHeader>
                {ORDER_HEADER_TITLE.ORDER_INDEX}
            </OrderIndexHeader>
            {
                state.fetchState === REQUEST_STATE.LOADING?
                    <ContentsList>
                        <Fragment>
                            <Skeleton variant="rect" width={450} height={300} />
                            <Skeleton variant="rect" width={450} height={300} />
                            <Skeleton variant="rect" width={450} height={300} />
                        </Fragment>
                    </ContentsList>
                :
                state.orders.map((order,index)=> 
                <Link to={`/orders/${order.id}`}  key={index} style={{ textDecoration: 'none' }}>
                <OrderDispatch.Provide value={dispatch}>
                    <OrderState.Provide value={order}>
                        <OrderIndexCard></OrderIndexCard>
                    </OrderState.Provide>
                </OrderDispatch.Provide>
                </Link>
                )
            }
        </Fragment>
    )  
}
