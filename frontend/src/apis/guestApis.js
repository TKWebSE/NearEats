import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  guestCreateURLBackendURL,
  guestActivateBackendURL,
  guestShowBackendURL,
} from "../urls/index";

// 認証用のguestを作成する
export const guestCreateApi = (name, email) => {
  const guestId = Cookies.get("guest");
  console.log(guestId)
  return axios.post(guestCreateURLBackendURL, {
    name: name,
    email: email,
  })
    .then((res) => {
      console.log(res)
      const guestIda = Cookies.get("guest");
      console.log(guestIda)
      Cookies.set("guest", res.data.guest.id)
      console.log(Cookies.get("guest"))
      return res.data
    })
    .catch((e) => {
      console.log(e)
      throw e
    })
}

//認証コードを送って、Guestがアクティベートできるかを返す
export const guestActivateApi = (guestId, authCode) => {
  return axios.post(guestActivateBackendURL(guestId), {
    guestId: guestId,
    auth_code: authCode,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
      throw e
    })
}

//認証コードを送って、Guestがアクティベートできるかを返す
export const guestShowApi = () => {
  const guestId = Cookies.get("guest");
  if (!(guestId)) {
    return null
  }
  return axios.get(guestShowBackendURL(guestId), {
    guestId: guestId,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
      throw e
    })
}
