import React,{useContext} from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import {homeURL} from "../urls/index"


export function PrivateOnlyRoute(props){
// export function PrivateOnlyRoute({ component: Component},{props}){
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch);
    console.log(props.computedMatch)
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