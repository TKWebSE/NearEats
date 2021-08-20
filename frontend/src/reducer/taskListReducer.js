import { REQUEST_STATE } from '../constants';

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    tasks: [],
}

export const tasksActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const taskListReducer = (state,action) => {
    switch (action.type) {
        case tasksActionTypes.FETCHING:
            return {
                ...state,
                fetchState:REQUEST_STATE.LOADING,
            };
        case tasksActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                tasks:action.payload.tasks,
            };  
        default:
            throw new Error();    
    }
}