import { REQUEST_STATE } from "../constants";

export const initializeNotifications = {
  fetchState: "INITIAL",
  notifications: null,
}

export const notificationsActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "SUCCESS"
}

export const notificationsReducer = (state, action) => {
  switch (action.type) {
    case notificationsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      }
    case notificationsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        notifications: action.payload.notifications,
      }
    default:
      break;
  }
}
