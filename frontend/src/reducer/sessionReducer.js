import React from "react";

export const initializeState =  {
    currentUser:{},
    isLogin:true,
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
            console.log(action.payload.data)
            console.log(action.payload.data)
            return {
                currentUser:action.payload.data.user,
                isLogin:action.payload.data.is_login,
            }
        default:
            break;
    }
}