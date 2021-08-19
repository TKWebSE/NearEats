import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import {fetchTaskIndexApi} from "../apis/taskApis";
import {SessionState,SessionDispatch,TaskState,TaskDispatch} from "../context/Context";
import {initializeState,tasksActionTypes,taskListReducer} from "../reducer/taskListReducer";
import {REQUEST_STATE,ORDER_HEADER_TITLE,NOTFOUND_FOOD_TEXT} from "../constants";
import {TaskDetailCard} from "../component/orderComponent/TaskDetailCard";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {foodCreateURL} from "../urls/index";
import {ButtonTheme} from "../style_constants";

const taskDetailWrapper = styled.div`
`;

const TaskDetailCardWrapper = styled.div`
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


export const MyTaskDetail = ({match}) => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state,dispatch] = useReducer(taskListReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type: tasksActionTypes.FETCHING})
        fetchTaskIndexApi(SessionAuthState.user.id)
        .then((data) => {
            dispatch({
                type: tasksActionTypes.FETCH_SUCCESS,
                payload: {
                    tasksList: data.foods
                },
            });
        })
        .catch((e) => console.log(e))
    },[])

    function gotoFoodCreateHandle() {
        history.push(foodCreateURL);
    }

    return (
        <Fragment>
            <taskDetailWrapper>
                {
                state.fetchState === REQUEST_STATE.OK?
                <TaskDispatch.Provider value={dispatch}>
                    <TaskState.Provider value={state}>
                        <TaskDetailCardWrapper>
                            <TaskDetailCard/>
                        </TaskDetailCardWrapper>
                    </TaskState.Provider>
                </TaskDispatch.Provider>
                :
                <SkeltonsWrapper>
                    <SkeltonCardWrapper>
                        <SkeltonImageWrapper>
                            <Skeleton variant="rect" height={180}/>
                        </SkeltonImageWrapper>
                        <SkeltonTitleWrapper>
                            <Skeleton variant="rect" height={40}/>
                        </SkeltonTitleWrapper>
                    </SkeltonCardWrapper>
                </SkeltonsWrapper>
                }

            </taskDetailWrapper>
       </Fragment>
    )
}