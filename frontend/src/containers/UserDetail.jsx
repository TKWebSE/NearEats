import React, {Fragment,useReducer,useEffect} from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeProvider } from '@material-ui/core/styles';
import {fetchUserApi} from "../apis/userApis";
import {initializeState,usersActionTypes,userDetailReducer} from "../reducer/userDetailReducer";
import ContainedButton from "../component/MaterialUICommonBotton";
import {ButtonTheme} from "../style_constants";
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
    console.log(state)
    fetchUserApi(match.params.userId)
    .then((data) => {
        dispatch({
          type:usersActionTypes.FETCH_SUCCESS,
          payload:{
            user:data.user
          }
        });
        console.log(state)
      })
    .catch((e) => console.log(e));
  },[]);
  
  return (
    <Fragment>
      <UserHeaderWrapper>
        {USER_HEADER_TITLE.UserDetail}
      </UserHeaderWrapper> 
        {
          REQUEST_STATE.LOADING === state.fetchState?
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
              {/* {state.user.name} */}
            </UserName>
            <Userpoint>
              {/* {state.user.point} */}
            </Userpoint>
            <UserDescription>
              {/* {state.user.address} */}
            </UserDescription>
            <UserEditButton>
              <ThemeProvider theme={ButtonTheme}>
                <ContainedButton href={userEdit} />
              </ThemeProvider>
            </UserEditButton>
          </UserDetailWrapper>
        } 
    </Fragment>
    )
}