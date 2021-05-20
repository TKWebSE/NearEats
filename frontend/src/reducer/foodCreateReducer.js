import React from "react";
import REQUEST_STATE from "../constants";
import { foodCreate } from "../urls";

export const initializeState = {
    food:{
        name:"nameeeeeee",
        price:100,
        description:"desdesceeeee",
    },
}

export const foodCreateActionTypes = {
    INITIAL:"INITIAL",
    SETTINGFOODNAME:"SETTINGFOODNAME",
    SETTINGFOODPRICE:"SETTINGFOODPRICE",
    SETTINGFOODDESCRIPTION:"SETTINGFOODDESCRIPTION",
    SUCCESS:"SUCCESS",
    TEST:"TEST",
}

export const foodCreateReducer = (state,action) => {
    switch (action.type) {
        case foodCreateActionTypes.SETTINGFOODNAME:
            return {
                    food:{
                        name: action.payload.name,
                        price: state.food.price,
                        description:state.food.description,
                    }
            }
        case foodCreateActionTypes.SETTINGFOODPRICE:
            return {
                food:{
                    name:state.food.name,
                    price:action.payload.price,
                    description:state.food.description,
                }
            }
        case foodCreateActionTypes.SETTINGFOODDESCRIPTION:
            return {
                food:{
                    name:state.food.name,
                    price:state.food.price,
                    description:action.payload.description,
                }
            }
        case foodCreateActionTypes.TEST:
            console.log(state)
            return{}
        default:
            throw new Error();
    }
}