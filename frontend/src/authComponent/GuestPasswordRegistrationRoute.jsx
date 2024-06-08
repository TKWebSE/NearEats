import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";
import { GuestDispatch, GuestState } from "../context/Context";
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

export function GuestPasswordRegistrationRoute(props) {
  const guestState = useContext(GuestState);
  const guestDispatch = useContext(GuestDispatch);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!(Cookies.get("guest"))) {
      history.push(homeURL)
    }
    isLoginApi()
      .then((data) => {
        if (data.is_login) {
          history.push(foodsIndexURL)
        } else {
          guestShowApi()
            .then((data) => {
              guestDispatch({
                type: guestSessionActionTypes.SET_GUEST,
                payload: {
                  guest: data.guest
                },
              })
            })
            .catch((e) => {
              guestDispatch({
                type: guestSessionActionTypes.SET_GUEST,
                payload: {
                  guest: null
                },
              })
              console.log(e)
            })
        }
      })
  }, [location.pathname])

  console.log(guestState)

  return (
    <Fragment>
      {
        guestState.fetchState === REQUEST_STATE.OK ?
          guestState.guest && guestState.activate ?
            <Route {...props} />
            :
            <Redirect
              to={{
                pathname: guestCreateURL,
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
