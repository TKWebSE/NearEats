import { REQUEST_STATE } from '../constants';

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    ordersList: []
}

export const oredersActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const orderIndexReducer = (state,action) => {
    switch (action.type) {
        case oredersActionTypes.FETCHING:
        return {
            ...state,
            fetchState:REQUEST_STATE.LOADING,
        };
        case oredersActionTypes.FETCH_SUCCESS:
        return {
            fetchState: REQUEST_STATE.OK,
            orderList:action.payload.orders,
        };  
        default:
            throw new Error();    
    }
}