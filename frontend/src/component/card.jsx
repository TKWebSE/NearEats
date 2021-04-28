import React from 'react';
import styled from `styled-components`;
import {
    initializeState,
    foodsActionTypes,
    foodsReducer,
} from `../reducer/foods`

const foodText = styled.div`
    
`;

const foodImage = styled.div`

`;

//foodを表示するカードコンポーネント
export const foodCard = (food,onClick) => {
    const {state,dispatch} = UseReducer(foodsReducer,initializeState);
    dispachh(foodsActionTypes.FECHING);
    
    
    <wrapper>
        
    </wrapper>
}