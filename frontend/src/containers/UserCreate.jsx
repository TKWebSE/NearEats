import React, {Fragment,useReducer,useContext} from "react";
import media from "styled-media-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import {userCreateApi} from "../apis/userApis";
import { initializeState,userReducer,userActionTypes} from "../reducer/userReducer";
import {SessionDispatch} from "../context/Context";
import {UserDispatch,UserState} from "../context/Context";
import {UserCreateCard} from "../component/userComponent/UserCreateCard";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import { ThemeProvider } from '@material-ui/core/styles';
import {ButtonTheme} from "../style_constants";
import {signInURL,userCreateURL} from "../urls/index";
import {sessionActionTypes} from "../reducer/sessionReducer";
import { HTTP_STATUS_CODE,MESSAGE_TEXT,ERROR_MESSAGE } from "../constants";
import {MaterialUIErrorSnackber} from "../component/MaterialUIErrorSnackber";

const UserCreateWrapper = styled.div`
    margin-left:10%;
    margin-right:10%;
`;

const UserCreateHeader = styled.h1`
`;

const MessageWrapper = styled.div`
    color:red;
    padding-left:1%;
`;

const UserCreateCardWrapper = styled.div`

`;

const UserCreateSubmitWrapper = styled.div`
    margin-left:90%;
    text-align: right;
    ${media.lessThan("small")`
        margin-left:80%;
    `}
`;

export const UserCreate = () => {
    const [state,dispatch] = useReducer(userReducer,initializeState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const history = useHistory();

    function SubmitHandle() {
        dispatch({
            type:userActionTypes.SETTINGMESSAGE,
            payload: {
                message:""
            },
        })
        userCreateApi(state.user)
        .then((data) => {
            SessionAuthDispatch({
                type:sessionActionTypes.SETTINGMESSAGE,
                payload: {
                    message: MESSAGE_TEXT.SUCCESS_SIGNUP_MESSAGE
                },
            })
            history.push(signInURL)
        })
        .catch((e) => {
            if(e.response.status === HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY){
                dispatch({
                    type:userActionTypes.SETTINGMESSAGE,
                    payload: {
                        message: ERROR_MESSAGE.USER_SIGNUP_ERROR
                    },
                })
                history.push(userCreateURL)
            } else {
                throw e;
            }
        })
    }

    return(
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {USER_HEADER_TITLE.USER_CREATE}
                </UserCreateHeader>
                    <UserDispatch.Provider value={dispatch}>
                        <UserState.Provider value={state}>
                        {
                            state.message !== ""?
                            <MessageWrapper>
                                <MaterialUIErrorSnackber message={state.message}/>
                            </MessageWrapper>
                            :
                            null
                        }
                        <UserCreateCardWrapper>
                                    <UserCreateCard></UserCreateCard>
                        </UserCreateCardWrapper>
                        <UserCreateSubmitWrapper>
                            <ThemeProvider theme={ButtonTheme}>
                                <MaterialUICommonButton onClick={SubmitHandle} btnLabel={"作成"}/>
                            </ThemeProvider>
                        </UserCreateSubmitWrapper>
                    </UserState.Provider>
                </UserDispatch.Provider>
            </UserCreateWrapper>
        </Fragment>
    )
}