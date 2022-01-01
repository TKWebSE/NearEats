import axios from "axios";
import {
  foodIndexFrontendURL,
  sendEmailToChangeEmailAddressBackendURL,
  updateEmailBackendURL,
  sendEmailToChangePasswordBackendURL,
  checkPasswordConfirmationCodeBackendURL,
  updatePasswordBackendURL,
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
export const sendEmailToChangePasswordApi = (userId) => {
  return axios.get(sendEmailToChangePasswordBackendURL(userId), {
    params: {
      user_id: userId,
      url: foodIndexFrontendURL,
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

//passwordのconfirmationCodeを確認する
export const checkPasswordConfirmationCodeApi = (userId, confirmationCode) => {
  return axios.put(checkPasswordConfirmationCodeBackendURL(userId), {
    params: {
      user_id: userId,
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
export const updatePasswordApi = (password) => {
  return axios.put(updatePasswordBackendURL, {
    password: password,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}
