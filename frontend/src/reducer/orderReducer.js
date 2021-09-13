import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState: "INITIAL",
    order: null,
    make_user: null,
}

export const orderActionTypes = {
    FETCHING: "FETCHING",
    FETCH_ORDER: "FETCH_ORDER",
    FETCH_MAKE_USER: !"FETCH_MAKE_USER",
    FETCH_SUCCESS: "SUCCESS",
}

export const orderReducer = (state, action) => {
    switch (action.type) {
        case orderActionTypes.FETCHING:
            return {
                fetchState: REQUEST_STATE.LOADING,
                order: state.order,
            }
        case orderActionTypes.FETCH_ORDER:
            return {
                fetchState: state.fetchState,
                order: action.payload.order,
                make_user: state.make_user,
            }
        case orderActionTypes.FETCH_MAKE_USER:
            return {
                fetchState: state.fetchState,
                order: state.order,
                make_user: action.payload.make_user,
            }
        case orderActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                order: state.order,
                make_user: state.make_user,
            }
        default:
            break;
    }
}
