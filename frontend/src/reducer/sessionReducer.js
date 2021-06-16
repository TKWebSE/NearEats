import React from "react";

export const initializeState =  {
    sessionUser:[],
    isLogin:false,
}

export const sessionActionTypes = {
    LOGINUSER:"LOGIJNUSER",
    LOGOUTUSER:"LOGOUTUSER",
    ISLOGIN:"ISLOGIN",
}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case sessionActionTypes.LOGINUSER:
            return {
                ...state,
                sessionUser:action.payload.user,
                isLogin:true,
            }
        case  sessionActionTypes.LOGOUTUSER:
            return {
                sessionUser:user,
                isLogin:false,
            }
        case sessionActionTypes.ISLOGIN:
            return {
                sessionUser:action.payload.user,
                isLogin:action.payload.islogin,
            }
        default:
            break;
    }
}