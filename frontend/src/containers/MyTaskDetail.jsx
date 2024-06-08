import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { fetchTaskApi, updateTaskApi } from "../apis/taskApis";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeState, taskActionTypes, taskReducer } from "../reducer/taskReducer";
import { foodInitializeState, foodActionTypes, foodReducer } from "../reducer/foodReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE, ORDER_TASK_STATUS_NUMBERS } from "../constants";
import { TaskDetailCard } from "../component/orderComponent/TaskDetailCard";
import { myTaskIndexURL, foodsIndexURL } from "../urls/index";
import { COLORS } from "../style_constants";

const TaskDetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const TaskDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const TaskDetailCardWrapper = styled.div`
    margin-bottom:5%;
`;

const SkeltonsWrapper = styled.div`
`;

const SkeltonCardWrapper = styled.div`
    margin-left:1%;
    width:23%;
    margin-right:1%;
    padding-bottom:5%;
    float: left;
`;

const SkeltonImageWrapper = styled.div`
`;

const SkeltonTitleWrapper = styled.div`
    padding-top:6%;
`;


export const MyTaskDetail = ({ match }) => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state, dispatch] = useReducer(taskReducer, initializeState);
    const [foodState, foodDispatch] = useReducer(foodReducer, foodInitializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: taskActionTypes.FETCHING })
        fetchTaskApi(match.params.orderId)
            .then((data) => {
                if (data.task.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL || data.task.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL) {
                    history.push(myTaskIndexURL)
                }
                if (data.task.make_user_id === SessionAuthState.currentUser.id) {
                    foodDispatch({
                        type: foodActionTypes.FETCH_SUCCESS,
                        payload: {
                            food: data.food
                        },
                    });
                    dispatch({
                        type: taskActionTypes.FETCH_TASK,
                        payload: {
                            task: data.task
                        },
                    });
                    dispatch({
                        type: taskActionTypes.FETCH_ORDER_USER,
                        payload: {
                            order_user: data.order_user[0]
                        },
                    });
                    dispatch({
                        type: taskActionTypes.FETCH_SUCCESS,
                    });
                } else {
                    history.push(foodsIndexURL)
                }

            })
            .catch((e) => console.log(e))
    }, [])

    function taskCancelHandle() {
        console.log("taskCancel")
        updateTaskApi(state.task, ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL)
            .then((data) => {
                history.push(myTaskIndexURL);
            })
    }

    function taskFinisiheHandle() {
        console.log("COMPLETE_ORDER")
        updateTaskApi(state.task, ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION)
            .then((data) => {
                history.push(myTaskIndexURL);
            })
    }

    console.log(state)

    return (
        <Fragment>
            <TaskDetailWrapper>
                <TaskDetailHeader>
                    {ORDER_HEADER_TITLE.TASK_DETAIL}
                </TaskDetailHeader>
                {
                    state.fetchState === REQUEST_STATE.OK ?
                        <TaskDetailCardWrapper>
                            <TaskDetailCard task={state.task} food={foodState.food} orderUser={state.order_user} cancelHandle={taskCancelHandle} finishHandle={taskFinisiheHandle} />
                        </TaskDetailCardWrapper>
                        :
                        <SkeltonsWrapper>
                            <SkeltonCardWrapper>
                                <SkeltonImageWrapper>
                                    <Skeleton variant="rect" height={180} />
                                </SkeltonImageWrapper>
                                <SkeltonTitleWrapper>
                                    <Skeleton variant="rect" height={40} />
                                </SkeltonTitleWrapper>
                            </SkeltonCardWrapper>
                        </SkeltonsWrapper>
                }
            </TaskDetailWrapper>
        </Fragment>
    )
}
