import React from `react`;
import axios from `axios`;
import {user} from `../urls/index`


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