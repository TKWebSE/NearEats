import axios from "axios";
import { useReducer } from "react";
import { 
    foodsIndexBackendURL ,
    foodShowBackendURL,
    foodCreateBackendURL,
    foodUpdateBackendURL,
    foodDeleteBackendURL
} from "../urls/index";

//food一覧を取得する
export const fetchFoodsIndexApi = () => {
    return axios.get(foodsIndexBackendURL)
    .then(res =>{
        return res.data
    }
    )
    .catch(e=> console.log(e))
}
//特定のfoodを取得する(editでも使用している)
export const fetchFoodApi = (food_id) => {
    return axios.get(foodShowBackendURL(food_id),{
    params: {
        foodId:food_id
    }
    })
    .then((res)=>{
        return res.data
    }
    )
    .catch(e => console.log(e));
}

export const createFoodApi = (food,user_id) => {
    return axios.post(foodCreateBackendURL,{
        food:{
            name:food.name,
            price:food.price,
            description:food.description,
            user_id:user_id
        }
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

export const updateFoodApi = (food) => {
    return axios.put(foodUpdateBackendURL(food.id),{
        food:{
            name:food.name,
            price:food.price,
            description:food.description
        }
    })
    .then((res)=>{
        return res.data
    })
    .catch(e => console.log(e));
}

export const deleteFoodApi = (food) => {
    return axios.delete(foodDeleteBackendURL(food.id),{
        food:food
    })
    .then((res) =>{
        return res.data
    })
    .catch(e => console.log(e));
}
// //foodwosyutokusi,
// export const editfoodApi =　(food_id) => {
//     return axios.get(foodEdit(food_id),{
//         params:{
//             foodId:food_id,
//         }
//     })
//     .then((res) => {
//         return res.data
//     }
//     )
//     .catch(e => console.log(e));
// }