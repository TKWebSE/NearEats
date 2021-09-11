import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { fetchOrederIndexApi } from "../apis/orderApis";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeState, oredersActionTypes, orderIndexReducer } from "../reducer/orderIndexReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE, NOTFOUND_ORDER_TEXT } from "../constants";
import { OrderIndexCard } from "../component/orderComponent/OrderIndexCard";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { foodsIndexURL, orderShowURL } from "../urls/index";
import { ButtonTheme } from "../style_constants";

const OrderWrapper = styled.div`
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
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

const ExistOrderWrapper = styled.div`
    padding-bottom:1%;
`;


const NoFoodsListWrapper = styled.div`
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

const NotFoundCatWrapper = styled.div`
`;

const NotFoundCatImage = styled.img`
    ${media.lessThan("small")`
        width:120%;
    `}
`;

const NotExistOrderTextWrapper = styled.h3`
    position:absolute;
    top: 50%;
    left: 30%;
    font-size:150%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const LetsUploadFoodsWrapper = styled.h3`
    position:absolute;
    top: 60%;
    left: 30%;
    font-size:150%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const GotoFoodCreateWrapper = styled.div`
    position:absolute;
    top: 80%;
    left: 37%;
    ${media.lessThan("large")`
        left:40%;
    `}
    ${media.lessThan("medium")`
        left:34%;
    `}
    ${media.lessThan("small")`
        left:25%;
    `}
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
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state, dispatch] = useReducer(orderIndexReducer, initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: oredersActionTypes.FETCHING })
        console.log(SessionAuthState)
        fetchOrederIndexApi(SessionAuthState.currentUser.id)
            .then((data) => {
                console.log(data)
                dispatch({
                    type: oredersActionTypes.FETCH_SUCCESS,
                    payload: {
                        orders: data.orders,
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
                        state.orders === [] ?
                            <NotExistOrderWrapper>
                                <NotFoundCatWrapper>
                                    <NotFoundCatImage src={NotFoundCat} />
                                </NotFoundCatWrapper>
                                <NotExistOrderTextWrapper>
                                    {NOTFOUND_ORDER_TEXT.NOT_EXIST_ORDER_TEXT}
                                </NotExistOrderTextWrapper>
                                <LetsUploadFoodsWrapper>
                                    {NOTFOUND_ORDER_TEXT.LETS_ORDER_TEXT}
                                </LetsUploadFoodsWrapper>
                                <ThemeProvider theme={ButtonTheme}>
                                    <GotoFoodCreateWrapper>
                                        <MaterialUICommonButton onClick={() => gotoFoodIndexHandle()} btnLabel={NOTFOUND_ORDER_TEXT.GOTO_FOOD_INDEX_BUTTON_LABEL}></MaterialUICommonButton>
                                    </GotoFoodCreateWrapper>
                                </ThemeProvider>
                            </NotExistOrderWrapper>
                            :
                            state.orders.map((order, i) =>
                                <Link to={orderShowURL(order.id)} style={{ textDecoration: 'none' }}>
                                    <ExistOrderWrapper key={i}>
                                        <OrderIndexCard order={order} />
                                    </ExistOrderWrapper>
                                </Link>
                            )
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
        </Fragment>
    )
}
