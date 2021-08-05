import { REQUEST_STATE } from '../constants';

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    foodsList: []
}

export const foodsListActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const foodsListReducer = (state,action) => {
    switch (action.type) {
        case foodsListActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case foodsListActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                foodsList: action.payload.foodsList,
            }
        default:
            throw new Error();
    }
}