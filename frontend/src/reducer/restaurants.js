import { REQUEST_STATE } from '../constants';
import { useReducer } from "react";


export const InitializeState = {

    restaurantsLists: []
}

export const restaurantsActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const Reducer = (state,action) => {
    switch (action.type) {
        case restaurantsActionTypes.FETCHING
            ...state
            
        case restaurantsActionTypes.FETCH_SUCCESS
        
        default:
            throw new Error();    
    }
}