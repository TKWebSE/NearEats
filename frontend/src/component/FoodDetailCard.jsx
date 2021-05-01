import React,{ Fragment } from "react";
import styled from "styled-components";
import { DeleteButton } from "../component/MaterialUIButtons";
import foodImage from "../images/food-image.jpg";

const FoodImage = styled.div`
`;

const FoodName = styled.div`
`;

const FoodPrice = styled.div`
`;

const FoodDesicription = styled.div`
`;

const FoodCreatedTime = styled.div`
`;

export const FoodDetailCard = (food) => {
    return (
        <Fragment>
           <FoodImage src={foodImage} alt="foodImage"></FoodImage>
           <FoodName>
               {food.name}
           </FoodName>
           <FoodPrice>
               {food.price}
           </FoodPrice>
            <FoodDesicription>
                {food.Description}
            </FoodDesicription>
            <FoodCreatedTime>
                {food.created_time}
            </FoodCreatedTime>
            <DeleteButton></DeleteButton>
        </Fragment>
    )
}