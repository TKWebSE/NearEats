import React, {Fragment, useEffect, useReducer}  from 'react' ;
import styled from 'styled-components';
import {fetchRestaurants} from '../apis/restaurants';


import {
    initializeState,
    restaurantsActionTypes,
    restaurantsReducer,
} from '../reducer/restaurants';


const Wrapper = styled.div`
  margin: 16px;
`;

const RestaurantCard = styled.div`
    float:left;
`;

export const Restaurants = () => {
    const [state,dispatch] = useReducer(restaurantsReducer,initializeState);

    useEffect(() => {
        dispatch({type: restaurantsActionTypes.FETCHING});
        fetchRestaurants()
        .then((data) =>
            dispatch({
                type: restaurantsActionTypes.FETCH_SUCCESS,
                payload: { 
                    restaurants: data.restaurants
                }
            })
        )
        .catch((e) => console(e))
    },[])
    return (
        <Fragment>
            <header>
                レストラン一覧じゃい
            </header>{
            REQUEST_STATE.LOADING == state.fetchState.LOADING {
                <div>なうろーでぃんぐ</div>
            }
            
            REQUEST_STATE.OK == state.fetchState.OK {
                <wrapper>
                {
                    state.restaurantsList.map(restaurant => 
                    <RestaurantCard>
                        {restaurant.name}
                        {restaurant.description}
                        {restaurant.price}
                    </RestaurantCard>
                    )
                } 
            </wrapper> 
            }
        </Fragment>
    )
}