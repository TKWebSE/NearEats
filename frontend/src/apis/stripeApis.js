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
