import axios from "axios";
import { foodsIndex } from "../urls";

//food一覧を取得する
export const fetchFoods = () => {
    return axios.get(foodsIndex)
    .then(res =>{
        return res.data
    }
    )
    .catch(e=> console.log(e))
}