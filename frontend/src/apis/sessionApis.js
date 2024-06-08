import axios from "axios";
import React from "react";
import { signUpBackendURL, signInBackendURL, signOutBackendURL, sessionIsLoginBackendURL } from '../urls/index'
import Cookies from "js-cookie";

//ユーザーを登録する(device_token_auth)
export const signUpApi = (name, email, password, passwordConfirmation) => {
    console.log(signUpBackendURL)
    return axios.post(signUpBackendURL, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
    })
        .then((res) => {
            console.log(res);
            console.log("成功");
            return res.data
        })
        .catch((e) => {
            console.log(e);
            console.log("失敗");
            throw e
        })
}


//ログインする
export const signInApi = (email, password) => {
    return axios.post(signInBackendURL, {
        email: email,
        password: password,
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

    return axios.delete(signOutBackendURL, {
        params: {
            'access-token': accessToken,
            client: client,
            uid: uid,
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
    console.log("isLogin!!!")
    return axios.get(sessionIsLoginBackendURL, {
        headers: {
            'access-token': accessToken,
            client: client,
            uid: uid
        },
    })
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch((e) => console.error(e))
}

// export const notificationTasksApis = () => {
//     return axios.get(sessionIsLoginBackendURL, {
//     })
//         .then(res => {
//             return res.data
//         })
//         .catch((e) => console.error(e))
// }
