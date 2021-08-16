import axios from 'axios';
import { 
    myTaskIndexBackendURL,
    orderIndexBackendURL,
    orderShowBackendURL,
    orderUpdateBackendURL,
    orderDeleteBackendURL
} from '../urls/index'

//ユーザーのtask一覧を取得する
export const fetchTaskIndexApi = (user_id) => {
    return axios.get(myTaskIndexBackendURL(user_id),{
      params:{
        user_id:user_id
      }
  })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch((e) => console.error(e))
}

//特定ののtaskを1件取得する
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