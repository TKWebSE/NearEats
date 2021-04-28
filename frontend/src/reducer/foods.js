import { REQUEST_STATE } from '../constants';
import { useReducer } from "react";

export const initializeState = {
    fetchFoods: REQUEST_STATE.INITIAL,
    foodsList: []
}

export const foodsActionTypes = {
    FETCHING: FETCHING,
    FETCH_SUCCESS: SUCCESS
}

export const foodsReducer = (state,action) => {
    switch (actiom.type) {
        case foodsActionTypes.FETCHING:
            return {
                ...state,
                fetchFoods:REQUEST_STATE.LOADING,
            }
        case foodsActionTypes.FETCH_SUCCESS:
            return {
                fetchFoods: REQUEST_STATE.OK,
                foodsList: action.payload.foods,
            }
        default:
            throw new Error();
    }
}