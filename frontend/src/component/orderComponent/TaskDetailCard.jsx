import React,{ Fragment,useContext } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import {changeJSTDate} from "../../AppFunction";
import {TASK_TEXT} from "../../constants";

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

const TaskStatusWrapper = styled.div`
`;

const TaskStatusUnFinishedWrapper = styled.div`
`;

const TaskStatusFinishedWrapper = styled.div`
`;

const TaskStatusOrderCancelWrapper = styled.div`
`;

const TaskStatusTaskCancelWrapper = styled.div`
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


export const TaskDetailCard = (task) => {
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
                <TaskStatusWrapper>
                {
                <TaskStatusTextWrapper>
                 //ORDERSTATUSごとに判定処理し、テキストを表示
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
                </TaskStatusTextWrapper>
                //配達済みかそれ以外で判定処理
                <TaskStatusTImeWrapper>
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
                </TaskStatusTImeWrapper>
                }
                </TaskStatusWrapper>
            </FoodCardWrapper>
        </Fragment>
    )
}