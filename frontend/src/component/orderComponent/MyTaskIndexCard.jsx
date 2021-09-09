import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { TaskState, TaskDispatch } from "../../context/Context";
import { TASK_TEXT } from "../../constants";
import { changeJSTDate } from "../../AppFunction";
import foodImage from "../../images/food-image.jpg";
import { COLORS } from "../../style_constants";
import { gettaskStatusText } from "./gettaskStatusText";
import { taskStatusTimeText } from "./taskStatusTimeText";

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
  width:45%;
  font-size:30px;
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
  `}
  ${media.lessThan("medium")`
    font-size:11px;
  `}
  ${media.lessThan("small")`
    font-size:5px;
    width:100%;
  `}
`;

const FinishedWrapper = styled.div`
  display: flex;
`;

const TasKUpdateTextWrapper = styled.div`
  width:75%;
  text-align:right;
`;

const TaskUpdateTimeWrapper = styled.div`
`;


const UnFinishedWrapper = styled.div`
  display: flex;
`;

const TaskCreateTextWrapper = styled.div`
  width:100%;
`;

const TaskCreateTimeWrapper = styled.div`
  width:60%;
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
              {gettaskStatusText(task.order_status).STATUS_TEXT}
            </TaskStatusWrapper>
          </TaskIndexCardUpsideWrapper>
          <TaskIndexCardDownsideWrapper>
            <FoodPriceWrapper>
              ￥{task.price}
            </FoodPriceWrapper>
            <TimeWrapper>
              {
                task.order_status === 1 ?
                  <FinishedWrapper>
                    <TasKUpdateTextWrapper>
                      {taskStatusTimeText(task.order_status).STATUS_TEXT}
                    </TasKUpdateTextWrapper>
                    <TaskUpdateTimeWrapper>
                      {changeJSTDate(task.updated_at)}
                    </TaskUpdateTimeWrapper>
                  </FinishedWrapper>
                  :
                  <UnFinishedWrapper>
                    <TaskCreateTextWrapper>
                      {taskStatusTimeText(task.order_status).STATUS_TEXT}
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
