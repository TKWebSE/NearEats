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

//Emailの型になっているかを判定する
export function validateEmail(email) {
  const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{2,}.[A-Za-z0-9]{2,}$/;
  if (!(regexp.test(email))) {
    throw VALUATION_ERROR.EMAIL_REGEXP_ERROR
  }
}
