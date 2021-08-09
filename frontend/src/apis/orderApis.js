import axios from 'axios';
import { orderIndexBackendURL,
    orderShowBackendURL,
    orderUpdateBackendURL,
    orderDeleteBackendURL
} from '../urls/index'

//order一覧を取得する
export const orederIndexApi = () => {
    return axios.get(orderIndexBackendURL())
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}

//特定ののorderを1件取得する
export const fetchOrderApi = (order) => {
    return axios.get(orderShowBackendURL(order.id),{
        params:{
            order:order
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}

//特定ののorderを1件更新する
export const updateOrderApi = (order) => {
    return axios.put(orderUpdateBackendURL(order.id),{
        params:{
            order:order
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}

//特定ののtaskを1件削除する
export const deleteOrderApi = (order) => {
    return axios.delete(orderDeleteBackendURL(order.id),{
        params:{
            order:order
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}