import { CardActions } from "@material-ui/core";
import React from "react";

export const initializeState = () => {
    sessionUser:[],
    loggedIn:false,
}

export const sessionActionTypes = () => {
    LOGINUSER:"LOGIJNUSER",
    LOGOUTUSER:"LOGOUTUSER",
    ISLOGIN:"ISLOGIN",
}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case sessionActionTypes.C:
            return {
                ...state,
                fetchstate:REQUEST_STATE.LOADING,
            }
        case  sessionActionTypes.LOGOUTUSER:
            return {
                fetchstate:REQUEST_STATE.OK,
                order: action.payload.order,
            }
        default:
            break;
    }
}