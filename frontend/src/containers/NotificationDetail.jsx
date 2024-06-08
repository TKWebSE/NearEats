import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import media from "styled-media-query";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { NOTIFICATIONS_TEXT, REQUEST_STATE } from "../constants";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeNotification, notificationActionTypes, notificationReducer } from "../reducer/notificationReducer";
import { fetchNotificationApi } from "../apis/notificationApis";

const NotificationWrapper = styled.div`
  margin-top:5%;
  margin-left:10%;
  margin-right:10%;
`;

const Title = styled.div`
  font-size:250%;
  ${media.lessThan("large")`
      font-size:230%;
  `}
  ${media.lessThan("medium")`
      font-size:150%;
  `}
  ${media.lessThan("small")`
    font-size:100%;
  `}
`;

const NotificationText = styled.div`
`;

const NotificationsCard = styled.div`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  justify-content:space-between;
  height:30%;
  width:100%;
`;

const ListTitle = styled.div`
  font-weight:bold;
`;

const SkeltonsWrapper = styled.div`
`;

const SkeltonCardWrapper = styled.div`
    margin-left:1%;
    width:23%;
    margin-right:1%;
    padding-bottom:5%;
    float: left;
`;

const SkeltonWrapper = styled.div`
    // width:430%;
    // padding-bottom:10%;
    // ${media.lessThan("small")`
    //     padding-bottom:20%;
    // `}
`;

export const NotificationDetail = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch)
  const [state, dispatch] = useReducer(notificationReducer, initializeNotification);

  useEffect(() => {
    dispatch({ type: notificationActionTypes.FETCHING })
    console.log(SessionAuthState)
    dispatch({
      type: match.params.notificationId,
    });
  }, [])

  return (
    <Fragment>
      <Fragment>
        {
          state.fetchState === REQUEST_STATE.OK ?
            <NotificationWrapper>
              {state.notification}
            </NotificationWrapper>
            :
            <SkeltonsWrapper>
              <SkeltonWrapper>
                <Skeleton variant="rect" width={450} height={300} />
              </SkeltonWrapper>
              <SkeltonWrapper>
                <Skeleton variant="rect" width={450} height={100} />
              </SkeltonWrapper>
            </SkeltonsWrapper>
        }
      </Fragment>
    </Fragment>
  )
}
