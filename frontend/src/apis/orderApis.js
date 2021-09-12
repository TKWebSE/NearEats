import axios from 'axios';
import {
    orderIndexBackendURL,
    orderShowBackendURL,
    orderUpdateBackendURL,
    orderDeleteBackendURL
} from '../urls/index'

//order一覧を取得する
export const fetchOrederIndexApi = (currentUser_id) => {
    return axios.get(orderIndexBackendURL(), {
        params: {
            user_id: currentUser_id
        }
    })
        .then(res => {
            return res.data
        })
        .catch((e) => console.error(e))
}

//特定ののorderを1件取得する
export const fetchOrderApi = (orderId) => {
    return axios.get(orderShowBackendURL(orderId), {
        params: {
            order_id: orderId
        }
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}

//特定ののorderを1件更新する
export const updateOrderApi = (order) => {
    return axios.put(orderUpdateBackendURL(order.id), {
        params: {
            order: order
        }
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}

//特定ののtaskを1件削除する
export const deleteOrderApi = (order) => {
    return axios.delete(orderDeleteBackendURL(order.id), {
        params: {
            order: order
        }
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}
