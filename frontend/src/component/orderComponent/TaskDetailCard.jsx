import React,{ Fragment,useContext } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import {changeJSTDate} from "../../AppFunction";

const FoodCardWrapper = styled.div`
    text-align:left;
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const FoodName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodPrice = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FoodDesicription = styled.div`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

const FoodCreatedTime = styled.div`
    margin-bottom:5%;
`;

export const TaskDetailCard = () => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)
    console.log(state)
    return (
        <Fragment>
            <FoodCardWrapper>
                <FoodImage src={foodImage} alt="foodImage"></FoodImage>
                <FoodName>
                    {state.task.name}
                </FoodName>
                <FoodPrice>
                    ￥{state.task.price}
                </FoodPrice>
                <FoodDesicription>
                    {state.task.description}
                </FoodDesicription>
                <FoodCreatedTime>
                    {changeJSTDate(state.task.updated_at)}
                </FoodCreatedTime>
            </FoodCardWrapper>
        </Fragment>
    )
}