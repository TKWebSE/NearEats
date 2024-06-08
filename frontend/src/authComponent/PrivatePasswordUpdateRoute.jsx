import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";
import { SessionState, SessionDispatch, GuestDispatch, GuestState } from "../context/Context";
import { sessionActionTypes } from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import { isLoginApi } from "../apis/sessionApis";
import { guestShowApi } from "../apis/guestApis";
import { guestSessionActionTypes } from "../reducer/guestSessionReducer";
import { homeURL, guestCreateURL, foodsIndexURL } from "../urls/index";
import { REQUEST_STATE } from "../constants";
import CircularProgress from '@material-ui/core/CircularProgress';

const CircleWrapper = styled.div`
  text-align:center;
  padding-top:25%;
`;

export function PrivatePasswordUpdateRoute(props) {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const location = useLocation();
  const history = useHistory();
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  useEffect(() => {
    if (!(query.get('reset_password_token'))) {
      history.push(foodsIndexURL)
    }
    isLoginApi()
      .then((data) => {
        if (data !== null && data !== undefined) {
          SessionAuthDispatch({
            type: sessionActionTypes.ISLOGIN,
            payload: {
              data: data
            },
          })
        }
      })
  }, [location.pathname])

  return (
    <Fragment>
      {
        SessionAuthState.fetchSessionState === REQUEST_STATE.OK ?
          SessionAuthState.isLogin ?
            <Route {...props} />
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
      }
    </Fragment>
  )
}
