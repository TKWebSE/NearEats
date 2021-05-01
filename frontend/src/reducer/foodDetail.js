import React from "react";
import { REQUEST_STATE } from "../constants";
import { restaurantsIndex ,foodDetails} from "../urls";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    food: null,
}

export const foodDetailActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const foodDetailReducer = (state,action) => {
    switch (action.type) {
        case foodDetailActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING
            }
        case foodDetailActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                food: action.payload.food,
            }
        default:
            throw new Error();
    }

}