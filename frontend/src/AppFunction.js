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

//Userのnameバリデーション
export function validateName(name) {
  if (name.length <= 0) {
    throw VALUATION_ERROR.NAME_VALUATION_ERROR
  }
  if (name.length > 30) {
    throw VALUATION_ERROR.NAME_MAX_ERROR
  }
}

// Userの住所のバリデーション
export function validateUserAddress(address) {
  if (address.length <= 0) {
    throw VALUATION_ERROR.USER_ADDRESS_BLANK_ERROR
  }
  // マイナンバーの住所最大桁数
  if (address.length > 44) {
    throw VALUATION_ERROR.USER_ADDRESS_MAX_ERROR
  }
}

// Userの配達地域のバリデーション
export function validateUserLocation(city) {
  if (city.length == "") {
    throw VALUATION_ERROR.USER_CITY_BLANK_ERROR
  }
}

//Emailの型になっているかを判定する
export function validateEmail(email) {
  const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{2,}.[A-Za-z0-9]{2,}$/;
  if (!(regexp.test(email))) {
    throw VALUATION_ERROR.EMAIL_REGEXP_ERROR
  }
}

// 1つのパスワードのブランクチェック
export function blankCheckPassword(password) {
  if (password === "") {
    throw VALUATION_ERROR.ERROR_BLANK_PASSWORD_MESSAGE
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

// Foodの名前用のバリデーション
export function validateFoodName(foodName) {
  if (foodName === "" || foodName === undefined || foodName === null || foodName.length <= 0) {
    throw VALUATION_ERROR.ERROR_BLANK_FOOD_NAME_MESSAGE
  }
  if (foodName.length > 30) {
    throw VALUATION_ERROR.ERROR_REGEXP_FOOD_NAME_MESSAGE
  }
}

// Foodの価格用のバリデーション
export function validatePrice(price) {
  if (price === "" || price === undefined || price === null || price === 0) {
    throw VALUATION_ERROR.ERROR_BLANK_FOOD_PRICE_MESSAGE
  }
  if (price < 300 || price > 999999) {
    throw VALUATION_ERROR.ERROR_LIMIT_PRICE_MESSAGE
  }
  const regexp = /^[0-9]{1,6}$/;
  if (!(regexp.test(price))) {
    throw VALUATION_ERROR.ERROR_REGEXP_PRICE_MESSAGE
  }
}

// Foodの説明文用のバリデーション
export function validateDescription(description) {
  if (description === "" || description === undefined || description === null) {
    throw VALUATION_ERROR.ERROR_BLANK_FOOD_DESCRIPTION_MESSAGE
  }
  if (description.length < 0 || description.length > 200) {
    throw VALUATION_ERROR.ERROR_LENGTH_LIMIT_DESCRIPTION_MESSAGE
  }
}
