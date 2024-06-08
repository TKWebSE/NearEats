import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { NotFoundCatComponent } from "../component/notFoundComponent/NotFoundCatComponent";
import { useHistory } from "react-router-dom";
import { fetchTaskIndexApi } from "../apis/taskApis";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeState, tasksActionTypes, taskListReducer } from "../reducer/taskListReducer";
import { initializeFoodListState, foodsListActionTypes, foodsListReducer } from "../reducer/foodsListReducer";
import { REQUEST_STATE, TASK_INDEX_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../constants";
import { MyTaskIndexCard } from "../component/orderComponent/MyTaskIndexCard";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { foodCreateURL, myTaskShowURL } from "../urls/index";
import { ButtonTheme } from "../style_constants";

const MyTaskWrapper = styled.div`
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
    margin-bottom:5%;
`;

const MyTaskIndexTitle = styled.h1`
    font-size:250%;
    ${media.lessThan("large")`
        font-size:230%;
    `}
    ${media.lessThan("medium")`
        font-size:150%;
    `}
    ${media.lessThan("small")`
       font-size:100%;
    `}
`;

const NotExistTaskWrapper = styled.div`
    padding-top:5%;
    padding-left:26%;
    position:relative;
    ${media.lessThan("medium")`
        padding-left:14%;
    `}
    ${media.lessThan("small")`
        padding-left:0%;
    `}
`;

const FinishTaskWrapper = styled.div`
    margin-bottom:1%;
    background-color:lightcyan;
`;

const CancelExistTaskWrapper = styled.div`
    margin-bottom:1%;
    background-color:darkgray;
`;

const ExistTaskWrapper = styled.div`
    padding-bottom:1%;
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

const SkeltonTaskWrapper = styled.div`
    width:430%;
    padding-bottom:10%;
    ${media.lessThan("small")`
        padding-bottom:20%;
    `}
`;

export const MyTaskIndex = () => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state, dispatch] = useReducer(taskListReducer, initializeState);
    const [foodsState, foodsDispatch] = useReducer(foodsListReducer, initializeFoodListState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: tasksActionTypes.FETCHING })
        console.log(SessionAuthState)
        fetchTaskIndexApi(SessionAuthState.currentUser.id)
            .then((data) => {
                console.log(data)
                dispatch({
                    type: tasksActionTypes.FETCH_SUCCESS,
                    payload: {
                        tasks: data.tasks,
                    },
                });
                foodsDispatch({
                    type: foodsListActionTypes.FETCH_SUCCESS,
                    payload: {
                        foodsList: data.foods,
                    },
                });
            })
            .catch((e) => console.log(e))
    }, [])

    function gotoFoodCreateHandle() {
        history.push(foodCreateURL);
    }

    return (
        <Fragment>
            <MyTaskWrapper>
                <MyTaskIndexTitle>
                    {TASK_INDEX_TEXT.MYTASK_INDEX_TITLE}
                </MyTaskIndexTitle>
                {
                    state.fetchState === REQUEST_STATE.OK ?
                        state.tasks === [] || state.tasks[0] === undefined ?
                            <NotExistTaskWrapper>
                                <NotFoundCatComponent
                                    firstText={TASK_INDEX_TEXT.NOT_EXIST_TASK_TEXT}
                                    secondText={TASK_INDEX_TEXT.LETS_CREATE_FOOD_TEXT}
                                    btnLabel={TASK_INDEX_TEXT.GOTO_FOOD_CREATE_BUTTON_LABEL}
                                    onClick={() => gotoFoodCreateHandle()}
                                />
                            </NotExistTaskWrapper>
                            :
                            foodsState.foodsList.map((food, f) =>
                                state.tasks.map((task, t) =>
                                    <div>
                                        <Fragment>
                                            {food.id === task.food_id ?
                                                task.order_status === ORDER_TASK_STATUS_NUMBERS.COMPLETE_ORDER ?
                                                    <FinishTaskWrapper>
                                                        <MyTaskIndexCard task={task} food={food} />
                                                    </FinishTaskWrapper>
                                                    :
                                                    task.order_status === ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL || task.order_status === ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL ?
                                                        <CancelExistTaskWrapper key={t}>
                                                            <MyTaskIndexCard task={task} food={food} />
                                                        </CancelExistTaskWrapper>
                                                        :
                                                        <Link to={myTaskShowURL(task.id)} style={{ textDecoration: 'none' }}>
                                                            <ExistTaskWrapper key={t}>
                                                                <MyTaskIndexCard task={task} food={food} />
                                                            </ExistTaskWrapper>
                                                        </Link>
                                                :
                                                <div></div>
                                            }
                                        </Fragment>
                                    </div>
                                ))
                        :
                        <SkeltonsWrapper>
                            <SkeltonCardWrapper>
                                <SkeltonTaskWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonTaskWrapper>
                                <SkeltonTaskWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonTaskWrapper>
                                <SkeltonTaskWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonTaskWrapper>
                                <SkeltonTaskWrapper>
                                    <Skeleton variant="rect" height={100} />
                                </SkeltonTaskWrapper>
                            </SkeltonCardWrapper>
                        </SkeltonsWrapper>
                }
            </MyTaskWrapper>
        </Fragment>
    )
}
