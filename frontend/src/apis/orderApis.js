import axios from 'axios';
import {
    orderIndexBackendURL,
    orderShowBackendURL,
    orderDeleteBackendURL,
    orderUpdateValuationBackendURL,
    orderCancelBackendURL,
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

//特定のorderをキャンセルする
export const updateCancelOrderApi = (order, valuation) => {
    return axios.put(orderCancelBackendURL(order.id), {
        order_id: order.id,
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}

//特定のtaskを1件削除する
export const deleteOrderApi = (order, order_status) => {
    return axios.delete(orderDeleteBackendURL(order.id), {
        params: {
            order: order,
            order_status: order_status,
        }
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}

//特定のuserを評価し、orderを完了にする
export const updateValuationOrderApi = (order, valuation) => {
    return axios.put(orderUpdateValuationBackendURL(order.id), {
        order_id: order.id,
        valuation: valuation,
    })
        .then(res => {
            return res.data
        })
        .catch(e => console.log(e))
}
