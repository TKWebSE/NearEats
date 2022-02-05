import axios from 'axios';
import {
  checkoutSuccessURL,
  checkoutCancelURL,
  stripeProductionIndexBackendURL,
  stripeCheckoutBackendURL,
  buyPointfrontendURL,
} from '../urls/index'

//productのlistを取得する(Stripeから商品一覧を取得する)
export const stripeProductionIndexApi = () => {
  return axios.get(stripeProductionIndexBackendURL)
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}

//Userをstripe上に顧客として作成をする
export const stripeCheckoutApi = (stripe_customer_id, priceID) => {
  return axios.post(stripeCheckoutBackendURL, {
    stripe_customer_id: stripe_customer_id,
    price_id: priceID,
    buyPointfrontendURL: buyPointfrontendURL,
  })
    .then(res => {
      return res.data
    })
    .catch(e => console.log(e))
}

