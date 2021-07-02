import React, {Fragment,useReducer,useEffect} from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import {userCreateApi} from "../apis/userApis";
import { initializeState,userReducer } from "../reducer/userReducer";
import {UserDispatch,UserState} from "../context/Context";
// import {userShowHistory} from "../urls/index";
import {UserCreateCard} from "../component/userComponent/UserCreateCard";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";

const UserCreateWrapper = styled.div`
    margin-left:10%;
    margin-right:10%;
`;

const UserCreateHeader = styled.h1`
`;

const UserCreateCardWrapper = styled.div`

`;

const UserCreateSubmitWrapper = styled.div`
    margin-left:90%;
    text-align: right;
`;

export const UserCreate = () => {
    const [state,dispatch] = useReducer(userReducer,initializeState)
    const history = useHistory();

    function SubmitHandle() {
        userCreateApi(state.user)
        .then((data) => {
            console.log(data)
            // history.pushState(userShowHistory(1))
        })
        .catch(e => console.log(e))
    }
    return(
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {USER_HEADER_TITLE.USER_CREATE}
                </UserCreateHeader>
                <UserCreateCardWrapper>
                    <UserDispatch.Provider value={dispatch}>
                        <UserState.Provider value={state}>
                            <UserCreateCard></UserCreateCard>
                        </UserState.Provider>
                    </UserDispatch.Provider>
                </UserCreateCardWrapper>
                <UserCreateSubmitWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <MaterialUICommonButton onClick={SubmitHandle} btnLabel={"作成"}/>
                    </ThemeProvider>
                </UserCreateSubmitWrapper>
            </UserCreateWrapper>
        </Fragment>
    )
}