import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import {
    Route,
    Redirect,
    useLocation,
} from "react-router-dom";
import { SessionState, SessionDispatch } from "../context/Context";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { homeURL } from "../urls/index"
import { isLoginApi } from "../apis/sessionApis";
import { REQUEST_STATE } from "../constants";
import CircularProgress from '@material-ui/core/CircularProgress';

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

export function PrivateOnlyRoute(props) {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    const location = useLocation();

    // ログイン状態をページ遷移のタイミングで確認する
    useEffect(() => {
        SessionAuthDispatch({
            type: sessionActionTypes.FETCHING,
        })
        console.log("Private側の認証確認中")
        isLoginApi()
            .then((data) => {
                SessionAuthDispatch({
                    type: sessionActionTypes.ISLOGIN,
                    payload: {
                        data: data
                    },
                });
            })
            .catch((e) => console.log(e))
    }, [location.pathname])

    return (
        SessionAuthState.fetchSessionState === REQUEST_STATE.OK ?
            SessionAuthState.isLogin ?
                <Route {...props}
                    match={props.computedMatch}
                />
                :
                <Redirect
                    to={{
                        pathname: homeURL,
                    }}
                />
            :
            <CircleWrapper>
                <CircularProgress />
            </CircleWrapper>
    )
}
