import React, { Fragment, useReducer, useEffect } from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeProvider } from '@material-ui/core/styles';
import { fetchUserApi } from "../apis/userApis";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { ButtonTheme } from "../style_constants";
import { userEditURL } from "../urls/index";
import { REQUEST_STATE, USER_HEADER_TITLE } from "../constants";
import { UserDetailCard } from "../component/userComponent/UserDetailCard";
import { useHistory } from "react-router-dom";
import { USER_LABEL } from "../constants";


const DetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const LoadingWrapper = styled.div`
`;

const UserDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const UserCardWrapper = styled.div`
    margin-bottom:5%;
`;

export const UserDetail = ({ match }) => {
  const [state, dispatch] = useReducer(userReducer, initializeState);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: userActionTypes.FETCHING });
    fetchUserApi(match.params.userId)
      .then((data) => {
        dispatch({
          type: userActionTypes.FETCH_SUCCESS,
          payload: {
            user: data.user
          }
        });
      })
      .catch(e => console.log(e));
  }, []);

  function onClickEditHandle() {
    history.push(userEditURL(state.user.id))
  }

  return (
    <Fragment>
      <DetailWrapper>
        <UserDetailHeader>
          {USER_HEADER_TITLE.USER_DETAIL}
        </UserDetailHeader>
        {
          REQUEST_STATE.LOADING === state.fetchState ?
            <Fragment>
              <LoadingWrapper>
                <Skeleton variant="rect" width={450} height={300} />
              </LoadingWrapper>
            </Fragment>
            :
            <Fragment>
              <UserCardWrapper>
                <UserDetailCard {...state.user}></UserDetailCard>
              </UserCardWrapper>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton onClick={onClickEditHandle} btnLabel={"編集する"} />
              </ThemeProvider>
            </Fragment>
        }
      </DetailWrapper>
    </Fragment>
  )
}
