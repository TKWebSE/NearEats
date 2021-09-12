const BASE_URL = "http://localhost:3000";
const API_V1 = "/api/v1"
const AUTH = "/auth"

const BACKEND_DEFAULT_URL = `http://localhost:3000${API_V1}`;
const AUTH_URL = `${BASE_URL}${API_V1}${AUTH}`;

//HomeのURL
export const homeURL = "/home";

//userのURL
export const userShowURL = (userId) => `/users/${userId}`;
export const userCreateURL = `/users/create`;
export const userEditURL = (userId) => `/users/${userId}/edit`;

//userのBackendURL
export const userShowBackendURL = (userId) => `${BACKEND_DEFAULT_URL}${userShowURL(userId)}`;
export const userCreateBackendURL = () => `${AUTH_URL}${userCreateURL}`;
export const userEditBackendURL = (userId) => `${BACKEND_DEFAULT_URL}${userEditURL(userId)}`;
export const userUpdateBackendURL = (userId) => `${BACKEND_DEFAULT_URL}/users/${userId}`;
export const userDeleteBackendURL = (userId) => `${BACKEND_DEFAULT_URL}/users/${userId}/delete`;

//foodのURL
export const foodsIndexURL = `/foods`;
export const myFoodsURL = `/myfoods`;
export const foodCreateURL = `/foods/create`;
export const foodShowURL = (foodId) => `/foods/${foodId}`;
export const foodEditURL = (foodId) => `/foods/${foodId}/edit`;
export const foodUpdateURL = (foodId) => `/foods/${foodId}`;

//foodのBackendURL
export const foodsIndexBackendURL = `${BACKEND_DEFAULT_URL}${foodsIndexURL}`;
export const MyfoodsIndexBackendURL = (user_id) => `${BACKEND_DEFAULT_URL}/foods/${user_id}${myFoodsURL}`;
export const foodCreateBackendURL = `${BACKEND_DEFAULT_URL}/foods`;
export const foodShowBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}${foodShowURL(foodId)}`;
export const foodUpdateBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}${foodUpdateURL(foodId)}`
export const foodDeleteBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}/${foodId}/foods`;

//orderのURL
export const myTaskIndexURL = `/taskIndex`;
export const myTaskShowURL = (orderId) => `/myTask/${orderId}`;
export const ordersIndexURL = `/orders`;
export const orderShowURL = (orderId) => `/orders/${orderId}`;
export const orderEditURL = (orderId) => `/orders/${orderId}/edot`;

//orderのBackendURL
export const myTaskIndexBackendURL = (userId) => `${BACKEND_DEFAULT_URL}/orders/${userId}${myTaskIndexURL}`;
export const myTaskShowBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}${orderShowURL(orderId)}/taskShow`;
export const myTaskUpdateBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}${orderShowURL(orderId)}/taskUpdate`;
export const orderIndexBackendURL = () => `${BACKEND_DEFAULT_URL}/orders`;
export const orderShowBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}${orderShowURL(orderId)}`;
export const orderCreateBackendURL = () => `${BACKEND_DEFAULT_URL}/orders/create`;
export const orderEditBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}${orderEditURL(orderId)}`;
export const orderUpdateBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}/orders/${orderId}/update`;
export const orderDeleteBackendURL = () => `${BACKEND_DEFAULT_URL}/orders/delete`;

//session関連のURL
export const signInURL = `/signin`;

//session関連のBackendURL
export const signUpBackendURL = `${AUTH_URL}`;
export const signInBackendURL = `${AUTH_URL}/sign_in`;
export const signOutBackendURL = `${AUTH_URL}/sign_out`;
export const sessionIsLoginBackendURL = `${AUTH_URL}/sessions`;
