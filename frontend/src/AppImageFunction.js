import { BASE_URL } from "./urls/index";
import { VALUATION_ERROR } from "./constants";
import { SessionState, SessionDispatch, MessageState, MessageDispatch } from './context/Context';

//urlをバックエンドのものに成形する
export function changeImageURL(url) {
  let newUrl = url.substr(BASE_URL.length);
  // newUrl = newUrl.substr(0, newUrl.length - 4)
  console.log(BASE_URL + newUrl)
  return BASE_URL + newUrl
}

//Foodの画像データなどをForm形式に変換する
export const createFormData = (state, city, user_id) => {
  const formData = new FormData();
  console.log(city)
  if (state.food.image === null || state.food.image === undefined || state.food.image === "") {
    throw VALUATION_ERROR.NO_IMAGE_ERROR
  }
  if (state.food.name === null || state.food.name === undefined || state.food.name === "") {
    throw VALUATION_ERROR.NO_FOOD_NAME
  }
  if (state.food.price === null || state.food.price === undefined || state.food.price <= 0 || state.food.price > 100000) {
    throw VALUATION_ERROR.PRICE_ERROR
  }
  if (state.food.description === null || state.food.description === undefined || state.food.description <= 0) {
    throw VALUATION_ERROR.NO_DESCRIPTION_ERROR
  }
  if (state.food.description.length > 200) {
    throw VALUATION_ERROR.OVER_DESCRIPTION_ERROR
  }
  if (city === null || city === undefined) {
    throw VALUATION_ERROR.NO_CITY
  }
  formData.append('food[image]', state.food.image);
  formData.append('food[name]', state.food.name);
  formData.append('food[price]', state.food.price);
  formData.append('food[description]', state.food.description);
  formData.append('food[city]', city);
  formData.append('food[user_id]', user_id);
  return formData
}
