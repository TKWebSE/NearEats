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

const OrderIndexHeader = styled.h1`
    margin-top:5%;
    margin-left:5%;
`;
const ContentsList = styled.div`
`;

export const OrderIndex =() => { 
    const [state,dispatch] = useReducer(orderIndexReducer,initializeState);
    const history = useHistory();
    console.log(state)
    useEffect(() => {
        dispatch({type:oredersActionTypes.FETCHING})
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
                state.fetchState === REQUEST_STATE.OK?
                // <OrderDispatch.Provide value={dispatch}>
                    state.orderList.map((order,index) => 
                    <Link to={`/orders/${order.id}`}  key={index} style={{ textDecoration: 'none' }}>
                    
                        {/* <OrderState.Provide value={order}> */}
                            order.id
                            <OrderIndexCard></OrderIndexCard>
                        {/* </OrderState.Provide> */}
                    
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
