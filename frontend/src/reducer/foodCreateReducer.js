import React from "react";
import REQUEST_STATE from "../constants";

const InitialzeState = {
    food:null,
}

const CreateActionType = {
    INITIAL:"INITIAL",
    SETTING:"SETTING",
    SUCCESS:"SUCCESS",
}

const foodCreateReducer = (state,action) => {
    switch (action.type) {
        case CreateActionType.SETTING:
            console.log("e")
    
        default:
            console.log(e);
    }
}