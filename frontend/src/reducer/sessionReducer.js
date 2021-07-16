import React from "react";

export const initializeState =  {
    currentUser:{},
    isLogin:false,
}

export const sessionActionTypes = {
    SIGNIN:"SIGNIN",
    SIGNOUT:"SIGNOUT",
    ISLOGIN:"ISLOGIN",
}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case sessionActionTypes.SIGNIN:
            return {
                ...state,
                currentUser:action.payload.currentUser,
                isLogin:true,
            }
        case  sessionActionTypes.SIGNOUT:
            return {
                currentUser:null,
                isLogin:false,
            }
        case sessionActionTypes.ISLOGIN:
            return {
                currentUser:action.payload.currentUser,
                isLogin:action.payload.islogin,
            }
        default:
            break;
    }
}