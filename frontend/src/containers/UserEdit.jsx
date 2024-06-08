import React, { Fragment, useReducer, useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router";
import { fetchUserApi, userUpdateApi } from "../apis/userApis";
import { REQUEST_STATE, USER_EDIT } from "../constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { userShowURL } from "../urls/index";
import { ThemeProvider } from '@material-ui/core/styles';
import { UserEditCard } from "../component/userComponent/UserEditCard";
import { ButtonTheme } from "../style_constants";
import { SaveButton } from "../component/MaterialUISaveButton";
import { SessionState, SessionDispatch, UserDispatch, UserState, MessageDispatch, MessageState } from '../context/Context';
import { foodsIndexURL } from "../urls/index";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateName, validateUserAddress } from "../AppFunction";

const UserEditHeader = styled.h1`
    margin-top:5%;
    // margin-left:7%;
`;

const UserEditCardWrapper = styled.div`
margin-left:20%;
margin-right:20%;
`;

const UserEditButton = styled.div`
    margin-top:1%;
    text-align:right;
`;


export const UserEdit = ({ match }) => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const [state, dispatch] = useReducer(userReducer, initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: userActionTypes.FETCHING });
        if (match.params.userId === SessionAuthState.currentUser.id.toString()) {
            fetchUserApi(match.params.userId)
                .then((data) => {
                    dispatch({
                        type: userActionTypes.FETCH_SUCCESS,
                        payload: {
                            value: data.user
                        },
                    })
                })
                .catch(e => console.log(e));
        } else {
            history.push(foodsIndexURL);
        }
    }, []);

    function onKeyDown(event) {
        submitHandle()
    }

    function submitHandle() {
        try {
            console.log(state)
            validateName(state.user.name);
            validateUserAddress(state.user.address);
            // validateUserLocation(state.user.city);
            userUpdateApi(state.user)
                .then(
                    history.push(userShowURL(state.user.id))
                )
                .catch((e) => {
                    messageDispatch({
                        type: messageActionTypes.SET_ERROR_MESSAGE,
                        payload: {
                            errorMessage: USER_EDIT.EDIT_ERROR
                        },
                    })
                })
        } catch (e) {
            messageDispatch({
                type: messageActionTypes.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: e
                },
            })
        }
    }

    return (
        <Fragment>
            <UserEditCardWrapper>
                <UserEditHeader>
                    {USER_EDIT.TITLE}
                </UserEditHeader>
                {
                    REQUEST_STATE.OK === state.fetchState ?
                        <Fragment>
                            <UserDispatch.Provider value={dispatch}>
                                <UserState.Provider value={state}>
                                    <UserEditCard state={state} dispatch={dispatch} onKeyDown={onKeyDown} />
                                </UserState.Provider>
                            </UserDispatch.Provider>
                            <UserEditButton>
                                <ThemeProvider theme={ButtonTheme}>
                                    <SaveButton
                                        onClick={submitHandle}
                                        btnLabel={USER_EDIT.BTN_LABEL}
                                    />
                                </ThemeProvider>
                            </UserEditButton>
                        </Fragment>
                        :
                        <Fragment>
                            <Skeleton variant="rect" width={450} height={300} />
                        </Fragment>
                }
            </UserEditCardWrapper>
        </Fragment>
    )
}
