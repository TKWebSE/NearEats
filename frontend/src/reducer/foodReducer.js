import { REQUEST_STATE } from "../constants";

export const foodInitializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    food: null,
}

export const foodActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS",
    DELETE_FOOD: "DELETE_FOOD",
}

export const foodReducer = (state, action) => {
    switch (action.type) {
        case foodActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING
            }
        case foodActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                food: action.payload.food,
            }
        case foodActionTypes.DELETE_FOOD:
            return {
                fetchState: REQUEST_STATE.FETCHING,
                food: null,
            }
        default:
            throw new Error();
    }

}
