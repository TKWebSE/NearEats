import React from "react";
import axios from "axios";
import {
    userShowBackendURL,
    signUpBackendURL,
    userUpdateBackendURL,
    userDeleteBackendURL,
    updateEmailBackendURL,
    updatePasswordBackendURL,
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
export const userCreateApi = (user) => {
    return axios.post(signUpBackendURL, {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation
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
        .catch(e => console.log(e))
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

export const updateEmailApi = (userId, email) => {
    return axios.put(updateEmailBackendURL, {
        params: {
            userId: userId,
            email: email,
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}

export const updatePasswordApi = (userId, password) => {
    return axios.put(updatePasswordBackendURL, {
        params: {
            userId: userId,
            password: password,
        }
    })
        .then((res) => {
            return res.data
        })
        .catch(e => console.log(e))
}
