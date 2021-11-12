import React, { Fragment, useReducer, useEffect, useContext } from "react";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router";
import { fetchUserApi, userUpdateApi } from "../apis/userApis";
import { REQUEST_STATE, USER_HEADER_TITLE } from "../constants";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { userShowURL } from "../urls/index";
import { ThemeProvider } from '@material-ui/core/styles';
import { UserEditCard } from "../component/userComponent/UserEditCard";
import { ButtonTheme } from "../style_constants";
import { SaveButton } from "../component/MaterialUISaveButton";
import { SessionState, SessionDispatch, UserDispatch, UserState } from '../context/Context';
import { foodsIndexURL } from "../urls/index";

const FoodEditHeader = styled.h1`
    margin-top:5%;
    margin-left:7%;
`;

const UserEditCardWrapper = styled.div`
    margin-left:5%;
    margin-right:5%;
`;
const UserEditButton = styled.div`
    margin-left:80%;
`;


export const UserEdit = ({ match }) => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const [state, dispatch] = useReducer(userReducer, initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: userActionTypes.FETCHING });
        if (match.params.userId === SessionAuthState.currentUser.id.toString()) {
            fetchUserApi(match.params.userId)
                .then((data) => {
                    dispatch({
                        type: userActionTypes.FETCH_SUCCESS,
                        payload: {
                            user: data.user
                        },
                    })
                })
                .catch(e => console.log(e));
        } else {
            history.push(foodsIndexURL);
        }
    }, []);

    function submitHandle() {
        userUpdateApi(state.user)
            .then(
                history.push(userShowURL(state.user.id))
            )
    }

    return (
        <Fragment>
            <FoodEditHeader>
                {USER_HEADER_TITLE.USER_EDIT}
            </FoodEditHeader>
            {
                REQUEST_STATE.OK === state.fetchState ?
                    <Fragment>
                        <UserEditCardWrapper>
                            <UserDispatch.Provider value={dispatch}>
                                <UserState.Provider value={state}>
                                    <UserEditCard />
                                </UserState.Provider>
                            </UserDispatch.Provider>
                        </UserEditCardWrapper>
                        <UserEditButton>
                            <ThemeProvider theme={ButtonTheme}>
                                <SaveButton onClick={submitHandle} />
                            </ThemeProvider>
                        </UserEditButton>
                    </Fragment>
                    :
                    <Fragment>
                        <Skeleton variant="rect" width={450} height={300} />
                    </Fragment>
            }
        </Fragment>
    )
}
