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
    SETTINGMESSAGE:"SETTINGMESSAGE",
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
                message:state.message,
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
                },
                message:state.message,
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
                },
                message:state.message,
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
                },
                message:state.message,
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
                },
                message:state.message,
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
                },
                message:state.message,
            }
        case userActionTypes.SETTINGMESSAGE:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:action.payload.address,
                    email:state.user.email,
                    password:state.user.password,
                    passwordConfirmation:state.user.passwordConfirmation,
                },
                message:action.payload.message,
            }
        default:
            throw new Error();
    }
}