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
// export const sendEmailToChangePasswordApi = (userId) => {
//   return axios.get(sendEmailToChangePasswordBackendURL(userId), {
//     params: {
//       user_id: userId,
//       url: foodIndexFrontendURL,
//     }
//   })
//     .then((res) => {
//       return res.data
//     })
//     .catch((e) => {
//       throw e
//     })
// }

//実験用
export const sendEmailToChangePasswordApi = (userId, confirmationCode) => {
  return axios.post(PasswordAuthBackendURL, {
    email: "natumesouseki01@yahoo.co.jp",
    redirect_url: "http://localhost:3001/updatePassword",
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

// passwordのconfirmationCodeを確認する
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
export const updatePasswordApi = (password, passwordConfirmation) => {
  //reset_password_tokenがいる？しかし、reset_password_tokenをparamsから取る方法？
  return axios.put(updatePasswordBackendURL, {
    password: password,
    password_confirmation: passwordConfirmation,
    reset_password_token: "c_TDRzhHIL_fv3NFHQ89pw"
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
      throw e
    })
}
