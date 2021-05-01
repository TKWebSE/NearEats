import React from `react`;
import { Fragment } from "react";

const foodName = styled.div`
`;

const foodPrice = styled.div`
`;

export const FoodDetailsCard = (food) => {
    return (
        <Fragment>
           <img src={foodImage} alt="foodImage"></img>
           <foodName>
               {food.name}
           </foodName>
           <foodPrice>
               {food.price}
           </foodPrice>
            <foodLimit>
                {food.limit}
            </foodLimit>
            <foodDesicription>
                {food.Description}
            </foodDesicription>
            <foodCreatedTime>
                {food.created_time}
            </foodCreatedTime>
        </Fragment>
    )
}