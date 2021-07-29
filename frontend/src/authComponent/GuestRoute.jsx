import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import {
    Route,
    Redirect,
    useLocation,
  } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import {sessionActionTypes} from "../reducer/sessionReducer";
import {foodsIndexURL} from "../urls/index";
import {useHistory} from "react-router-dom";
import {isLoginApi} from "../apis/sessionApis";
import { REQUEST_STATE } from "../constants";
import CircularProgress from '@material-ui/core/CircularProgress';

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

export function GuestOnlyRoute(props){
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const location = useLocation();

    //ログイン状態をページ遷移のタイミングで確認する
    useEffect(() => {
        SessionAuthDispatch({
            type:sessionActionTypes.FETCHING,
        })
        isLoginApi()
        .then((data)=>{
            console.log(data)
        SessionAuthDispatch({
            type:sessionActionTypes.ISLOGIN,
            payload: {
                data:data
            },
        })
        })
        .catch((e) => console.log(e))
    },[location])
    console.log(SessionAuthState)

    return(
        SessionAuthState.fetchSessionState === REQUEST_STATE.OK?
            SessionAuthState.isLogin?
                <Redirect
                    to={{
                    pathname: foodsIndexURL,
                    }}
                /> 
            :
                <Route {...props}/>
        :
        <CircleWrapper>
            <CircularProgress/>
        </CircleWrapper>  
    )
  }