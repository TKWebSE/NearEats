import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchSessionState: REQUEST_STATE.INITIAL,
    currentUser: [],
    isLogin: false,
    nowLocation: null,
    searchWord: null,
    notification: 0,
    orders: [],
    tasks: [],
    message: "",
}

export const sessionActionTypes = {
    FETCHING: "FETCHING",
    SIGNIN: "SIGNIN",
    SIGNOUT: "SIGNOUT",
    ISLOGIN: "ISLOGIN",
    SETNOWLOCATION: "SETNOWLOCATION",
    SETTINGSEARCHWORD: "SETTINGSEARCHWORD",
    SETTINGNOTIFICATION: "SETTINGNOTIFICATION",
    SETTINGMESSAGE: "SETTINGMESSAGE",
    TRUE_LOGIN: "TRUE_LOGIN",
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
                notification: state.notification,
                orders: state.orders,
                tasks: state.tasks,
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
                notification: state.notification,
                orders: state.orders,
                tasks: state.tasks,
                message: state.message,
            }
        case sessionActionTypes.SIGNOUT:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: null,
                isLogin: false,
                nowLocation: null,
                searchWord: null,
                notification: state.notification,
                orders: [],
                tasks: [],
                message: state.message,
            }
        case sessionActionTypes.ISLOGIN:
            let notification = 0
            if (action.payload.data !== null && action.payload.data !== undefined &&
                action.payload.data.tasks !== null && action.payload.data.tasks !== undefined) {
                notification = action.payload.data.tasks + action.payload.data.orders
            }
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: action.payload.data.user,
                isLogin: action.payload.data.is_login,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                notification: notification,
                orders: action.payload.data.orders,
                tasks: action.payload.data.tasks,
                message: state.message,
            }
        case sessionActionTypes.SETNOWLOCATION:
            return {
                fetchSessionState: state.fetchSessionState,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: action.payload.nowLocation,
                searchWord: state.searchWord,
                notification: state.notification,
                orders: state.orders,
                tasks: state.tasks,
                message: state.message,
            }
        case sessionActionTypes.SETTINGSEARCHWORD:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: state.nowLocation,
                searchWord: action.payload.searchWord,
                notification: state.notification,
                orders: state.orders,
                tasks: state.tasks,
                message: state.message,
            }
        case sessionActionTypes.SETTINGNOTIFICATION:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                notification: action.payload.notification,
                orders: state.orders,
                tasks: state.tasks,
                message: state.message,
            }
        case sessionActionTypes.SETTINGMESSAGE:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser: state.currentUser,
                isLogin: state.is_login,
                nowLocation: state.nowLocation,
                searchWord: state.searchWord,
                notification: state.notification,
                orders: state.orders,
                tasks: state.tasks,
                message: action.payload.message,
            }
        case sessionActionTypes.TRUE_LOGIN:
            return {
                fetchSessionState: REQUEST_STATE.OK,
                currentUser:
                {
                    id: 1, provider: "email", uid: "email0@yahoo.co.jp", allow_password_change: false, confirmation_password_sent_at: null, confirmation_email_code: null, confirmation_email_sent_at: null, name: "testユーザー_0", city: "東京都渋谷区", address: "0県0町の1-2-3", image: null, email: "email0@yahoo.co.jp", point: 100, valuation: 3, stripe_customer_id: "cus_L4PnH4PzhSqvXM", deleted: "f", created_at: "2023-01-25 05:35:54", updated_at: "2023-01-25 05:35:54"
                },
                isLogin: true,
                nowLocation: "東京都渋谷区",
                searchWord: "",
                notification: 0,
                orders: [],
                tasks: [],
                message: "",
            }
        default:
            break;
    }
}
