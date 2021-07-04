import React from "react";
import axios from "axios";
import {userShow,signUp,userUpdate,userDelete} from "../urls/index";

//特定のユーザーを取得する
//editとdetailで使用
export const fetchUserApi = (userId) => {
    return axios.get(userShow(userId),{
        params:{
            userId:userId
        }   
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

//ユーザーを作成する
export const userCreateApi = (user) => {
    console.log(user)
    return axios.post(signUp,{
        name:user.name,
        email:user.email,
        password:user.password,
        password_confirmation:user.passwordConfirmation
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

//ユーザーを更新する
export const userUpdateApi = (user) => {
    return axios.put(userUpdate(user.id),{
        user:{
            name:user.name,
            address:user.address,
            email:user.email,
            password:user.password,
        }
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

//ユーザーを削除する
export const UserDelete = (user) => {
    return axios.delete(userDelete,{
        params:{
            user:user
        }
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}