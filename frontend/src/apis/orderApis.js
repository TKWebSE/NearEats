import axios from 'axios';
import { orederIndex,orederShow} from '../urls/index'

//order一覧を取得する
export const orederIndexApis = () => {
    return axios.get(orederIndex)
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}
export const fetchOrderApis = (user) => {
    return axios.get(orederShow(user.id),{
        params:{
            user:user
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}

export const updateOrderApis = (user) => {
    return axios.put(orderUpdate(user.id),{
        params:{
            user:user
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}

export const deleteOrderApis = (user) => {
    return axios.delete(orderDelete(food.id),{
        params:{
            user:user
        }
    })
    .then(res => {
        return res.data
    })
    .catch(e => console.log(e))
}