import { REQUEST_STATE } from '../constants';
// import { useReducer } from "react";


export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    tasksList: [],
    foods:[],
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
                tasksList:action.payload.tasks,
                foods:action.payload.foods,
            };  
        default:
            throw new Error();    
    }
}