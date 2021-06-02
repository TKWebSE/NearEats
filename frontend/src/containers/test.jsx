import React, {Fragment, useEffect, useReducer}  from 'react' ;
import {fetchUserApi} from '../apis/userApis';

export const Restaurants = () => {
    // const {state,dispatch} useReducer(state,Initialize)
    const restaurantsList = []
    useEffect(() => {
        fetchUserApi()
        .then((data) =>
            restaurantsList = data
        )
        .catch((e) => console(e))
    },[])
    return (
        <Fragment>
            レストラン一覧
            #{restaurantsList}
        </Fragment>
    )
}