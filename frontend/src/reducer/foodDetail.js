import React from `react`;
import { REQUEST_STATE } from "../constants";
import { restaurantsIndex ,foodDetails} from "../urls";

export const initializeState = {
    fetchState:INITIAL,
    food: food,
}

export const foodDetailActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const foodDetailReducer = () => {
    switch (action.type) {
        case foodDetailActionTypes.FETCHING:
            ...state,
            fetchState:REQUEST_STATE.LOADING
        case foodDetailActionTypes.FETCH_SUCCESS
            fetchState;REQUEST_STATE.OK,
            food: action.payload.food,
        default:
            break;
    }

}