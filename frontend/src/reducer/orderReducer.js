import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState: "INITIAL",
    order: null,
    food: null,
    make_user: null,
    valuation: 3,
}

export const orderActionTypes = {
    FETCHING: "FETCHING",
    FETCH_ORDER: "FETCH_ORDER",
    FETCH_FOOD: "FETCH_FOOD",
    FETCH_MAKE_USER: "FETCH_MAKE_USER",
    FETCH_SUCCESS: "SUCCESS",
    UPDATE_VALUATION: "UPDATE_VALUATION",
}

export const orderReducer = (state, action) => {
    switch (action.type) {
        case orderActionTypes.FETCHING:
            return {
                fetchState: REQUEST_STATE.LOADING,
                order: state.order,
                food: state.food,
                make_user: state.make_user,
                valuation: state.valuation,
            }
        case orderActionTypes.FETCH_ORDER:
            return {
                fetchState: state.fetchState,
                order: action.payload.order,
                food: state.food,
                make_user: state.make_user,
                valuation: state.valuation,
            }
        case orderActionTypes.FETCH_FOOD:
            return {
                fetchState: state.fetchState,
                order: state.order,
                food: action.payload.food,
                make_user: state.make_user,
                valuation: state.valuation,
            }
        case orderActionTypes.FETCH_MAKE_USER:
            return {
                fetchState: state.fetchState,
                order: state.order,
                food: state.food,
                make_user: action.payload.make_user,
                valuation: state.valuation,
            }
        case orderActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                order: state.order,
                food: state.food,
                make_user: state.make_user,
                valuation: state.valuation,
            }
        case orderActionTypes.UPDATE_VALUATION:
            return {
                fetchState: state.fetchState,
                order: state.order,
                food: state.food,
                make_user: state.make_user,
                valuation: action.payload.valuation,
            }
        default:
            break;
    }
}
