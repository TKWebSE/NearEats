import axios from "axios";
import {
  sendEmailToChangeEmailAddressBackendURL,
  sendEmailToChangePasswordBackendURL,
} from "../urls/index";

export const sendEmailToChangeEmailAddressApi = (userId, newEmail) => {
  return axios.get(sendEmailToChangeEmailAddressBackendURL(user.id), {
    params: {
      userId: userId,
      newEmail: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}

export const sendEmailToChangePasswordApi = (userId, newEmail) => {
  return axios.get(sendEmailToChangePasswordBackendURL(user.id), {
    params: {
      userId: userId,
      newEmail: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}
