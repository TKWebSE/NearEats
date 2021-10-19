import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchSessionState: REQUEST_STATE.INITIAL,
    currentUser: [],
    isLogin: false,
    nowLocation: null,
    searchWord: null,
    message: "",
}

export const sessionActionTypes = {
    FETCHING: "FETCHING",
    SIGNIN: "SIGNIN",
    SIGNOUT: "SIGNOUT",
    ISLOGIN: "ISLOGIN",
    SETNOWLOCATION: "SETNOWLOCATION",
    SETTINGSEARCHWORD: "SETTINGSEARCHWORD",
    SETTINGMESSAGE: "SETTINGMESSAGE",
}

export const sessionReducer = (state, action) => {
    switch (action.type) {
        case sessionActionTypes.FETCHING:
            return {
                fetchSessionState: REQUEST_STATE.LOADING,
                currentUser: state.currentUser,
                isLogin: state.isLogin,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                message: state.message,
            }
        case sessionActionTypes.SIGNIN:
            console.log(action)
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: action.payload.data.data,
                isLogin: true,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                message: state.message,
            }
        case sessionActionTypes.SIGNOUT:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: null,
                isLogin: false,
                nowLocation: null,
                searchWord: null,
                message: state.message,
            }
        case sessionActionTypes.ISLOGIN:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: action.payload.data.user,
                isLogin: action.payload.data.is_login,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                message: state.message,
            }
        case sessionActionTypes.SETNOWLOCATION:
            return {
                fetchSessionState: state.fetchSessionState,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: action.payload.nowLocation,
                searchWord: state.searchWord,
                message: state.message,
            }
        case sessionActionTypes.SETTINGSEARCHWORD:
            console.log(action.payload.searchWord)
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: state.nowLocation,
                searchWord: action.payload.searchWord,
                message: state.message,
            }
        case sessionActionTypes.SETTINGMESSAGE:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                message: action.payload.message,
            }
        default:
            break;
    }
}
