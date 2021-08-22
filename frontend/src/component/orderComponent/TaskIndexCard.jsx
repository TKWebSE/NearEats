import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import {TASK_TEXT} from "../../constants";
import {changeJSTDate} from "../../AppFunction";
import foodImage from "../../images/food-image.jpg";
import {COLORS} from "../../style_constants";

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
`;

const TaskStatusWrapper = styled.div`
  width:15%;
  margin-bottom:1%;
  background-color:${COLORS.STATUS_COLOR};
  border-radius:45%;
  text-align:center;
  color:white;
`;

const TaskStatusUnFinishedWrapper = styled.div`

`;

const TaskStatusFinishedWrapper = styled.div`
`;

const TaskStatusOrderCancelWrapper = styled.div`
`;

const TaskStatusTaskCancelWrapper = styled.div`
`;

const TaskIndexCardDownsideWrapper = styled.div`
  display: flex;
  width:100%;
  align-items:center;
`;

const FoodPriceWrapper = styled.h2`
  width:55%;
`;

const TimeWrapper = styled.div`
  width:45%;
`;

const FinishedWrapper = styled.div`
  display: flex;
`;

const TasKUodateTextWrapper = styled.div`
  width:75%;
`;

const TaskUpdateTimeWrapper = styled.div`

`;


const UnFinishedWrapper = styled.div`
  display: flex;
`;

const TaskCreateTextWrapper = styled.div`
  width:45%;
`;

const TaskCreateTimeWrapper = styled.div`
  width:55%;
`;



export const MyTaskIndexCard = ({task}) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)

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
              {
                task.order_status === "0"?
                  <TaskStatusUnFinishedWrapper>
                    {TASK_TEXT.TASK_STATUS_UNFINISHED_TEXT}
                  </TaskStatusUnFinishedWrapper>
                :
                task.order_status === "1"?
                  <TaskStatusFinishedWrapper>
                    {TASK_TEXT.TASK_STATUS_FINISHED_TEXT}
                  </TaskStatusFinishedWrapper>
                :
                task.order_status === "2"?
                  <TaskStatusOrderCancelWrapper>
                    {TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TEXT}
                  </TaskStatusOrderCancelWrapper>
                :
                task.order_status === "3"?
                  <TaskStatusTaskCancelWrapper>
                  {TASK_TEXT.TASK_STATUS_TASK_CANCEL_TEXT}
                  </TaskStatusTaskCancelWrapper>
                :
                null
              }
            </TaskStatusWrapper>
          </TaskIndexCardUpsideWrapper>
          <TaskIndexCardDownsideWrapper>
            <FoodPriceWrapper>
              ￥{task.price}
            </FoodPriceWrapper>
            <TimeWrapper>
            {
              task.order_status === 1?
                <FinishedWrapper>
                  <TasKUodateTextWrapper>
                    {TASK_TEXT.TASK_UPDATE_TEXT}
                  </TasKUodateTextWrapper>
                  <TaskUpdateTimeWrapper>
                    {changeJSTDate(task.updated_at)}
                  </TaskUpdateTimeWrapper>
                </FinishedWrapper>
              :
                <UnFinishedWrapper>
                  <TaskCreateTextWrapper>
                    {TASK_TEXT.TASK_CREATE_TEXT}
                  </TaskCreateTextWrapper>
                  <TaskCreateTimeWrapper>
                    {changeJSTDate(task.created_at)}
                  </TaskCreateTimeWrapper>
                </UnFinishedWrapper> 
            }
            </TimeWrapper>
          </TaskIndexCardDownsideWrapper>
        </TaskIndexCardTextWrapper>
      </TaskIndexCardWrapper>
    </Fragment>
  )
}