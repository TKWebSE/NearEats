import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton"
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { MaterialUIDeleteButtonInModal } from "../component/MaterialUIDeleteButtonInModal";
import { ButtonTheme } from "../style_constants";
import { REQUEST_STATE, FOOD_DETAIL_TEXT } from "../constants";
import { fetchFoodApi, buyFoodApi, deleteFoodApi } from "../apis/foodApis";
import {
    foodInitializeState,
    foodActionTypes,
    foodReducer
} from "../reducer/foodReducer";
import { FoodDetailCard } from "../component/foodComponent/FoodDetailCard";
import { useHistory } from "react-router-dom";
import { myFoodsURL, foodEditURL, userEditURL, buyPointURL, foodsIndexURL } from "../urls/index";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from '../context/Context';
import { messageActionTypes } from "../reducer/messageReducer";
import MaterialUISimpleModal from "../component/MaterialUISimpleModal";

const DetailWrapper = styled.div`
    margin-top:5%;
    margin-left:20%;
    margin-right:20%;
    margin-bottom:5%;
`;

const LoadingWrapper = styled.div`
    
`;

const FoodCardWrapper = styled.div`
    margin-bottom:5%;
`;

const BtnWrapper = styled.div`
    // text-align:right;
    // margin-right: 0;
    justify-content: flex-end;
    display: flex;
`;

const MakerButtonWrapper = styled.div`
    justify-content: flex-end;
    display: flex;
`;

const EditBtnWrapper = styled.div`
    margin:0% 5% 0% -5%;
`;

const DeleteBtnWrapper = styled.div`
    margin:3% 0% 1% 0%;
`;

export const FoodDetail = ({ match }) => {
    const [state, dispatch] = useReducer(foodReducer, foodInitializeState);
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: foodActionTypes.FETCHING })
        fetchFoodApi(match.params.foodId)
            .then((data) => {
                dispatch({
                    type: foodActionTypes.FETCH_SUCCESS,
                    payload:
                        { food: data.food },
                })
            })
            .catch(e => console.log(e));
    }, []);

    function handleEditFood() {
        history.push(foodEditURL(state.food.id))
    }
    function handleDeleteFood() {
        deleteFoodApi(state.food)
            .then((data) => {
                dispatch({
                    type: foodActionTypes.DELETE_FOOD,
                })
                messageDispatch({
                    type: messageActionTypes.SET_MESSAGE,
                    payload: {
                        message: FOOD_DETAIL_TEXT.COMPLETE_DELETE_MESSAGE
                    },
                })
                history.push(myFoodsURL)
            })
            .catch(
                messageDispatch({
                    type: messageActionTypes.SET_ERROR_MESSAGE,
                    payload: {
                        message: FOOD_DETAIL_TEXT.CANT_DELETE_MESSAGE
                    },
                })
            );
    }

    function handleGotoBuyPoint() {
        history.push(buyPointURL)
    }

    function handleGotoRegistrationAddress() {
        history.push(userEditURL(SessionAuthState.currentUser.id))
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
                            {
                                state.food.count === 0 ?
                                    null
                                    :
                                    <BtnWrapper>
                                        <ThemeProvider theme={ButtonTheme}>{
                                            SessionAuthState.currentUser.id == state.food.user_id ?
                                                <MakerButtonWrapper>
                                                    <EditBtnWrapper>
                                                        <MaterialUICommonButton
                                                            onClick={handleEditFood}
                                                            btnLabel={FOOD_DETAIL_TEXT.EDIT_FOOD_LABEL}
                                                        />
                                                    </EditBtnWrapper>
                                                    <DeleteBtnWrapper>
                                                        <MaterialUIDeleteButtonInModal
                                                            onClick={handleDeleteFood}
                                                            btnLabel={FOOD_DETAIL_TEXT.DELETE_FOOD_LABEL}
                                                            modalTilte={FOOD_DETAIL_TEXT.DELETE_MODAL_TITLE}
                                                            modalText={FOOD_DETAIL_TEXT.DELETE_MODAL_TEXT}
                                                        />
                                                    </DeleteBtnWrapper>
                                                </MakerButtonWrapper>
                                                :
                                                SessionAuthState.currentUser.address === null || SessionAuthState.currentUser.address === undefined ||
                                                    SessionAuthState.currentUser.address === "" ?
                                                    <MaterialUISimpleModal
                                                        btnLabel={FOOD_DETAIL_TEXT.BUY_FOOD_LABEL}
                                                        onClick={handleGotoRegistrationAddress}
                                                        modalTilte={FOOD_DETAIL_TEXT.REGISTRATION_ADDRESS}
                                                    />
                                                    :
                                                    SessionAuthState.currentUser.point < state.food.price ?
                                                        <MaterialUISimpleModal
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
                            }
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
