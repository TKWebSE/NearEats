const DEFAULT_URL = 'http://localhost:3000/api/v1'
const API_V1 = "${DEFAULT_URL}/API/V1" 

//foodのURL
export const foodsIndex = `${DEFAULT_URL}/foods`;
export const foodShow = (foodId) => `${DEFAULT_URL}/foods/${foodId}`;
export const foodCreate = `${DEFAULT_URL}/foods`;
export const foodUpdate = (foodId) => `${DEFAULT_URL}/foods/${foodId}`
export const foodDelete = (foodId) => `${DEFAULT_URL}/${foodId}/foods`;
export const foodUpdateHistory = (foodId) => `/foods/${foodId}/edit`;
export const foodShowHistory = (foodId) => `/foods/${foodId}`;

//userのURL
export const userShow = (userId) => `${DEFAULT_URL}/users/${userId}`;
export const userCreate = () => `${DEFAULT_URL}/users/create`;
export const userEdit = (userId) => `${DEFAULT_URL}/users/${userId}/edit`;
export const userUpdate = (userId) => `${DEFAULT_URL}/users/${userId}`;
export const userDelete = (userId) => `${DEFAULT_URL}/users/${userId}/delete`;
export const userDetailHistory = (userId) => `/users/${userId}`;
export const userEditHistory = (userId) => `/users/${userId}/edit`;

//orderのURL
export const orderIndex = () => `${DEFAULT_URL}/orders/`;
export const orderShow = (orderId) => `${DEFAULT_URL}/orders/${orderId}`;
export const orderCreate =() =>  `${DEFAULT_URL}/orders/create`;
export const orderEdit =() => `${DEFAULT_URL}/orders/edit`;
export const orderUpdate = () => `${DEFAULT_URL}/orders/update`;
export const orderDelete = () =>  `${DEFAULT_URL}/orders/delete`;
export const orderDetailHistory = (orderId) => `/orders/${orderId}`;
export const orderEditHistory = (orderId) => `/orders/${orderId}/edot`;