import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:"INITIAL",
    task:null,
}

export const taskActionTypes = {
    FETCHING:"FETCHING",
    FETCH_SUCESS:"SUCCESS",
}

export const taskReducer =  (state,action) => {
    switch (action.type) {
        case taskActionTypes.FETCHING:
            return {
                fetchState:REQUEST_STATE.LOADING,
                task:state.tasak,
            }
        case  taskActionTypes.FETCH_SUCCESS:
            return {
                fetchState:REQUEST_STATE.OK,
                task: action.payload.task,
            }
        default:
            break;
    }
}
