import React, { Fragment, useReducer, useState, useContext } from "react";
import media from "styled-media-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { guestCreateApi } from "../apis/guestApis";
import { GuestDispatch, GuestState, MessageDispatch, MessageState } from "../context/Context";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { guestActivateURL, guestCreateURL } from "../urls/index";
import { HTTP_STATUS_CODE, SIGNUP_TEXT } from "../constants";
import { guestSessionActionTypes } from "../reducer/guestSessionReducer";
import { messageActionTypes } from "../reducer/messageReducer";
import { validateName, validateEmail } from "../AppFunction";
import { MaterialUITextField } from "../component/MaterialUITextField";
import CircularProgress from '@material-ui/core/CircularProgress';

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

const UserCreateWrapper = styled.div`
    margin-left:10%;
    margin-right:10%;
`;

const HeaderWrapper = styled.h1`
`;

const UserCreateSubmitWrapper = styled.div`
    padding-top:1%;
    text-align: right;
    // ${media.lessThan("small")`
    //     margin-left:80%;
    // `}
`;

export const GuestCreate = () => {
    const guestState = useContext(GuestState);
    const guestDispatch = useContext(GuestDispatch);
    const messageState = useContext(MessageState);
    const messageDispatch = useContext(MessageDispatch);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function onKeyDownEnter(event) {
        handleSubmit()
    }

    function handleSubmit() {
        setLoading(true);
        try {
            validateName(name);
            validateEmail(email);
            guestCreateApi(name, email)
                .then((data) => {
                    console.log(guestState)
                    // guestDispatch({
                    //     type: guestSessionActionTypes.SET_GUEST,
                    //     payload: {
                    //         guest: data.guest
                    //     },
                    // })
                    messageDispatch({
                        type: messageActionTypes.SET_MESSAGE,
                        payload: {
                            message: SIGNUP_TEXT.SUCCESS_SIGNUP_MESSAGE
                        },
                    })
                    // setLoading(false);
                    console.log(guestState)
                    history.push(guestActivateURL)
                })
                .catch((e) => {
                    setLoading(false);
                    console.log("しっぱい！")
                    // if (e.response.status === HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY) {
                    messageDispatch({
                        type: messageActionTypes.SET_ERROR_MESSAGE,
                        payload: {
                            errorMessage: SIGNUP_TEXT.USER_SIGNUP_ERROR
                        },
                    })
                    history.push(guestCreateURL)
                    // } else {
                    //     throw e;
                    // }
                })
        } catch (e) {
            setLoading(false);
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
            {
                loading ?
                    <CircleWrapper>
                        <CircularProgress />
                    </CircleWrapper>
                    :
                    <UserCreateWrapper>
                        <HeaderWrapper>
                            {SIGNUP_TEXT.SIGN_UP_TITLE}
                        </HeaderWrapper>
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
                        <UserCreateSubmitWrapper>
                            <CommonReloadButton
                                onClick={handleSubmit}
                                btnLabel={SIGNUP_TEXT.SIGN_UP_BUTTON_LABEL}
                            />
                        </UserCreateSubmitWrapper>
                    </UserCreateWrapper>
            }
        </Fragment>
    )
}
