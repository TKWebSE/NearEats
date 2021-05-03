import axios from "axios";
import { foodsIndex ,foodShow,foodEdit } from "../urls";

//food一覧を取得する
export const fetchFoodsIndexApi = () => {
    return axios.get(foodsIndex)
    .then(res =>{
        return res.data
    }
    )
    .catch(e=> console.log(e))
}
//特定のfoodを取得する
export const fetchFoodDetailApi = (restaurant_id,food_id) => {
    return axios.get(foodShow(food_id),{
    params: {
        foodId:food_id,
        restaurantId:restaurant_id,
    }
    })
    .then((res)=>{
        console.log(res)
        return res.data
    }
    )
    .catch(e => console.log(e));
}
//foodwosyutokusi,
export const editfoodApi =　(food_id) => {
    return axios.get(foodEdit(food_id),{
        params:{
            foodId:food_id,
        }
    })
    .then((res) => {
        return res.data
    }
    )
    .catch(e => console.log(e));
}