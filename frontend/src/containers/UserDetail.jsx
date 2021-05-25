import React, {Fragment,useReducer,seContext, useEffect} from 'react';
import styled from "styled-components";
import {fetchUserApi} from "../apis/userApis";
import {state,dispatch} from "../context/Context";
import {initializeState,usersActionTypes,userDetailReducer} from "../reducer/userDetailReducer";
import ContainedButton from "../component/MaterialUICommonBotton";
import {userEdit} from "../urls/index";
import {USER_HEADER_TITLE} from "../constants";

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
    dispatch({type:usersActionTypes.FETCHING});
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
      <UserDetailWrapper>
        <UserHeaderWrapper>
          {USER_HEADER_TITLE.UserDetail}
        </UserHeaderWrapper>  
        <UserName>
          {state.user.name}
        </UserName>
        <Userpoint>
          {state.user.point}
        </Userpoint>
        <UserDescription>
          {state.user.detail}
        </UserDescription>
        <UserEditButton>
          <ContainedButton href={userEdit} />
        </UserEditButton>
      </UserDetailWrapper>  
    </Fragment>
    )
}