export const BASE_URL = "http://localhost:3000";
const API_V1 = "/api/v1"
const AUTH = "/auth"

const FRONTEND_DEFAULT_URL = `http://localhost:3001`;
const BACKEND_DEFAULT_URL = `http://localhost:3000${API_V1}`;
const AUTH_URL = `${BASE_URL}${API_V1}${AUTH}`;

export const publicImageURL = "/"

//HomeのURL
export const homeURL = "/home";

//userのURL
export const userShowURL = (userId) => `/users/${userId}`;
export const userCreateURL = `/users/create`;
export const userEditURL = (userId) => `/users/${userId}/edit`;
export const userEmailEditURL = `/editEmail`;
export const userPasswordEditURL = `/editPassword`;

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

//foodのfrontendURL
export const foodIndexFrontendURL = `${BACKEND_DEFAULT_URL}${foodsIndexURL}`;

//foodのBackendURL
export const foodsIndexBackendURL = `${BACKEND_DEFAULT_URL}${foodsIndexURL}`;
export const MyfoodsIndexBackendURL = (user_id) => `${BACKEND_DEFAULT_URL}/foods/${user_id}${myFoodsURL}`;
export const foodCreateBackendURL = `${BACKEND_DEFAULT_URL}/foods`;
export const foodShowBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}${foodShowURL(foodId)}`;
export const foodUpdateBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}${foodUpdateURL(foodId)}`
export const foodDeleteBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}/${foodId}/foods`;
export const foodBuyBackendURL = (foodId) => `${BACKEND_DEFAULT_URL}/foods/${foodId}/buyfood`;

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
export const orderCancelBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}/orders/${orderId}`;
export const orderDeleteBackendURL = () => `${BACKEND_DEFAULT_URL}/orders/delete`;
export const orderUpdateValuationBackendURL = (orderId) => `${BACKEND_DEFAULT_URL}/orders/${orderId}/updateValuation`;

//point関連のURL
export const buyPointURL = `/point`;
export const buyPointfrontendURL = `${FRONTEND_DEFAULT_URL}/point`;

export const stripeProductionIndexBackendURL = `${BACKEND_DEFAULT_URL}/productIndex`;
export const stripeCheckoutBackendURL = `${BACKEND_DEFAULT_URL}/checkout`;
export const checkoutSuccessURL = `${BACKEND_DEFAULT_URL}/checkoutSuccess`;
export const checkoutCancelURL = `${BACKEND_DEFAULT_URL}/checkoutCancel`;

//setting関連のURL
export const settingURL = `/setting`;

//session関連のURL
export const signInURL = `/signin`;

//session関連のBackendURL
export const signUpBackendURL = `${AUTH_URL}`;
export const signInBackendURL = `${AUTH_URL}/sign_in`;
export const signOutBackendURL = `${AUTH_URL}/sign_out`;
export const sessionIsLoginBackendURL = `${AUTH_URL}/sessions`;

//email送信関連のURL
export const editEmailURL = `/editEmail`;
export const editPasswordURL = `/editPassword`;
export const authChangeEmailURL = `/updateEmail`;
export const authChangePasswordURL = `/updatePassword`;
export const passwordResetSendEmailURL = `/passwordResetSendEmail`;
export const passwordResetAuthURL = `/passwordResetAuth`;
export const authChangePasswordFullURL = `${FRONTEND_DEFAULT_URL}${authChangePasswordURL}`;
export const passwordResetAuthURLFullURL = `${FRONTEND_DEFAULT_URL}${passwordResetAuthURL}`;

//email送信関連のBackendURL
export const sendEmailToChangeEmailAddressBackendURL = (userId) => `${BACKEND_DEFAULT_URL}/users/${userId}/sendAuthCodeChangeEmail`;
export const updateEmailBackendURL = (userId) => `${BACKEND_DEFAULT_URL}/users/${userId}/updateEmail`;
export const PasswordAuthBackendURL = `${AUTH_URL}/password`;
export const updatePasswordBackendURL = `${AUTH_URL}/password`;

