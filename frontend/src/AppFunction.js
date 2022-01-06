import { VALUATION_ERROR } from "./constants";

//UTCをJSTに変換し、フォーマットする
export function changeJSTDate(date) {
  const newDate = new Date(date)

  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()

  const dayOfWeek = '日月火水木金土'.charAt(newDate.getDay());

  const hour = (`0` + (newDate.getHours())).slice(-2)
  const minute = (`0` + (newDate.getMinutes())).slice(-2)
  return `${year}/${month}/${day} (${dayOfWeek}) ${hour}:${minute}`;
}

//nameのバリデーション()
export function validateName(name) {
  if (name.length <= 0 || name.length > 30) {
    throw VALUATION_ERROR.NAME_VALUATION_ERROR
  }
}

//Emailの型になっているかを判定する
export function validateEmail(email) {
  const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{2,}.[A-Za-z0-9]{2,}$/;
  if (!(regexp.test(email))) {
    throw VALUATION_ERROR.EMAIL_REGEXP_ERROR
  }
}

//1つのパスワードのバリデーション(空白チェック、半角英数字文字数チェック)
export function validateSinglePassword(password) {
  if (password === "") {
    throw VALUATION_ERROR.ERROR_BLANK_PASSWORD_MESSAGE
  }
  const regexp = /^[A-Za-z0-9]{8,15}$/;
  if (!(regexp.test(password))) {
    throw VALUATION_ERROR.ERROR_VALUATION_MESSAGE
  }
}

//2つのパスワードのバリデーション(空白チェック、同一チェック、半角英数字文字数チェック)
export function validateDoublePassword(newPassword, confirmationPassword) {
  if (newPassword === "" || confirmationPassword === "") {
    throw VALUATION_ERROR.ERROR_BLANK_PASSWORD_MESSAGE
  }
  if (!(newPassword === confirmationPassword)) {
    throw VALUATION_ERROR.ERROR_UNMATCHPASSWORD_MESSAGE
  }
  const regexp = /^[A-Za-z0-9]{8,15}$/;
  if (!(regexp.test(newPassword))) {
    throw VALUATION_ERROR.ERROR_VALUATION_MESSAGE
  }
}
