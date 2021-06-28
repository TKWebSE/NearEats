import React from "react";

export const initializeState =  {
    user:{  
            email:null,
            password:null,
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
                    id: state.user.id,
                    email:action.payload.email,
                    password:state.user.password,
                }
            }
        case  signInActionTypes.SETTINGPASSWORD:
            return {
                user:{
                    id: state.user.id,
                    email:state.user.email,
                    password:action.payload.password,
                }
            }
        case signInActionTypes.SETTINGPASSWORDCONFIRM:
            return {
                user:action.payload.user,
                isLogin:action.payload.islogin,
            }
        default:
            break;
    }
}