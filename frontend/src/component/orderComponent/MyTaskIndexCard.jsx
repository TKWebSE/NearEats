import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { TaskState, TaskDispatch } from "../../context/Context";
import { ORDER_TASK_STATUS_NUMBERS } from "../../constants";
import { changeJSTDate } from "../../AppFunction";
import foodImage from "../../images/food-image.jpg";
import { COLORS } from "../../style_constants";
import { getTaskStatusText } from "./getTaskStatusText";
import { getTaskStatusTimeText } from "./getTaskStatusTimeText";

const TaskIndexCardWrapper = styled.div`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  justify-content:space-between;
  height:30%;
  width:100%;
`;

const FoodImageWrapper = styled.div`
  width:25%;
`;

const FoodImage = styled.img`
  width:100%;
  height:100%;
`;

const TaskIndexCardTextWrapper = styled.div`
  width:75%;
`;

const TaskIndexCardUpsideWrapper = styled.div`
  display: flex;
  align-items:center;
`;

const FoodNameWrapper = styled.h2`
  width:85%;
  font-size:30px;
  ${media.greaterThan("large")`
    font-size:40px;
  `}
  ${media.lessThan("large")`
    font-size:25px;
  `}
  ${media.lessThan("medium")`
    font-size:16px;
  `}
  ${media.lessThan("small")`
    font-size:11px;
  `}
`;

const TaskStatusWrapper = styled.div`
  width:21%;
  margin-bottom:1%;
  background-color:${COLORS.STATUS_COLOR};
  border-radius:100%;
  text-align:center;
  color:white;
  padding:2%;
  ${media.lessThan("large")`
    font-size:15px;
  `}
  ${media.lessThan("medium")`
    font-size:11px;
  `}
  ${media.lessThan("small")`
    font-size:1px;
  `}
`;

const TaskIndexCardDownsideWrapper = styled.div`
  display: flex;
  width:100%;
  align-items:center;
`;

const FoodPriceWrapper = styled.h2`
  width:40%;
  font-size:30px;
  ${media.greaterThan("large")`
    font-size:40px;
  `}
  ${media.lessThan("large")`
    font-size:25px;
  `}
  ${media.lessThan("medium")`
    font-size:15px;
  `}
  ${media.lessThan("small")`
    font-size:11px;
    width:10%;
  `}
`;

const TimeWrapper = styled.div`
  width:55%;
  text-align:right;
  font-size:20px;
  ${media.lessThan("large")`
    font-size:16px;
    width:150%;
  `}
  ${media.lessThan("medium")`
    fontsize:11px;
  `}
  ${media.lessThan("small")`
    font-size:5px;
    width:100%;
  `}
`;

const FinishedWrapper = styled.div`
  text-align:right;
`;


const UnFinishedWrapper = styled.div`
  text-align:right;
`;

export const MyTaskIndexCard = ({ task }) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)

  console.log(task)

  return (
    <Fragment>
      <TaskIndexCardWrapper>
        <FoodImageWrapper>
          <FoodImage src={foodImage} alt="foodImage"></FoodImage>
        </FoodImageWrapper>
        <TaskIndexCardTextWrapper>
          <TaskIndexCardUpsideWrapper>
            <FoodNameWrapper>
              {task.name}
            </FoodNameWrapper>
            <TaskStatusWrapper>
              {getTaskStatusText(task.order_status).STATUS_TEXT}
            </TaskStatusWrapper>
          </TaskIndexCardUpsideWrapper>
          <TaskIndexCardDownsideWrapper>
            <FoodPriceWrapper>
              ￥{task.price}
            </FoodPriceWrapper>
            <TimeWrapper>
              {
                task.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED ?
                  <UnFinishedWrapper>
                    {getTaskStatusTimeText(task.order_status).STATUS_TEXT}
                    {changeJSTDate(task.created_at)}
                  </UnFinishedWrapper>
                  :
                  <FinishedWrapper>
                    {getTaskStatusTimeText(task.order_status).STATUS_TEXT}
                    {changeJSTDate(task.updated_at)}
                  </FinishedWrapper>
              }
            </TimeWrapper>
          </TaskIndexCardDownsideWrapper>
        </TaskIndexCardTextWrapper>
      </TaskIndexCardWrapper>
    </Fragment>
  )
}
