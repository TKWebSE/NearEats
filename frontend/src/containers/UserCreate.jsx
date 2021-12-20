import React, { Fragment, useReducer, useContext } from "react";
import media from "styled-media-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import { userCreateApi } from "../apis/userApis";
import { initializeState, userReducer, userActionTypes } from "../reducer/userReducer";
import { SessionDispatch } from "../context/Context";
import { UserDispatch, UserState, MessageDispatch, MessageState } from "../context/Context";
import { UserCreateCard } from "../component/userComponent/UserCreateCard";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { signInURL, userCreateURL } from "../urls/index";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { HTTP_STATUS_CODE, SIGNUP_TEXT } from "../constants";
import { messageActionTypes } from "../reducer/messageReducer";

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
    const [state, dispatch] = useReducer(userReducer, initializeState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const history = useHistory();

    function SubmitHandle() {
        userCreateApi(state.user)
            .then((data) => {
                messageDispatch({
                    type: messageActionTypes.SET_MESSAGE,
                    payload: {
                        message: SIGNUP_TEXT.SUCCESS_SIGNUP_MESSAGE
                    },
                })
                history.push(signInURL)
            })
            .catch((e) => {
                if (e.response.status === HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY) {
                    messageDispatch({
                        type: messageActionTypes.SET_ERROR_MESSAGE,
                        payload: {
                            errorMessage: SIGNUP_TEXT.USER_SIGNUP_ERROR
                        },
                    })
                    history.push(userCreateURL)
                } else {
                    throw e;
                }
            })
    }

    return (
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {SIGNUP_TEXT.SIGN_UP_TITLE}
                </UserCreateHeader>
                <UserDispatch.Provider value={dispatch}>
                    <UserState.Provider value={state}>
                        <UserCreateCardWrapper>
                            <UserCreateCard></UserCreateCard>
                        </UserCreateCardWrapper>
                        <UserCreateSubmitWrapper>
                            <ThemeProvider theme={ButtonTheme}>
                                <MaterialUICommonButton onClick={SubmitHandle} btnLabel={SIGNUP_TEXT.SIGN_UP_BUTTON_LABEL} />
                            </ThemeProvider>
                        </UserCreateSubmitWrapper>
                    </UserState.Provider>
                </UserDispatch.Provider>
            </UserCreateWrapper>
        </Fragment>
    )
}
