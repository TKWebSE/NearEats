import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

//restaurant一覧を取得する
export const fetchRestaurants = () => {
    return axios.get(restaurantsIndex)
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}