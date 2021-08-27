import React,{ Fragment,useContext, useState } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme,RedButtonTheme} from "../../style_constants";
import {TaskState,TaskDispatch} from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import {changeJSTDate} from "../../AppFunction";
import {TASK_TEXT,ORDER_TASK_STATUS_NUMBERS} from "../../constants";
import {taskStatusText} from "../orderComponent/fetchTaskStatusComponent";
import {MaterialUICommonButton} from "../MaterialUICommonButton";
import MaterialUISimpleModal from "../MaterialUISimpleModal";
import {updateTaskApi} from "../../apis/taskApis";

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
    float:left;
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

const TaskDetailCardButtom = styled.div`
    display: flex;

`;

const TaskDetailFinisheButtomWrapper = styled.div`
margin:0 0 0 auto;
`;

const TaskDetailCancelButtomWrapper = styled.div`
`;



export const TaskDetailCard = () => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)

    function TaskCancelHandle() {
        console.log(state)
        updateTaskApi(state.task,ORDER_TASK_STATUS_NUMBERS.TASKCANCEL)
        .then((data) => {
            console.log(data)
        })
    }

    function TaskFinisiheHandle() {
        updateTaskApi(state.task,ORDER_TASK_STATUS_NUMBERS.TASKFINISH)
        .then((data) => {
            console.log(data)
        })
    }

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
                         {taskStatusText(state.task.order_status).STATUS_TEXT}
                    </TaskStatusTextWrapper>
                    <TaskStatusTImeWrapper>
                    {
                        state.task.order_status === 0?
                        <UnFinishedWrapper>
                            <TaskCreateTimeWrapper>
                                {changeJSTDate(state.task.created_at)}
                            </TaskCreateTimeWrapper>
                        </UnFinishedWrapper> 
                    :
                        <FinishedWrapper>
                            <TaskUpdateTimeWrapper>
                                {changeJSTDate(state.task.updated_at)}
                            </TaskUpdateTimeWrapper>
                        </FinishedWrapper>
                    }
                    </TaskStatusTImeWrapper>
                </TaskStatusWrapper>
                <TaskDetailCardButtom>
                    <ThemeProvider theme={ButtonTheme}>
                        <TaskDetailFinisheButtomWrapper>
                            <MaterialUICommonButton onClick={() => TaskFinisiheHandle()} btnLabel={TASK_TEXT.TASK_FINISH_BUTTOM_LABEL}></MaterialUICommonButton>
                        </TaskDetailFinisheButtomWrapper>
                    </ThemeProvider>
                    <ThemeProvider theme={RedButtonTheme}>       
                        <TaskDetailCancelButtomWrapper>
                            <MaterialUICommonButton onClick={() => TaskCancelHandle()} btnLabel={TASK_TEXT.TASK_CANCEL_BUTTOM_LABEL} ></MaterialUICommonButton>
                        </TaskDetailCancelButtomWrapper> 
                    </ThemeProvider>
                </TaskDetailCardButtom>
                <MaterialUISimpleModal onClick={() => TaskCancelHandle()} btnLabel={TASK_TEXT.TASK_CANCEL_BUTTOM_LABEL}></MaterialUISimpleModal>
            </TaskDetailCardWrapper>
        </Fragment>
    )
}