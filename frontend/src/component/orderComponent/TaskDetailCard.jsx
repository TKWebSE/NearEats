import React,{ Fragment,useContext, useState } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme,RedButtonTheme} from "../../style_constants";
import {TaskState,TaskDispatch} from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import {changeJSTDate} from "../../AppFunction";
import {TASK_TEXT} from "../../constants";
import {taskStatusText} from "../orderComponent/fetchTaskStatusComponet";
import {MaterialUICommonButton} from "../MaterialUICommonButton";


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



export const TaskDetailCard = (task) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)
  const [statusValue,setState] = useState(taskStatusText(state.task.order_status))
    console.log(statusValue)

    function TaskCancelHandle() {

    }

    function TaskFinisiheHandle() {

    }
    console.log(RedButtonTheme)

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
                         {statusValue.STATUS_TEXT}
                    </TaskStatusTextWrapper>
                    <TaskStatusTImeWrapper>
                    {
                        task.order_status === 0?
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
                            <MaterialUICommonButton onClick={() => TaskCancelHandle()} btnLabel={TASK_TEXT.TASK_CANCEL_BUTTOM_LABEL}></MaterialUICommonButton>
                        </TaskDetailCancelButtomWrapper> 
                    </ThemeProvider>
                </TaskDetailCardButtom>
            </TaskDetailCardWrapper>
        </Fragment>
    )
}