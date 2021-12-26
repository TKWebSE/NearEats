import axios from "axios";
import {
  foodIndexFrontendURL,
  sendEmailToChangeEmailAddressBackendURL,
  updateEmailBackendURL,
  sendEmailToChangePasswordBackendURL,
  updatePasswordBackendURL,
  authChangePasswordURL,
  testPasswordBackendURL,
} from "../urls/index";

//email変更時の認証コードを送る
export const sendEmailToChangeEmailAddressApi = (userId, newEmail) => {
  return axios.get(sendEmailToChangeEmailAddressBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      new_email: newEmail,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch(e => console.log(e))
}

//パスワード変更時の認証コードを送る
export const sendEmailToChangePasswordApi = (userId, newPassword) => {
  return axios.get(sendEmailToChangePasswordBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      new_password: newPassword,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}

//emailを更新する
export const updateEmailApi = (userId, confirmationCode) => {
  return axios.put(updateEmailBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      confirmation_code: confirmationCode,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}

//passwordを更新する
export const updatePasswordApi = (userId, confirmationCode) => {
  return axios.put(updatePasswordBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
      confirmation_code: confirmationCode,
    }
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}
