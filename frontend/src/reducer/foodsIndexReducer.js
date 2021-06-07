import { REQUEST_STATE } from '../constants';

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    foodsList: []
}

export const foodsActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const foodsIndexReducer = (state,action) => {
    switch (action.type) {
        case foodsActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            }
        case foodsActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                foodsList: action.payload.foods,
            }
        default:
            throw new Error();
    }
}