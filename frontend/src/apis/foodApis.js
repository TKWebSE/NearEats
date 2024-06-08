import axios from "axios";
import { useReducer } from "react";
import {
    foodsIndexBackendURL,
    MyfoodsIndexBackendURL,
    foodsSearchIndexBackendURL,
    foodShowBackendURL,
    foodCreateBackendURL,
    foodUpdateBackendURL,
    noImagefoodUpdateBackendURL,
    foodDeleteBackendURL,
    allFoodDeleteForOneUserBackendURL,
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
export const createFoodApi = (formData) => {
    return axios.post(foodCreateBackendURL,
        formData
        ,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}

//foodを更新する
export const updateFoodApi = (food, formData, city) => {
    console.log(formData)
    return axios.put(foodUpdateBackendURL(food.id),
        formData
        ,
        // food: {
        //     id: food.id,
        //     image: formData,
        //     name: food.name,
        //     price: food.price,
        //     description: food.description,
        //     city: city,
        // },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e));
}

//Imageが更新されない場合、foodを更新する
export const updateNoImageFoodApi = (food, city) => {
    return axios.put(noImagefoodUpdateBackendURL(food.id), {
        food: {
            id: food.id,
            name: food.name,
            price: food.price,
            description: food.description,
            city: city,
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

//ユーザー1人のfoodを全削除する
export const deleteAllFoodForOneUserApi = (user) => {
    return axios.delete(allFoodDeleteForOneUserBackendURL(user.id), {
        user_id: user.id
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
