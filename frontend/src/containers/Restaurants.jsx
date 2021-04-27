import React, {Fragment, useEffect, useReducer}  from 'react' ;
import {fetchRestaurants} from '../apis/restaurants';


import {
    InitializeState,
    restaurantsActionTypes,
    RestaurantsReducer,
} from '../reducer/restaurants';

export const Restaurants = () => {
    const {state,dispatch} = useReducer(RestaurantsReducer,InitializeState);

    useEffect(() => {
        dispatch({type: restaurantsActionTypes.FETCHINGs});
        fetchRestaurants()
        .then((data) =>
            dispatch({type:restaurantsActionTypes.FETCH_SUCCESS,
                      payload: { restaurants:data.restaurants
                      }
            })
        )
        .catch((e) => console(e))
    },[])
    return (
        <Fragment>
            レストラン一覧じゃい

        </Fragment>
    )
}