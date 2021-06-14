import { CardActions } from "@material-ui/core";
import React from "react";

export const initializeState = () => {
    
}

export const sessionActionTypes = () => {

}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case orderDetailActionTypes.FETCHING:
            return {
                ...state,
                fetchstate:REQUEST_STATE.LOADING,
            }
        case  orderDetailActionTypes.FETCH_SUCCESS:
            return {
                fetchstate:REQUEST_STATE.OK,
                order: action.payload.order,
            }
        default:
            break;
    }
}