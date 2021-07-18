import React,{useContext,useEffect} from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import {sessionActionTypes} from "../reducer/sessionReducer";
import {homeURL} from "../urls/index"
import {isLoginApi} from "../apis/sessionApis";


export function PrivateOnlyRoute(props){
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    
    //ログイン状態をページ遷移のタイミングで確認する
    useEffect(() => {
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
    },[])
    console.log(SessionAuthState)

    return(
        SessionAuthState.isLogin?
            <Route {...props}
                match={props.computedMatch}
            />
        :
            <Redirect
                to={{
                pathname: homeURL,
                }}
            />
    )
  }