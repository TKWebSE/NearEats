import React, {Reducer}from "react";
import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    food:null,
}

export const foodEditActionTypes = {
    FETCHING:"FECTHING",
    FETCH_SUCCESS:"SUCCESS",
}

export const foodEditReducer = (state,action) => {
    switch (action.type) {
        case foodEditActionTypes.FETCHING:
            return {
                ...state,
                fetchstate:REQUEST_STATE.LOADING,
            }
        case  foodEditActionTypes.FETCH_SUCCESS:
            return {
                fetchstate:REQUEST_STATE.OK,
                food: action.payload.food,
            }
        default:
            throw Error();
    }
}