import React, {Fragment,useReducer,useEffect} from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import {fetchUserApi} from "../apis/userApis";
import {state,dispatch} from "../context/Context";
import {initializeState,usersActionTypes,userDetailReducer} from "../reducer/userDetailReducer";
import ContainedButton from "../component/MaterialUICommonBotton";
import {userEdit} from "../urls/index";
import {REQUEST_STATE, USER_HEADER_TITLE} from "../constants";

const ContentsList = styled.div`
`;

const UserDetailWrapper = styled.div`
`;

const UserHeaderWrapper = styled.h1`
`;

const UserName = styled.div`
`;

const Userpoint = styled.div`
`;

const UserDescription = styled.div`
`;

const UserEditButton = styled.div`
`;

export const UserDetail = ({match}) => { 
  const [state,dispatch] = useReducer(userDetailReducer,initializeState);
  
  useEffect(() => {
    dispatch({type:usersActionTypes.FETCHING})
    fetchUserApi(match.params.userId)
    .then((data) => {
        dispatch({
          type:usersActionTypes.FETCH_SUCCESS,
          payload:{
            user:data.user
          }
        });
      })
    .catch((e) => console.log(e));
  },[]);
  
  return (
    <Fragment>
      <UserHeaderWrapper>
        {USER_HEADER_TITLE.UserDetail}
      </UserHeaderWrapper> 
        {
          state.fetchState === REQUEST_STATE.LOADING?
            <ContentsList>
              <Fragment>
                  <Skeleton variant="rect" width={450} height={300} />
                  <Skeleton variant="rect" width={450} height={300} />
                  <Skeleton variant="rect" width={450} height={300} />
              </Fragment>
            </ContentsList>
          :
          <UserDetailWrapper>
            
            <UserName>
              state.user.name
            </UserName>
            <Userpoint>
              state.user.point
            </Userpoint>
            <UserDescription>
              state.user.detail
            </UserDescription>
            <UserEditButton>
              <ContainedButton href={userEdit} />
            </UserEditButton>
          </UserDetailWrapper>
        } 
    </Fragment>
    )
}