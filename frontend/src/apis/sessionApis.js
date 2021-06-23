import axios from "axios";
import React from "react";
import {signIn,signOut,isLogin} from '../urls/index'
import Cookies from "js-cookie";

//ログインする
export const signInApi = () => {
    return axios.post(signIn())
    .then(res => {
        Cookies.set("access_token", res.headers["access-token"])
        Cookies.set("client", res.headers["client"])
        Cookies.set("uid", res.headers["uid"])
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
export const signOutApi = () => {
    return axios.get(sessionIsLogin())
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}