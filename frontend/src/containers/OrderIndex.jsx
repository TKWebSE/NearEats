import React, { Fragment, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import { fetchTaskIndexApi } from "../apis/taskApis";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeState, tasksActionTypes, taskListReducer } from "../reducer/taskListReducer";
import { REQUEST_STATE, ORDER_HEADER_TITLE, NOTFOUND_FOOD_TEXT } from "../constants";
import { OrderIndexCard } from "../component/orderComponent/OrderIndexCard";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { foodCreateURL, myTaskShowURL } from "../urls/index";
import { ButtonTheme } from "../style_constants";

const MyTaskWrapper = styled.div`
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
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
`;

const ExistTaskWrapper = styled.div`
    padding-bottom:1%;
`;


const NoFoodsListWrapper = styled.div`
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

const NotFoundCatWrapper = styled.div`
`;

const NotFoundCatImage = styled.img`
    ${media.lessThan("small")`
        width:120%;
    `}
`;

const NotExistTaskTextWrapper = styled.h3`
    position:absolute;
    top: 50%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const LetsUploadFoodsWrapper = styled.h3`
    position:absolute;
    top: 60%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const GotoFoodCreateWrapper = styled.div`
    position:absolute;
    top: 80%;
    left: 37%;
    ${media.lessThan("large")`
        left:40%;
    `}
    ${media.lessThan("medium")`
        left:34%;
    `}
    ${media.lessThan("small")`
        left:25%;
    `}
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

export const OrderIndex = () => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state, dispatch] = useReducer(taskListReducer, initializeState);
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
            })
            .catch((e) => console.log(e))
    }, [])

    function gotoFoodCreateHandle() {
        history.push(foodCreateURL);
    }
    console.log(state)
    return (
        <Fragment>
            <MyTaskWrapper>
                <MyTaskIndexTitle>
                    {ORDER_HEADER_TITLE.ORDER_INDEX_TITLE}
                </MyTaskIndexTitle>
                {
                    state.fetchState === REQUEST_STATE.OK ?
                        state.tasks === [] ?
                            <NotExistTaskWrapper>
                                <NotFoundCatWrapper>
                                    <NotFoundCatImage src={NotFoundCat} />
                                </NotFoundCatWrapper>
                                <NotExistTaskTextWrapper>
                                    {ORDER_HEADER_TITLE.NOT_EXIST_TASK_TEXT}
                                </NotExistTaskTextWrapper>
                                <LetsUploadFoodsWrapper>
                                    {ORDER_HEADER_TITLE.LETS_CREATE_FOOD_TEXT}
                                </LetsUploadFoodsWrapper>
                                <ThemeProvider theme={ButtonTheme}>
                                    <GotoFoodCreateWrapper>
                                        <MaterialUICommonButton onClick={() => gotoFoodCreateHandle()} btnLabel={NOTFOUND_FOOD_TEXT.GOTO_FOOD_CREATE_BUTTON_LABEL}></MaterialUICommonButton>
                                    </GotoFoodCreateWrapper>
                                </ThemeProvider>
                            </NotExistTaskWrapper>
                            :
                            state.tasks.map((task, i) =>
                                <Link to={myTaskShowURL(task.id)} style={{ textDecoration: 'none' }}>
                                    <TaskDispatch.Provider value={dispatch}>
                                        <TaskState.Provider value={state}>
                                            <ExistTaskWrapper key={i}>
                                                <OrderIndexCard task={task} />
                                            </ExistTaskWrapper>
                                        </TaskState.Provider>
                                    </TaskDispatch.Provider>
                                </Link>
                            )
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
            </MyTaskWrapper>
        </Fragment>
    )
}
