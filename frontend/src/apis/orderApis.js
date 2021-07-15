import axios from 'axios';
import { orderIndexBackendURL,
    orderShowBackendURL,
    orderUpdateBackendURL,
    orderDeleteBackendURL
} from '../urls/index'

//order一覧を取得する
export const orederIndexApis = () => {
    return axios.get(orderIndexBackendURL())
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}
export const fetchOrderApis = (order) => {
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

export const updateOrderApis = (order) => {
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

export const deleteOrderApis = (order) => {
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