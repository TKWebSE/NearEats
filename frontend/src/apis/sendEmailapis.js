import axios from "axios";
import {
  foodIndexFrontendURL,
  sendEmailToChangeEmailAddressBackendURL,
  updateEmailBackendURL,
  sendEmailToChangePasswordBackendURL,
  checkPasswordConfirmationCodeBackendURL,
  updatePasswordBackendURL,
  PasswordAuthBackendURL,
} from "../urls/index";
import { HTTP_STATUS_CODE, PASSWORD_RESET_SEND_EMAIL_TEXT } from "../constants";
import { CatchingPokemonSharp } from "@mui/icons-material";
import Cookies from "js-cookie";

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
    .catch((e) => {
      if (e.response.status === HTTP_STATUS_CODE.UN_AUTHORIZED) {
        throw PASSWORD_RESET_SEND_EMAIL_TEXT.ERROR_ANOTHER_EMAIL_MESSAGE
      } else {
        throw PASSWORD_RESET_SEND_EMAIL_TEXT.ERROR_SEND_EMAIL_MESSAGE
      }
    }
    )
}

//パスワードリセットのメールを送信する
export const sendEmailToChangePasswordApi = (email, redirectUrl) => {
  return axios.post(PasswordAuthBackendURL, {
    email: email,
    redirect_url: redirectUrl,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      if (e.response.status === HTTP_STATUS_CODE.NOT_FOUND) {
        throw PASSWORD_RESET_SEND_EMAIL_TEXT.ERROR_SEND_EMAIL_MESSAGE
      } else {
        throw e;
      }
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
      Cookies.set("uid", res.data.user.email)
      return res.data
    })
    .catch((e) => {
      throw e
    })
}

//passwordを更新する
export const updatePasswordApi = (password, passwordConfirmation, resetPasswordToken) => {
  return axios.put(updatePasswordBackendURL, {
    password: password,
    password_confirmation: passwordConfirmation,
    reset_password_token: resetPasswordToken,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
      throw e
    })
}
