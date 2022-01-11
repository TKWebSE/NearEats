import React, { Fragment, useReducer, useState, useContext } from "react";
import media from "styled-media-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import { userCreateApi } from "../apis/userApis";
import { initializeState, userReducer, userActionTypes } from "../reducer/userReducer";
import { SessionDispatch } from "../context/Context";
import { UserDispatch, UserState, MessageDispatch, MessageState } from "../context/Context";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { signInURL, userCreateURL } from "../urls/index";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { HTTP_STATUS_CODE, SIGNUP_TEXT } from "../constants";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateName, validateEmail, validateDoublePassword } from "../AppFunction";
import { PasswordTextField } from "../component/PasswordTextField";
import { MaterialUITextField } from "../component/MaterialUITextField";

const UserCreateWrapper = styled.div`
    margin-left:10%;
    margin-right:10%;
`;

const UserCreateHeader = styled.h1`
`;

const UserCreateSubmitWrapper = styled.div`
    padding-top:1%;
    text-align: right;
    // ${media.lessThan("small")`
    //     margin-left:80%;
    // `}
`;

export const UserCreate = () => {
    const [state, dispatch] = useReducer(userReducer, initializeState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const history = useHistory();

    function onKeyDownEnter(event) {
        handleSubmit()
    }

    function handleSubmit() {
        try {
            validateName(name);
            validateEmail(email);
            validateDoublePassword(password, passwordConfirmation);
            userCreateApi(name, email, password, passwordConfirmation)
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
        } catch (e) {
            messageDispatch({
                type: messageActionTypes.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: e
                },
            })
        }
    }

    return (
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {SIGNUP_TEXT.SIGN_UP_TITLE}
                </UserCreateHeader>
                <MaterialUITextField
                    label={SIGNUP_TEXT.USER_NAME_TEXTFIELD_LABEL}
                    value={name}
                    setValue={setName}
                    onKeyDown={onKeyDownEnter}
                />
                <MaterialUITextField
                    label={SIGNUP_TEXT.EMAIL_TEXTFIELD_LABEL}
                    value={email}
                    setValue={setEmail}
                    onKeyDown={onKeyDownEnter}
                />
                <PasswordTextField
                    label={SIGNUP_TEXT.PASSWORD_TEXTFIELD_LABEL}
                    value={password}
                    setValue={setPassword}
                    onKeyDown={onKeyDownEnter}
                />
                <PasswordTextField
                    label={SIGNUP_TEXT.PASSWORD_CONFIRMATION_TEXTFIELD_LABEL}
                    value={passwordConfirmation}
                    setValue={setPasswordConfirmation}
                    onKeyDown={onKeyDownEnter}
                />
                <UserCreateSubmitWrapper>
                    <CommonReloadButton
                        onClick={handleSubmit}
                        btnLabel={SIGNUP_TEXT.SIGN_UP_BUTTON_LABEL}
                    />
                </UserCreateSubmitWrapper>
            </UserCreateWrapper>
        </Fragment>
    )
}
