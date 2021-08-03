import React,{Reducer} from "react";
import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    user:{
        id:null,
        name:"",
        email:"",
        password:"",
        passwordConfirmation:"",
        address:"",
    },
    message:"",
}

export const userActionTypes = {
    FETCHING:"FETCHING",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    SETTINGUSERNAME:"SETTINGUSERNAME",
    SETTINGUSEREMAIL:"SETTINGUSEREMAIL",
    SETTINGUSERPASSWORD:"SETTINGUSERPASSWORD",
    SETTINGUSERPASSWORDCONFIRMATION:"SETTINGUSERPASSWORDCONFIRMATION",
    SETTINGUSERADDRESS:"SETTINGUSERADDRESS",
}

export const userReducer = (state,action) => {
    switch (action.type) {
        case userActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case userActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:action.payload.user,
            }
        case userActionTypes.SETTINGUSERNAME:
            return{
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name: action.payload.name,
                    address: state.user.address,
                    email:state.user.email,
                    password:state.user.password,
                    passwordConfirmation:state.user.passwordConfirmation,
                }
            }
        case userActionTypes.SETTINGUSEREMAIL:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:state.user.address,
                    email:action.payload.email,
                    password:state.user.password,
                    passwordConfirmation:state.user.passwordConfirmation,
                }
            }
        case userActionTypes.SETTINGUSERPASSWORD:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:state.user.address,
                    email:state.user.email,
                    password:action.payload.password,
                    passwordConfirmation:state.user.passwordConfirmation,
                }
            }
        case userActionTypes.SETTINGUSERPASSWORDCONFIRMATION:
            console.log(action)
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:state.user.address,
                    email:state.user.email,
                    password:state.user.password,
                    passwordConfirmation:action.payload.passwordConfirmation,
                }
            }
        case userActionTypes.SETTINGUSERADDRESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:action.payload.address,
                    email:state.user.email,
                    password:state.user.password,
                    passwordConfirmation:state.user.passwordConfirmation,
                }
            }
        default:
            throw new Error();
    }
}