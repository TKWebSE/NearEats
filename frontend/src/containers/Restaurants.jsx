import React, {Fragment, useEffect, useReducer}  from 'react' ;
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

import {REQUEST_STATE} from "../constants";
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

const SkeletonWrapper = styled(Skeleton)`
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
            state.fetchState === REQUEST_STATE.LOADING?
            <Fragment>
                <Skeleton variant="rect" width={450} height={300} />
                <Skeleton variant="rect" width={450} height={300} />
                <Skeleton variant="rect" width={450} height={300} />
            </Fragment>
            :
            <Fragment>
                <Wrapper>
                {
                    state.restaurantsList.map(restaurant => 
                    <Link to={`restaurant/${restaurant.id}` }>
                    <RestaurantCard>
                        {restaurant.name}
                        {restaurant.description}
                        {restaurant.price}
                    </RestaurantCard>
                    </Link>
                    )
                } 
                </Wrapper> 
            </Fragment>
            }
        </Fragment>
    )
}