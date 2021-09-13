import { REQUEST_STATE } from '../constants';

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    orders: []
}

export const ordersListActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const ordersListReducer = (state, action) => {
    switch (action.type) {
        case ordersListActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            };
        case ordersListActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                orders: action.payload.orders,
            };
        default:
            throw new Error();
    }
}
