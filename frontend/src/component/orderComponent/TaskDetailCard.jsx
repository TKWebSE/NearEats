import React,{ Fragment,useContext, useState } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import {changeJSTDate} from "../../AppFunction";
import {TASK_TEXT} from "../../constants";

const TaskDetailCardWrapper = styled.div`
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

const TaskStatusWrapper = styled.div`
`;

const TaskStatusTextWrapper = styled.div`
`;

const TaskStatusUnFinishedWrapper = styled.div`
color:red;
`;

const TaskStatusFinishedWrapper = styled.div`
`;

const TaskStatusOrderCancelWrapper = styled.div`
`;

const TaskStatusTaskCancelWrapper = styled.div`
`;

const TaskStatusTImeWrapper = styled.div`
`;

const UnFinishedWrapper = styled.div`
    display: flex;
`;

const TaskCreateTextWrapper = styled.div`
    margin-bottom:5%;
`;

const TaskCreateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

const FinishedWrapper = styled.div`
    display: flex;
`;

const TasKUodateTextWrapper = styled.div`
    margin-bottom:5%;
`;

const TaskUpdateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

export const taskStatusText = (order_status) => {
    console.log(order_status)
    const STATUS_TEXT = []
    
    switch (order_status){
        case 1:
            return{
                STATUS_TEXT:TASK_TEXT.TASK_STATUS_UNFINISHED_TEXT,
            }
        case 2:
            return{
                STATUS_TEXT:TASK_TEXT.TASK_STATUS_FINISHED_TEXT,
            }
        case "3":
            return {
                STATUS_TEXT:TASK_TEXT.TASK_STATUS_TASK_CANCEL_TEXT,
            }
        case 4:
            return {
                STATUS_TEXT:TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TEXT,
            }
    }
}


export const TaskDetailCard = (task) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)
  const [statusValue,setState] = useState(taskStatusText(state.task.order_status))
    console.log(statusValue)
    return (
        <Fragment>
            <TaskDetailCardWrapper>
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
                <TaskStatusWrapper>
                    <TaskStatusTextWrapper>
                    {/* { */}
                     <TaskStatusUnFinishedWrapper>
                         "s"
                         {statusValue}
                        {/* {taskStatusText(state.task.order_status)} */}
                    </TaskStatusUnFinishedWrapper>
                        {/* // task.order_status === "0"?
                            // <TaskStatusUnFinishedWrapper>
                            //     {TASK_TEXT.TASK_STATUS_UNFINISHED_TEXT}
                            // </TaskStatusUnFinishedWrapper>
                        // :
                        // task.order_status === "1"?
                        //     <TaskStatusFinishedWrapper>
                        //         {TASK_TEXT.TASK_STATUS_FINISHED_TEXT}
                        //     </TaskStatusFinishedWrapper>
                        // :
                        // task.order_status === "2"?
                        //     <TaskStatusOrderCancelWrapper>
                        //         {TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TEXT}
                        //     </TaskStatusOrderCancelWrapper>
                        // :
                        // task.order_status === "3"?
                        //     <TaskStatusTaskCancelWrapper>
                        //         {TASK_TEXT.TASK_STATUS_TASK_CANCEL_TEXT}
                        //     </TaskStatusTaskCancelWrapper>
                        // :
                        // null */}
                    {/* } */}
                </TaskStatusTextWrapper>
                <TaskStatusTImeWrapper>
                    {
                    task.order_status === 0?
                    <UnFinishedWrapper>
                        <TaskCreateTextWrapper>
                            {TASK_TEXT.TASK_CREATE_TEXT}
                        </TaskCreateTextWrapper>
                        <TaskCreateTimeWrapper>
                            {changeJSTDate(state.task.created_at)}
                        </TaskCreateTimeWrapper>
                    </UnFinishedWrapper> 
                :
                    <FinishedWrapper>
                        <TasKUodateTextWrapper>
                            {TASK_TEXT.TASK_UPDATE_TEXT}
                        </TasKUodateTextWrapper>
                        <TaskUpdateTimeWrapper>
                            {changeJSTDate(state.task.updated_at)}
                        </TaskUpdateTimeWrapper>
                    </FinishedWrapper>
                }
                </TaskStatusTImeWrapper>
                </TaskStatusWrapper>
            </TaskDetailCardWrapper>
        </Fragment>
    )
}