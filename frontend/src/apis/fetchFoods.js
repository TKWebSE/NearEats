import axios from `axios`
import { foodsIndex } from "../urls"

export const fetchFoods = () => {
    return axios.get(foodsIndex)
    .then(res =>{
        return res.data
    }
    )
    .catch(e=> console.log(e))
}