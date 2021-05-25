import React from "react";
import axios from "axios";
import {userShow,userUpdate,userDelete} from "../urls/index";

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

export const userUpdateApi = (user) => {
    return axios.put(userUpdate(user.id),{
        params:{user:user}
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