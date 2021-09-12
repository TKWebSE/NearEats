import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState: "INITIAL",
    order: null,
}

export const orderDetailActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS",
}

export const orderDetailReducer = (state, action) => {
    switch (action.type) {
        case orderDetailActionTypes.FETCHING:
            return {
                ...state,
                fetchstate: REQUEST_STATE.LOADING,
            }
        case orderDetailActionTypes.FETCH_SUCCESS:
            return {
                fetchstate: REQUEST_STATE.OK,
                order: action.payload.order,
            }
        default:
            break;
    }
}
