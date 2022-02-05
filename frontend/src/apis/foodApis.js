import axios from "axios";
import { useReducer } from "react";
import {
    foodsIndexBackendURL,
    MyfoodsIndexBackendURL,
    foodsSearchIndexBackendURL,
    foodShowBackendURL,
    foodCreateBackendURL,
    foodUpdateBackendURL,
    foodDeleteBackendURL,
    foodBuyBackendURL
} from "../urls/index";

//food一覧を取得する
export const fetchFoodsIndexApi = (user_id, currentUserNowLocation, serchWord) => {
    return axios.get(foodsIndexBackendURL, {
        params: {
            user_id: user_id,
            city: currentUserNowLocation,
            serchWord: serchWord,
        }
    })
        .then(res => {
            console.log(res)
            return res.data
        }
        )
        .catch(e => console.log(e))
}
//ログインしているアカウントが登録したfoodの一覧を取得する
export const fetchMyFoodsIndex = (user_id) => {
    return axios.get(MyfoodsIndexBackendURL(user_id), {
        params: {
            user_id: user_id
        }
    })
        .then(res => {
            return res.data
        }
        )
        .catch(e => console.log(e))
}

//特定のfoodを取得する(editでも使用している)
export const fetchFoodApi = (food_id) => {
    return axios.get(foodShowBackendURL(food_id), {
        params: {
            foodId: food_id
        }
    })
        .then((res) => {
            return res.data
        }
        )
        .catch(e => console.log(e));
}

//foodを新規登録する
export const createFoodApi = (food, user_id) => {
    return axios.post(foodCreateBackendURL, {
        food: {
            name: food.name,
            price: food.price,
            description: food.description,
            user_id: user_id
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}

//foodを更新する
export const updateFoodApi = (food) => {
    console.log(food)
    return axios.put(foodUpdateBackendURL(food.id), {
        food: {
            name: food.name,
            price: food.price,
            description: food.description
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e));
}

//foodを削除する
export const deleteFoodApi = (food) => {
    return axios.delete(foodDeleteBackendURL(food.id), {
        food: food
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e));
}

//foodを購入する
export const buyFoodApi = (foodId, userId) => {
    return axios.put(foodBuyBackendURL(foodId), {
        // food: {
        food_id: foodId,
        order_user_id: userId,
        // }
    })
        .then((res) => {
            console.log(res)
            return res.data
        })
        .catch(e => console.log(e))

}
