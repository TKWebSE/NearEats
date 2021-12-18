import { REQUEST_STATE } from "../constants";

export const initializeMessage = {
  fetchState: "INITIAL",
  message: "",
  errorMessage: "",
}

export const messageActionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
  SET_ERROR_MESSAGE: "SET_ERROR_MESSAGE",
  DELETE_ALL_MESSAGE: "DELETE_MESSAGE",
}

export const messageReducer = (state, action) => {
  switch (action.type) {
    case messageActionTypes.SET_MESSAGE:
      return {
        message: action.payload.message,
        errorMessage: "",
      }
    case messageActionTypes.SET_ERROR_MESSAGE:
      return {
        message: "",
        errorMessage: action.payload.errorMessage,
      }
    case messageActionTypes.DELETE_ALL_MESSAGE:
      return {
        message: "",
        errorMessage: "",
      }
    default:
      break;
  }
}
