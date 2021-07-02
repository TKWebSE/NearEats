import React,{Reducer} from "react";
import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    user:null,
}

export const usersActionTypes = {
    FETCHING:"FETCHING",
    FETCH_SUCCESS:"SUCCESS",
}

export const userDetailReducer = (state,action) => {
    switch (action.type) {
        case usersActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case usersActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:action.payload.user,
            }
        default:
            throw new Error();
    }
}