import React, {Fragment,useEffect} from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import { initializeState } from "../reducer/foodCreateReducer";

import {UserDispatch,UserState} from "../context/Context";

const UserCreateCard = styled.div``;

export const UserCreate = () => {
    const [state,dispatch] = useReducer(UserCreateReducer,initializeState)
    const history = useHistory();

    function SubmitHandle() {
        createUserApi(state.user)
        .then((data) => {
            console.log(data)
            history.pushState(userShowHistory(1))
        })
        .catch(e => console.log(e))
    }
    return(
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {USER_HEADER_TITLE.USER_CREATE}
                </UserCreateHeader>
                <UserDispatch.Provide value={dispatch}>
                    <UserState.Provide value={state}>
                        <UserCreateCard></UserCreateCard>
                    </UserState.Provide>
                </UserDispatch.Provide>
            </UserCreateWrapper>
        </Fragment>
    )
}