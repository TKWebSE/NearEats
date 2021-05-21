import React from `react`;
import axios from `axios`;
import {userShow,userUpdate,userDelete} from "../urls/index";

//editとdetailで使用
export const fetchUserApi = (user) => {
    axios.get(userShow(user.id),{
        params:{
            user:user
        }
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}

export const userUpdate = (user) => {
    axios.put(userUpdate(user.id),{
        params:{user:user}
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}
export const UserDelete = (user) => {
    axios.delete(userDelete,{
        params:{
            user:user
        }
    })
    .then((res) => {
        return res.data
    })
    .catch(e => console.log(e))
}