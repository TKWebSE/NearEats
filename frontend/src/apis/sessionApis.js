import axios from "axios";
import React from "react";
import {sessionLogin,sessionLogout,sessionIsLogin} from '../urls/index'

//ログインする
export const sessionLoginApis = () => {
    return axios.post(sessionLogin())
    .then(res => {
        return res.data
    })
    .catch((e) => console.log(e))
}

//ログアウトする
// export const sessionLogout = () => {
//     return axios.post(sessionLogout())
//     .then(res => {
//         return res.data
//     })
//     .catch((e) => console.log(e))
// }

//ログイン状態をチェックする
export const sessionApis = () => {
    return axios.get(sessionIsLogin())
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}