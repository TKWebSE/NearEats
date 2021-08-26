import axios from 'axios';
import { 
    myTaskIndexBackendURL,
    myTaskShowBackendURL,
    myTaskUpdateBackendURL,
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
        return res.data
    })
    .catch((e) => console.error(e))
}
//特定のtaskを1件取得する
export const fetchTaskApi = (order_id) => {
    return axios.get(myTaskShowBackendURL(order_id),{
        params:{
            order_id:order_id
        }
    })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(e => console.log(e))
}

//特定ののorderを1件取得する
export const createTaskApi = (order) => {
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
export const updateTaskApi = (task) => {
    return axios.put(myTaskUpdateBackendURL(task.id),{
        params:{
            id:task.id,
            order_status:task.order_status,
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