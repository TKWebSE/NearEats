import React from "react";
import {REQUEST_STATE} from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    user:null,
}

export const userEditActionTypes = {
    FETCHING:"FETCHING",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    SETTINGUSERNAME:"SETTINGUSERNAME",
    SETTINGUSERADDRESS:"SETTINGUSERADDRESS",
    SETTINGUSEREMAIL:"SETTINGUSEREMAIL",
    SETTINGUSERPASSWORD:"SETTINGUSERPASSWORD",
}

export const userEditReducer = (state,action) => {
    switch (action.type) {
        case userEditActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case userEditActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:action.payload.user,
            }
        case userEditActionTypes.SETTINGUSERNAME:
            return{
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name: action.payload.name,
                    address: state.user.address,
                    email:state.user.email,
                    password:state.user.password,
                }
            }
        case userEditActionTypes.SETTINGUSERADDRESS:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:action.payload.address,
                    email:state.user.email,
                    password:state.user.password,
                }
            }
        case userEditActionTypes.SETTINGUSEREMAIL:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:state.user.address,
                    email:action.payload.email,
                    password:state.user.password,
                }
            }
        case userEditActionTypes.SETTINGUSERPASSWORD:
            return {
                fetchState:REQUEST_STATE.OK,
                user:{
                    id: state.user.id,
                    name:state.user.name,
                    address:state.user.address,
                    email:state.user.email,
                    password:action.payload.password,
                }
            }
        default:
            throw Error();
    }
}