import axios from 'axios';
import {
  checkoutSuccessURL,
  checkoutCancelURL,
  stripeCheckoutBackendURL
} from '../urls/index'


//Userをstripe上に顧客として作成をする
export const stripeCheckoutApi = () => {
  return axios.post(stripeCheckoutBackendURL)
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}

//後で消す。フロントエンドが出るか確認する用
export const stripeCheckoutAApi = () => {
  return axios.post('/create-checkout-session')
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}
