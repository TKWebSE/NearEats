import axios from "axios";
import Cookies from "js-cookie";
import {
  notificationsBackendURL,
  notificationBackendURL,
} from "../urls/index";

//notificationを取得する
export const fetchNotificationsApi = (id) => {
  return axios.post(notificationsBackendURL(id), {
    params: {
      notifications: notifications,
    }
  })
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}


//特定のnotificationを1件取得する
export const fetchNotificationApi = (id, notificationId) => {
  return axios.post(notificationBackendURL(id, notificationId), {
    params: {
      title: title,
      text: text,
    }
  })
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}
