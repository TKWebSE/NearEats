import React from "react";
import REQUEST_STATE from "../constants";

export const initializeState = {
    food:{
        name:"nameeeeeee",
        price:100,
        description:"desdesceeeee",
    },
}

export const foodCreateActionTypes = {
    INITIAL:"INITIAL",
    SETTING:"SETTING",
    SUCCESS:"SUCCESS",
    TEST:"TEST",
}

export const foodCreateReducer = (state,action) => {
    switch (action.type) {
        case foodCreateActionTypes.SETTING:
            console.log("reduberSettingInside")
            console.log(action)
            console.log(state)
            console.log({...state})
            return {
                    food:{
                        name: action.payload.name,
                        price: state.food.price,
                        description:state.food.description,
                    }
            }
        case foodCreateActionTypes.TEST:
            console.log(state)
            return{}
        default:
            throw new Error();
    }
}