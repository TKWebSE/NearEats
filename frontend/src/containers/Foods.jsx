import React, {Fragment, useEffect, useReducer} from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

import { fetchFoods } from '../apis/foods';
import { REQUEST_STATE } from '../constants';
import { 
    initializeState,
    foodsActionTypes,
    foodsReducer,
} from '../reducer/foods';
import { foodCard } from `../component/foodCard`;

const foodWrapper = styled.div`
    float:left;
`;
const fixSkeleton = styled.Skeleton`
    float:left;
    margin:5%;
`;

export const Foods = () => {
    const [state,dispatch] = useReducer(foodsReducer,initializeState);

    useEffect(() => {
        dispatch({type: foodsActionTypes.FETCHING});
        fetchFoods()
        .then((data) => {
            dispatch({
                type: foodsActionTypes.FETCH_SUCCESS,
                payload: {
                    foods: data.foods
                }
            })
        })
        .catch((e) => console.log(e))

    },[])

    return (
        <Fragment>
            <header>
                フード一覧
            </header>
            <foodWrapper>
                {
                state.fetchState === REQUEST_STATE.LOADING?
                    <Fragment>
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                    </Fragment>
            
                :
                state.foodsList.map(food =>
                    <Link to={`food/${food.id}` }>
                    <foodWrapper>
                        <foodCard food={food}></foodCard>
                    </foodWrapper>
                    </Link>
                )

                }
            </foodWrapper>
        </Fragment>
    )
}