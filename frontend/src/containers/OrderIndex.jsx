import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { NotFoundCatComponent } from "../component/notFoundComponent/NotFoundCatComponent";
import { fetchOrederIndexApi } from "../apis/orderApis";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeState, ordersListActionTypes, ordersListReducer } from "../reducer/ordersListReducer";
import { initializeFoodListState, foodsListActionTypes, foodsListReducer } from "../reducer/foodsListReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE, NOTFOUND_ORDER_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../constants";
import { OrderIndexCard } from "../component/orderComponent/OrderIndexCard";
// import NotFoundCat from "../images/NotFoundCat.jpeg";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { foodsIndexURL, orderShowURL } from "../urls/index";
import { ButtonTheme } from "../style_constants";

const OrderWrapper = styled.div`
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
    margin-bottom:5%;
`;

const OrderIndexTitle = styled.h1`
    font-size:250%;
    ${media.lessThan("large")`
        font-size:230%;
    `}
    ${media.lessThan("medium")`
        font-size:150%;
    `}
    ${media.lessThan("small")`
       font-size:100%;
    `}
`;

const NotExistOrderWrapper = styled.div`
    padding-top:5%;
    padding-left:26%;
    position:relative;
    ${media.lessThan("medium")`
        padding-left:14%;
    `}
    ${media.lessThan("small")`
        padding-left:0%;
    `}
`;

const FinishTaskWrapper = styled.div`
    margin-bottom:1%;
    background-color:lightcyan;
`;

const ExistOrderWrapper = styled.div`
    padding-bottom:1%;
`;

const CancelExistOrderWrapper = styled.div`
    margin-bottom:1%;
    background-color:darkgray;
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

const SkeltonOrderWrapper = styled.div`
    width:430%;
    padding-bottom:10%;
    ${media.lessThan("small")`
        padding-bottom:20%;
    `}
`;

export const OrderIndex = () => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const [state, dispatch] = useReducer(ordersListReducer, initializeState);
    const [foodsState, foodsDispatch] = useReducer(foodsListReducer, initializeFoodListState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: ordersListActionTypes.FETCHING })
        dispatch({ type: foodsListActionTypes.FETCHING })
        fetchOrederIndexApi(SessionAuthState.currentUser.id)
            .then((data) => {
                dispatch({
                    type: ordersListActionTypes.FETCH_SUCCESS,
                    payload: {
                        orders: data.orders,
                    },
                });
                foodsDispatch({
                    type: foodsListActionTypes.FETCH_SUCCESS,
                    payload: {
                        foodsList: data.foods,
                    },
                });
            })
            .catch((e) => console.log(e))
    }, [])

    function gotoFoodIndexHandle() {
        history.push(foodsIndexURL);
    }

    console.log(state)

    return (
        <Fragment>
            <OrderWrapper>
                <OrderIndexTitle>
                    {ORDER_HEADER_TITLE.ORDER_INDEX_TITLE}
                </OrderIndexTitle>
                {
                    state.fetchState === REQUEST_STATE.OK ?
                        state.orders === [] || state.orders[0] === undefined ?
                            <NotExistOrderWrapper>
                                <NotFoundCatComponent
                                    firstText={NOTFOUND_ORDER_TEXT.NOT_EXIST_ORDER_TEXT}
                                    secondText={NOTFOUND_ORDER_TEXT.LETS_ORDER_TEXT}
                                    btnLabel={NOTFOUND_ORDER_TEXT.GOTO_FOOD_INDEX_BUTTON_LABEL}
                                    onClick={() => gotoFoodIndexHandle()}
                                />
                            </NotExistOrderWrapper>
                            :
                            foodsState.foodsList.map((food, f) =>
                                state.orders.map((order, o) =>
                                    <div>
                                        <Fragment>
                                            {food.id === order.food_id ?
                                                < Link to={orderShowURL(order.id)} style={{ textDecoration: 'none' }}>
                                                    {
                                                        order.order_status === ORDER_TASK_STATUS_NUMBERS.COMPLETE_ORDER ?
                                                            <FinishTaskWrapper>
                                                                <OrderIndexCard order={order} food={food} />
                                                            </FinishTaskWrapper>
                                                            :
                                                            order.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL || order.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL ?
                                                                <CancelExistOrderWrapper key={o}>
                                                                    <OrderIndexCard order={order} food={food} />
                                                                </CancelExistOrderWrapper>
                                                                :
                                                                <ExistOrderWrapper key={o}>
                                                                    <OrderIndexCard order={order} food={food} />
                                                                </ExistOrderWrapper>
                                                    }
                                                </Link>
                                                :
                                                <div></div>
                                            }
                                        </Fragment>
                                    </div>
                                ))
                        :
                        <SkeltonsWrapper>
                            <SkeltonCardWrapper>
                                <SkeltonOrderWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonOrderWrapper>
                                <SkeltonOrderWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonOrderWrapper>
                                <SkeltonOrderWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonOrderWrapper>
                                <SkeltonOrderWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonOrderWrapper>
                            </SkeltonCardWrapper>
                        </SkeltonsWrapper>
                }
            </OrderWrapper>
        </Fragment >
    )
}
