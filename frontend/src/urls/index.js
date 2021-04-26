const DEFAULT_URL = 'http://localhost:3000/api/v1'
const API_V1 = "${DEFAULT_URL}/API/V1"
export const restaurantsIndex = `${DEFAULT_URL}/restaurants`
export const restaurantsCreate = (restaurants_id) => "${DEFAULT_URL}/restaurants/create"
export const restaurantsDelete = (restaurants_id) => "${DEFAULT_URL}/restaurants/delete"
export const foodsIndex = "/foods"
export const foodsCreate = (food_id) => "${DEFAULT_URL}/restaurants/${food_id}/foods"
export const foodsDelete = (food_id) => "${DEFAULT_URL}/${food_id}/foods"
