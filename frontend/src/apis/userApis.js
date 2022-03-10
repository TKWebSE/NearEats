import React from "react";
import axios from "axios";
import {
    userShowBackendURL,
    signUpBackendURL,
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
export const userCreateApi = (name, email, password, passwordConfirmation) => {
    return axios.post(signUpBackendURL, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        stripe_customer_id: "",
    })
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            console.log(e)
            throw e
        })
}

//ユーザーを更新する
export const userUpdateApi = (user) => {
    return axios.put(userUpdateBackendURL(user.id), {
        user: {
            name: user.name,
            address: user.address,
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
    return axios.delete(userDeleteBackendURL(user.id), {
        params: {
            user: user
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}
