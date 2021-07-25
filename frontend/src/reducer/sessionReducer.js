import React from "react";
import { REQUEST_STATE } from "../constants";

export const initializeState =  {
    fetchSessionState:REQUEST_STATE.INITIAL,
    currentUser:{},
    isLogin:false,
}

export const sessionActionTypes = {
    FETCHING:"FETCHING",
    SIGNIN:"SIGNIN",
    SIGNOUT:"SIGNOUT",
    ISLOGIN:"ISLOGIN",
}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case sessionActionTypes.FETCHING:
            return {
                ...state,
                fetchSessionState:REQUEST_STATE.LOADING,
                currentUser:state.currentUser,
                isLogin:state.isLogin,
            }
        case sessionActionTypes.SIGNIN:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:action.payload.currentUser,
                isLogin:true,
            }
        case  sessionActionTypes.SIGNOUT:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:null,
                isLogin:false,
            }
        case sessionActionTypes.ISLOGIN:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:action.payload.data.user,
                isLogin:action.payload.data.is_login,
            }
        default:
            break;
    }
}