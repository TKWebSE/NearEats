import { REQUEST_STATE } from "../constants";

export const initializeState =  {
    fetchSessionState:REQUEST_STATE.INITIAL,
    currentUser:[],
    isLogin:false,
    message:"",
}

export const sessionActionTypes = {
    FETCHING:"FETCHING",
    SIGNIN:"SIGNIN",
    SIGNOUT:"SIGNOUT",
    ISLOGIN:"ISLOGIN",
    SETTINGMESSAGE:"SETTINGMESSAGE",
}

export const sessionReducer = (state,action) => {
    switch (action.type) {
        case sessionActionTypes.FETCHING:
            return {
                fetchSessionState:REQUEST_STATE.LOADING,
                currentUser:state.currentUser,
                isLogin:state.isLogin,
                message:state.message,
            }
        case sessionActionTypes.SIGNIN:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:action.payload.currentUser,
                isLogin:true,
                message:state.message,
            }
        case  sessionActionTypes.SIGNOUT:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:null,
                isLogin:false,
                message:state.message,
            }
        case sessionActionTypes.ISLOGIN:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:action.payload.data.user,
                isLogin:action.payload.data.is_login,
                message:state.message,
            }
        case sessionActionTypes.SETTINGMESSAGE:
            return {
                fetchSessionState:REQUEST_STATE.OK,
                currentUser:state.currentUser,
                isLogin:state.is_login,
                message:action.payload.message,
            }

        default:
            break;
    }
}