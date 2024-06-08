import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
    userShowBackendURL,
    userCreateBackendURL,
    userUpdateBackendURL,
    userDeleteBackendURL,
    updateEmailBackendURL,
    updatePasswordBackendURL,
    editEmailURL,
    editPasswordURL
} from "../urls/index";

//特定のユーザーを取得する
//editとdetailで使用
export const fetchUserApi = (userId) => {
    return axios.get(userShowBackendURL(userId), {
        params: {
            userId: userId
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}

//ユーザーを作成する
export const userCreateApi = (email) => {
    return axios.post(userCreateBackendURL, {
        // name: name,
        email: email,
        // password: password,
        // password_confirmation: passwordConfirmation,
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

//ユーザーを更新する
export const userUpdateApi = (user) => {
    return axios.put(userUpdateBackendURL(user.id), {
        user: {
            name: user.name,
            address: user.address,
            city: user.city,
            email: user.email,
            password: user.password,
        }
    })
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            throw e
        })
}

//ユーザーを削除する
export const userDelete = (user) => {
    console.log(userDeleteBackendURL(user.id))
    const uid = Cookies.get("uid");
    const accessToken = Cookies.get("access_token");
    const client = Cookies.get("client");
    return axios.delete(userDeleteBackendURL(user.id), {
        headers: {
            'access-token': accessToken,
            client: client,
            uid: uid,
        },
        params: {
            user: user
        },
    })
        .then((res) => {
            Cookies.set("user_id", null)
            Cookies.set("access_token", null)
            Cookies.set("client", null)
            Cookies.set("uid", null)
            return res.data
        })
        .catch(e => console.log(e))
}
