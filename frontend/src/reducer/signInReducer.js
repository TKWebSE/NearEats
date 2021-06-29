import React from "react";

export const initializeState =  {
    user:{  
            email:"",
            password:"",
        },
    isLogin:false,
}

export const signInActionTypes = {
    SIGNIN:"SIGNIN",
    SETTINGEMAIL:"SETTINGEMAIL",
    SETTINGPASSWORD:"SETTINGPASSWORD",
    SETTINGPASSWORDCONFIRM:"SETTINGPASSWORDCONFIRM",
}

export const signInReducer = (state,action) => {
    switch (action.type) {
        case signInActionTypes.SIGNIN:
            return {
                ...state,
                user:action.payload.user,
                isLogin:true,
            }
        case signInActionTypes.SETTINGEMAIL:
            return {
                user:{
                    email:action.payload.email,
                    password:state.user.password,
                }
            }
        case  signInActionTypes.SETTINGPASSWORD:
            return {
                user:{
                    email:state.user.email,
                    password:action.payload.password,
                }
            }
        default:
            break;
    }
}