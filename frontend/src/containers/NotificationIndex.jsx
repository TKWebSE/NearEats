import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import media from "styled-media-query";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { NotFoundCatComponent } from "../component/notFoundComponent/NotFoundCatComponent";
import { NOTIFICATIONS_TEXT, REQUEST_STATE } from "../constants";
import { SessionState, SessionDispatch, TaskState, TaskDispatch } from "../context/Context";
import { initializeNotifications, notificationsActionTypes, notificationsReducer } from "../reducer/notificationsReducer";
import { notificationActionTypes } from "../reducer/notificationReducer";
import { fetchNotificationsApi } from "../apis/notificationApis";
import { notificationURL } from "../urls/index";

import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { MaintenanceNoticeTitle } from "../component/notificationComponent/MaintenanceNotice";
import { UpdateCompleteTitle } from "../component/notificationComponent/UpdateComplete";

const NotificationWrapper = styled.div`
  margin-left:10%;
  margin-right:10%;
`;

const Title = styled.div`
  margin-top:5%;
  margin-bottom:4%;
  // margin-left:20%;
  font-size:260%;
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

const NotificationsCard = styled.div`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  // display: flex;
  // justify-content:space-between;
  height:30%;
  width:100%;
  font-size:250%;
  padding-top:1%;
  padding-left:1%;
  padding-bottom:1%;
  margin-bottom:4%;
  display:flex
`;

const IconWrapper = styled.div`
  padding-right:1%;
`;

const ListTitle = styled.div`
// font-size:100%;
`;

export const NotificationIndex = () => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch)
  const [state, dispatch] = useReducer(notificationsReducer, initializeNotifications);
  const history = useHistory();

  function handleClick(notificationId) {
    history.push(notificationURL(notificationId))
  }

  return (
    <Fragment>
      <NotificationWrapper>
        <Title>
          {NOTIFICATIONS_TEXT.NOTIFICATIONS_TITLE}
        </Title>
        <NotificationsCard onClick={() => handleClick(notificationActionTypes.MAINTENANCENOTICE)}>
          <IconWrapper>
            <SettingsSuggestIcon fontSize={'large'} />
          </IconWrapper>

          <ListTitle>
            {MaintenanceNoticeTitle}
          </ListTitle>
        </NotificationsCard>
        <NotificationsCard onClick={() => handleClick(notificationActionTypes.UPDATECOMPLETE)}>
          <IconWrapper>
            <UpgradeIcon fontSize={'large'} />
          </IconWrapper>
          <ListTitle>
            {UpdateCompleteTitle}
          </ListTitle>
        </NotificationsCard>
      </NotificationWrapper>
    </Fragment >
  )
}
