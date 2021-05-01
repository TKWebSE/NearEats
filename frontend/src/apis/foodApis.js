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

export const fetchFoodDetail = (food_id) => {
    console.log(food_id)
    return axios.get(foodShow(food_id))
    .then((res)=>{
        console.log(res)
        return res.data
    }
    )
    .catch(e => console.log(e));
}