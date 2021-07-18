import React,{useContext,useEffect} from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import {sessionActionTypes} from "../reducer/sessionReducer";
import {foodsIndexURL} from "../urls/index";
import {useHistory} from "react-router-dom";
import {isLoginApi} from "../apis/sessionApis";

export function GuestOnlyRoute(props){
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)

    //ログイン状態をページ遷移のタイミングで確認する
    useEffect(() => {
        isLoginApi()
        .then((data)=>{
        SessionAuthDispatch({
            type:sessionActionTypes.ISLOGIN,
            payload: {
                data:data
            },
        })
        })
        .catch((e) => console.log(e))
    },[])
    console.log(SessionAuthState)
    return(
        SessionAuthState.isLogin?
            <Redirect
                to={{
                pathname: foodsIndexURL,
                }}
            /> 
        :
            <Route {...props}/>
    )
  }