import React,{useContext} from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import {foodsIndexURL} from "../urls/index";


// export function GuestOnlyRoute({ component: Component}){
    
export function GuestOnlyRoute(props){
    const SessionAuthState = useContext(SessionState);

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