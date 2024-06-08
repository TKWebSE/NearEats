import { REQUEST_STATE } from "../constants";
import { MaintenanceNotice } from "../component/notificationComponent/MaintenanceNotice";
import { UpdateComplete } from "../component/notificationComponent/UpdateComplete";

export const initializeNotification = {
  fetchState: "INITIAL",
  notification: null,
}

//ここでnotificationIdを使って、任意のstateに変更しておく
export const notificationActionTypes = {
  FETCHING: "FETCHING",
  MAINTENANCENOTICE: "MAINTENANCENOTICE",
  UPDATECOMPLETE: "UPDATECOMPLETE",
}

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case notificationActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        notification: null,
      }
    case notificationActionTypes.MAINTENANCENOTICE:
      return {
        fetchState: REQUEST_STATE.OK,
        notification: <MaintenanceNotice />,
      }
    case notificationActionTypes.UPDATECOMPLETE:
      return {
        fetchState: REQUEST_STATE.OK,
        notification: <UpdateComplete />,
      }
    default:
      break;
  }
}
