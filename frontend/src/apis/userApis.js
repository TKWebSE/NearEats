import React from "react";
import axios from "axios";
import {userShow,userCreate,userUpdate,userDelete} from "../urls/index";

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

export const userCreateApi = (user) => {
    return axios.post(userCreate(user.id),{
        params:{user:user}
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

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