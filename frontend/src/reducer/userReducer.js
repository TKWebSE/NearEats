import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    user: {
        id: null,
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        address: "",
        city: "",
    },
    message: "",
}

export const userActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    SETTINGUSERNAME: "SETTINGUSERNAME",
    SETTINGUSEREMAIL: "SETTINGUSEREMAIL",
    SETTINGUSERPASSWORD: "SETTINGUSERPASSWORD",
    SETTINGUSERPASSWORDCONFIRMATION: "SETTINGUSERPASSWORDCONFIRMATION",
    SETTINGUSERADDRESS: "SETTINGUSERADDRESS",
    SETTINGUSERCITY: "SETTINGUSERCITY",
    SETTINGMESSAGE: "SETTINGMESSAGE",
}

export const userReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.FETCHING:
            return {
                ...state,
                fetchState: REQUEST_STATE.LOADING,
            }
        case userActionTypes.FETCH_SUCCESS:
            return {
                fetchState: REQUEST_STATE.OK,
                user: action.payload.value,
                message: state.message,
            }
        case userActionTypes.SETTINGUSERNAME:
            console.log(action)
            console.log(state)
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: action.payload.value,
                    address: state.user.address,
                    city: state.user.city,
                    email: state.user.email,
                    password: state.user.password,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGUSEREMAIL:
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: state.user.address,
                    city: state.user.city,
                    email: action.payload.value,
                    password: state.user.password,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGUSERPASSWORD:
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: state.user.address,
                    city: state.user.city,
                    email: state.user.email,
                    password: action.payload.value,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGUSERPASSWORDCONFIRMATION:
            console.log(action)
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: state.user.address,
                    city: state.user.city,
                    email: state.user.email,
                    password: state.user.password,
                    passwordConfirmation: action.payload.value,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGUSERADDRESS:
            console.log(action)
            console.log(state)
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: action.payload.value,
                    city: state.user.city,
                    email: state.user.email,
                    password: state.user.password,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGUSERCITY:
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: state.user.address,
                    city: action.payload.value,
                    email: state.user.email,
                    password: state.user.password,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: state.message,
            }
        case userActionTypes.SETTINGMESSAGE:
            return {
                fetchState: REQUEST_STATE.OK,
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    address: state.user.address,
                    city: state.user.city,
                    email: state.user.email,
                    password: state.user.password,
                    passwordConfirmation: state.user.passwordConfirmation,
                },
                message: action.payload.message,
            }
        default:
            throw new Error();
    }
}
