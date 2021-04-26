import React, {Fragment, useEffect, useReducer}  from 'react' ;
import {fetchRestaurants} from '../apis/restaurants';

export const Restaurants = () => {
    // const {state,dispatch} useReducer(state,Initialize)
    const restaurantsList = []
    useEffect(() => {
        fetchRestaurants()
        .then((data) =>
            restaurantsList = data
        )
        .catch((e) => console(e))
    },[])
    return (
        <Fragment>
            レストラン一覧じゃい
            #{restaurantsList}
        </Fragment>
    )
}