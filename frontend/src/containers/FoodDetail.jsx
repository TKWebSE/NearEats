import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton"
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { ButtonTheme } from "../style_constants";
import { REQUEST_STATE, FOOD_DETAIL_TEXT } from "../constants";
import { fetchFoodApi, buyFoodApi } from "../apis/foodApis";
import {
    initializeState,
    foodDetailActionTypes,
    foodDetailReducer
} from "../reducer/foodDetail";
import { FoodDetailCard } from "../component/foodComponent/FoodDetailCard";
import { useHistory } from "react-router-dom";
import { foodEditURL, buyPointURL, foodsIndexURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { messageActionTypes } from "../reducer/messageReducer";
import MaterialUISimpleModal from "../component/MaterialUISimpleModal";

const DetailWrapper = styled.div`
    margin-top:5%;
    margin-left:20%;
    margin-right:20%;
`;

const LoadingWrapper = styled.div`
    
`;

const FoodCardWrapper = styled.div`
    margin-bottom:5%;
`;

const BtnWrapper = styled.div`
    text-align:right;
`;

export const FoodDetail = ({ match }) => {
    const [state, dispatch] = useReducer(foodDetailReducer, initializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: foodDetailActionTypes.FETCHING })
        fetchFoodApi(match.params.foodId)
            .then((data) => {
                dispatch({
                    type: foodDetailActionTypes.FETCH_SUCCESS,
                    payload:
                        { food: data.food },
                })
            })
            .catch(e => console.log(e));
    }, []);

    function handleEditFood() {
        history.push(foodEditURL(state.food.id))
    }

    function handleGotoBuyPoint() {
        history.push(buyPointURL)
    }

    function handleBuyFood() {
        buyFoodApi(state.food.id, SessionAuthState.currentUser.id)
            .then((data) => {
                messageDispatch({
                    type: messageActionTypes.SET_MESSAGE,
                    payload: {
                        message: FOOD_DETAIL_TEXT.BUY_FOOD_MESSAGE
                    },
                })
                history.push(foodsIndexURL)
            })
            .catch(e => console.log(e));
    }

    console.log(state)

    return (
        <Fragment>
            <DetailWrapper>
                {
                    REQUEST_STATE.OK === state.fetchState ?
                        <Fragment>
                            <FoodCardWrapper>
                                <FoodDetailCard {...state.food}></FoodDetailCard>
                            </FoodCardWrapper>
                            <BtnWrapper>
                                <ThemeProvider theme={ButtonTheme}>
                                    {
                                        SessionAuthState.currentUser.id == state.food.user_id ?
                                            <MaterialUICommonButton
                                                onClick={handleEditFood}
                                                btnLabel={FOOD_DETAIL_TEXT.EDIT_FOOD_LABEL}
                                            />
                                            :
                                            SessionAuthState.currentUser.point < state.food.price ?
                                                < MaterialUISimpleModal
                                                    btnLabel={FOOD_DETAIL_TEXT.BUY_FOOD_LABEL}
                                                    onClick={handleGotoBuyPoint}
                                                    modalTilte={FOOD_DETAIL_TEXT.BUY_POINT_MODAL_TITLE}
                                                />
                                                :
                                                <MaterialUISimpleModal
                                                    btnLabel={FOOD_DETAIL_TEXT.BUY_FOOD_LABEL}
                                                    onClick={handleBuyFood}
                                                    modalTilte={FOOD_DETAIL_TEXT.BUY_FOOD_MODAL_TITLE}
                                                />
                                    }
                                </ThemeProvider>
                            </BtnWrapper>
                        </Fragment>
                        :
                        <Fragment>
                            <LoadingWrapper>
                                <Skeleton variant="rect" width={450} height={300} />
                            </LoadingWrapper>
                        </Fragment>
                }
            </DetailWrapper>
        </Fragment>
    )
}
