import axios from 'axios';
import { orderIndex,orderShow,orderUpdate,orderDelete} from '../urls/index'

//order一覧を取得する
export const orederIndexApis = () => {
    return axios.get(orderIndex)
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}
export const fetchOrderApis = (order) => {
    return axios.get(orderShow(order.id),{
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
    return axios.put(orderUpdate(order.id),{
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
    return axios.delete(orderDelete(order.id),{
        params:{
            order:order
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}