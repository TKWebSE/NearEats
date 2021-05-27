import React from "react";
import {REQUEST_STATE} from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    user:user,
}

export const userEditActionTypes = {
    FETCHING:"FETCHING",
    FETCH_SUCCESS:"FETCH_SUCCESS",
}

export const userEditReducer = (action,state) => {
    switch (action.type) {
        case userEditActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case userEditActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:action.payload.user,
            }
        default:
            throw Error();
    }
}