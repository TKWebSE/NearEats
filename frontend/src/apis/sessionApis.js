import axios from "axios";
import React from "react";
import {signIn,signOut,sessionIsLogin} from '../urls/index'
import Cookies from "js-cookie";

//ログインする
export const signInApi = (user) => {
    console.log(signIn)
    return axios.post(signIn,{
        params:{
            email:user.email,
            password:user.password,
            passwprdComfirm:user.passwprdComfirm
        }
    })
    .then(res => {
        Cookies.set("access_token", res.headers["access-token"])
        Cookies.set("client", res.headers["client"])
        Cookies.set("uid", res.headers["uid"])
        return res.data
    })
    .catch((e) => console.log(e))
}

//ログアウトする
export const signOutApi = () => {
    const uid = Cookies.get("uid");
    const accessToken = Cookies.get("access_token");
    const client = Cookies.get("client");
    
    return axios.delete(signOut(),{
        params:{
            uid:uid,
            accessToken:accessToken,
            client:client
        }
    })
    .catch((e) => console.log(e))
}

//ログイン状態をチェックする
export const isLoginApi = () => {
    return axios.get(sessionIsLogin())
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}