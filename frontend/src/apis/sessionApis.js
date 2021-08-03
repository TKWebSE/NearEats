import axios from "axios";
import React from "react";
import {signInBackendURL,signOutBackendURL,sessionIsLoginBackendURL} from '../urls/index'
import Cookies from "js-cookie";

//ログインする
export const signInApi = (user) => {
    return axios.post(signInBackendURL,{
            email:user.email,
            password:user.password,
    })
    .then(res => {
        Cookies.set("user_id", res.data.data["id"])
        Cookies.set("access_token", res.headers["access-token"])
        Cookies.set("client", res.headers["client"])
        Cookies.set("uid", res.headers["uid"])
        return res.data
    })
    .catch((e) => {
        throw e
    })
}

//ログアウトする
export const signOutApi = () => {
    const uid = Cookies.get("uid");
    const accessToken = Cookies.get("access_token");
    const client = Cookies.get("client");
    
    return axios.delete(signOutBackendURL,{
        params:{
            'access-token': accessToken,
            client:client,
            uid:uid,
        }
    })
    .then((res) => {
        console.log(res)
        Cookies.set("user_id", null)
        Cookies.set("access_token", null)
        Cookies.set("client", null)
        Cookies.set("uid", null)
        return res.data
    })
    .catch((e) => console.log(e))
}

//ログイン状態をチェックする
export const isLoginApi = () => {
    const uid = Cookies.get("uid");
    const accessToken = Cookies.get("access_token");
    const client = Cookies.get("client");
    return axios.get(sessionIsLoginBackendURL,{
        headers: {
          'access-token': accessToken,
          client: client,
          uid: uid
        },
      })
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}