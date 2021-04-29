import React from 'react';
import styled from `styled-components`;

import foodImage from `../images/food-image`;

const foodTitle = styled.div`
    font-size: 1.4rem;
    line-height: 2rem;
    max-height: 4rem;
`;

const foodText = styled.div`
    
`;

const MainfoodImage = styled.img`
    width:25%;
    height:10%;
`;

//foodを表示するカードコンポーネント
export const foodCard = (food) => {
    
    <wrapper>
        <Link to={"foods/${food.id}"}>
            <MainfoodImage src={foodImage} alt="foodImage"></MainfoodImage>
        <foodTitle>
            {food.name}
        </foodTitle>
        </Link>
        {food.description}
        {food.price}
        {restaurant_name}
    </wrapper>
}