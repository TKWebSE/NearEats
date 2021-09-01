import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:"INITIAL",
    task:null,
    order_user:null,
}

export const taskActionTypes = {
    FETCHING:"FETCHING",
    FETCH_TASK:"FETCH_TASK",
    FETCH_ORDER_USER:"FETCH_ORDER_USER",
    FETCH_SUCCESS:"SUCCESS",
}

export const taskReducer =  (state,action) => {
    switch (action.type) {
        case taskActionTypes.FETCHING:
            return {
                fetchState:REQUEST_STATE.LOADING,
                task:state.tasak,
                order_user:state.order_user,
            }
        case  taskActionTypes.FETCH_TASK:
            return {
                fetchState:state.fetchState,
                task: action.payload.task,
                order_user:state.order_user,
            }
        case  taskActionTypes.FETCH_ORDER_USER:
            return {
                fetchState:state.fetchState,
                task: state.task,
                order_user:action.payload.order_user,
            }
        case  taskActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                task: state.task,
                order_user:state.order_user,
            }
        default:
            break;
    }
}
