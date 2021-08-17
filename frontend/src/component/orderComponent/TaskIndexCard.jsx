import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import {TASK_INDEX_TEXT} from "../../constants";


const TaskIndexCardWrapper = styled.div`
border: solid;
border-color: #F0F0F0 ;
color:black;
border-width:2px;
`;


const FoodNameWrapper = styled.h3`
  margin:0;
  width:60%;
  float:left;
`;

const TaskStatusWrapper = styled.div`
text-align:right;
margin-bottom:1%;
`;

const TaskStatusUnFinishedWrapper = styled.div`
`;

const TaskStatusFinishedWrapper = styled.div`
`;

const TaskStatusOrderCancelWrapper = styled.div`
`;

const TaskStatusTaskCancelWrapper = styled.div`
`;

const FoodPriceWrapper = styled.div`
width:60%;
float:left;
`;

const TimeWrapper = styled.div`
`;

const FinishedWrapper = styled.div`
display: flex;
`;

const TasKUodateTextWrapper = styled.div`
`;

const TaskUpdateTimeWrapper = styled.div`
`;


const UnFinishedWrapper = styled.div`
display: flex;

`;

const TaskCreateTextWrapper = styled.div`


`;

const TaskCreateTimeWrapper = styled.div`

`;



export const MyTaskIndexCard = ({task}) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)
  // const [yyyyMMddhhmm,setyyyyMMddhhmm] = useState("yyyyMMddhhmm")
  
  // useEffect(() => {
  //   setyyyyMMddhhmm()
  // },[])

  return (
    <Fragment>
      <TaskIndexCardWrapper>
        <FoodNameWrapper>
          {task.name}
        </FoodNameWrapper>
        <TaskStatusWrapper>
          {
            task.order_status === "0"?
              <TaskStatusUnFinishedWrapper>
                {TASK_INDEX_TEXT.TASK_STATUS_UNFINISHED_TEXT}
              </TaskStatusUnFinishedWrapper>
            :
            task.order_status === "1"?
              <TaskStatusFinishedWrapper>
                {TASK_INDEX_TEXT.TASK_STATUS_FINISHED_TEXT}
              </TaskStatusFinishedWrapper>
            :
            task.order_status === "2"?
              <TaskStatusOrderCancelWrapper>
                {TASK_INDEX_TEXT.TASK_STATUS_ORDER_CANCEL_TEXT}
              </TaskStatusOrderCancelWrapper>
            :
            task.order_status === "3"?
              <TaskStatusTaskCancelWrapper>
              {TASK_INDEX_TEXT.TASK_STATUS_TASK_CANCEL_TEXT}
              </TaskStatusTaskCancelWrapper>
            :
            null
          }
        </TaskStatusWrapper>
        <FoodPriceWrapper>
          ￥{task.price}
        </FoodPriceWrapper>
        <TimeWrapper>
        {
          task.order_status === 1?
            <FinishedWrapper>
              <TasKUodateTextWrapper>
                {TASK_INDEX_TEXT.TASK_UPDATE_TEXT}
              </TasKUodateTextWrapper>
              <TaskUpdateTimeWrapper>
                {task.updated_at}
              </TaskUpdateTimeWrapper>
            </FinishedWrapper>
          :
            <UnFinishedWrapper>
              <TaskCreateTextWrapper>
                {TASK_INDEX_TEXT.TASK_CREATE_TEXT}
              </TaskCreateTextWrapper>
              <TaskCreateTimeWrapper>
                {task.created_at}
              </TaskCreateTimeWrapper>
            </UnFinishedWrapper> 
        }
        </TimeWrapper>
      </TaskIndexCardWrapper>
    </Fragment>
  )
}