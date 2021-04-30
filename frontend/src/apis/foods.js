import axios from "axios";
import { foodsIndex ,foodShow } from "../urls";

//food一覧を取得する
export const fetchFoods = () => {
    return axios.get(foodsIndex)
    .then(res =>{
        return res.data
    }
    )
    .catch(e=> console.log(e))
}

export const foodDetails = (food_id) => {
    return axios.get(foodShow(food_id))
    .then((res)=>{
        return res.data
    }
    )
    .catch(e => console.log(e));
}