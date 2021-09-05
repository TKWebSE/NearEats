import React, { Fragment, useContext, useState } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme, RedButtonTheme } from "../../style_constants";
import { TaskState, TaskDispatch } from "../../context/Context";
import foodImage from "../../images/food-image.jpg";
import { changeJSTDate } from "../../AppFunction";
import { TASK_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";
import { taskStatusTimeText } from "./taskStatusTimeText";
import { MaterialUICommonButton } from "../MaterialUICommonButton";
import MaterialUISimpleModal from "../MaterialUISimpleModal";
import { updateTaskApi } from "../../apis/taskApis";
import { useHistory } from "react-router-dom";
import { myTaskIndexURL } from "../../urls/index";
import { COLORS } from "../../style_constants";
import { taskStatusText } from "./taskStatusText";

const TaskDetailCardWrapper = styled.div`
    text-align:left;
`;

const TaskStatusWrapper = styled.div`
`;

const ImageStatusWrapper = styled.div`
    position:relative;
`;

const FoodImage = styled.img`
    width:100%;
    height:100%;
    margin-bottom:2%;
`;

const TaskStatus = styled.div`
    position:absolute;
    font-weight:bolder;
    top:0%;
    left:50;
    width:18%;
    margin-bottom:1%;
    background-color:red;
    text-align:center;
    color:white;
    padding:1%;
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

const FoodDescription = styled.h2`
`;

const OrderUserInfoWrapper = styled.div`
    border: solid;
    border-color: #F0F0F0 ;
    border-radius:5%;
    padding-top:1%;
    padding-left:1%;
    padding-right:1%;
    padding-bottom:1%;
`;

const OrderUserInfoText = styled.h2`
    color:${COLORS.STATUS_COLOR};
    margin-bottom:0;
`;

const OrderUserName = styled.h3`
    margin-top:1%;

`;

const OrderUserAddress = styled.div`
    margin-top:1%;
`;

const TaskStatusTextWrapper = styled.div`
    float:left;
`;

const TaskStatusTImeWrapper = styled.div`
`;

const TaskNotFinishedWrapper = styled.div`
`;

const UnFinishedWrapper = styled.div`
    display: flex;
`;

const TaskCreateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

const FinishedWrapper = styled.div`
    display: flex;
`;

const TaskUpdateTimeWrapper = styled.div`
    margin-bottom:5%;
`;

const TaskDetailCardButtom = styled.div`
    display: flex;
    margin-top:2%;
`;

const TaskDetailFinisheButtomWrapper = styled.div`
    margin:0 0 0 auto;
`;

const TaskDetailCancelButtomWrapper = styled.div`
`;



export const TaskDetailCard = () => {
    const state = useContext(TaskState);
    const dispatch = useContext(TaskDispatch)
    const history = useHistory();

    function taskCancelHandle() {
        console.log(state)
        updateTaskApi(state.task, ORDER_TASK_STATUS_NUMBERS.TASKCANCEL)
            .then((data) => {
                console.log(data)
                history.push(myTaskIndexURL);
            })
    }

    function taskFinisiheHandle() {
        updateTaskApi(state.task, ORDER_TASK_STATUS_NUMBERS.TASKFINISH)
            .then((data) => {
                console.log(data)
                history.push(myTaskIndexURL);
            })
    }

    return (
        <Fragment>
            <TaskDetailCardWrapper>
                <ImageStatusWrapper>
                    <FoodImage src={foodImage} alt="foodImage"></FoodImage>
                    <TaskStatus>
                        {taskStatusText(state.task.order_status).STATUS_TEXT}
                    </TaskStatus>
                </ImageStatusWrapper>
                <FoodName>
                    {state.task.name}
                </FoodName>
                <FoodPrice>
                    ￥{state.task.price}
                </FoodPrice>
                <FoodDescription>
                    {state.task.description}
                </FoodDescription>
                <TaskStatusWrapper>
                    <TaskStatusTextWrapper>
                        {taskStatusTimeText(state.task.order_status).STATUS_TEXT}
                    </TaskStatusTextWrapper>
                    <TaskStatusTImeWrapper>
                        {
                            state.task.order_status === 0 ?
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
                {
                    state.task.order_status === "0" ?
                        <TaskNotFinishedWrapper>
                            <OrderUserInfoText>
                                {TASK_TEXT.ORDER_INFO_TEXT}
                            </OrderUserInfoText>
                            <OrderUserInfoWrapper>
                                <OrderUserName>
                                    {state.order_user.name}
                                </OrderUserName>
                                <OrderUserAddress>
                                    {state.order_user.address}
                                </OrderUserAddress>
                            </OrderUserInfoWrapper>
                            <TaskDetailCardButtom>
                                <ThemeProvider theme={ButtonTheme}>
                                    <TaskDetailFinisheButtomWrapper>
                                        <MaterialUISimpleModal
                                            onClick={() => taskFinisiheHandle()}
                                            btnLabel={TASK_TEXT.TASK_FINISH_BUTTOM_LABEL}
                                            modalTilte={TASK_TEXT.TASK_FINISH_MODALTITLE}
                                            modalText={TASK_TEXT.TASK_FINISH_MODAL_TEXT}
                                        />
                                    </TaskDetailFinisheButtomWrapper>
                                    <TaskDetailCancelButtomWrapper>
                                        <MaterialUISimpleModal
                                            onClick={() => taskCancelHandle()}
                                            btnLabel={TASK_TEXT.TASK_CANCEL_BUTTOM_LABEL}
                                            modalTilte={TASK_TEXT.TASK_CANCEL_MODAL_TITLE}
                                            modalText={TASK_TEXT.TASK_CANCEL_MODAL_TEXT}
                                        />
                                    </TaskDetailCancelButtomWrapper>
                                </ThemeProvider>
                            </TaskDetailCardButtom>
                        </TaskNotFinishedWrapper>
                        :
                        null
                }
            </TaskDetailCardWrapper>
        </Fragment >
    )
}
