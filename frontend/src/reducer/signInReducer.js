import React from "react";

export const initializeState =  {
    currentUser:[],
    isLogin:false,
}

export const signInActionTypes = {
    SETTINGEMAIL:"SETTINGEMAIL",
    SETTINGPASSWORD:"SETTINGPASSWORD",
    SETTINGPASSWORDCONFIRM:"SETTINGPASSWORDCONFIRM",
}

export const signInReducer = (state,action) => {
    switch (action.type) {
        case signInActionTypes.SETTINGEMAIL:
            return {
                ...state,
                currentUser:action.payload.currentUser,
                isLogin:true,
            }
        case  signInActionTypes.SETTINGPASSWORD:
            return {
                sessionUser:null,
                isLogin:false,
            }
        case signInActionTypes.SETTINGPASSWORDCONFIRM:
            return {
                sessionUser:action.payload.user,
                isLogin:action.payload.islogin,
            }
        default:
            break;
    }
}