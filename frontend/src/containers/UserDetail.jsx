import React, {Fragment,useReducer,useEffect} from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeProvider } from '@material-ui/core/styles';
import {fetchUserApi} from "../apis/userApis";
import {initializeState,usersActionTypes,userDetailReducer} from "../reducer/userDetailReducer";
import ContainedButton from "../component/MaterialUICommonBotton";
import {ButtonTheme} from "../style_constants";
import {userEditHistory} from "../urls/index";
import {REQUEST_STATE, USER_HEADER_TITLE} from "../constants";
import {useHistory} from "react-router-dom";

const ContentsList = styled.div`
`;

const UserHeaderWrapper = styled.h1`
  margin-top:5%;
  margin-left:5%;
`;

const UserDetailWrapper = styled.div`
  margin-left:5%;
`;

const UserName = styled.div`
  margin-bottom:1%;
`;

const Userpoint = styled.div`
  margin-bottom:1%;
`;

const UserDescription = styled.div`
  margin-bottom:1%;
`;

const UserEditButton = styled.div`
  margin-left:80%;
`;

export const UserDetail = ({match}) => { 
  const [state,dispatch] = useReducer(userDetailReducer,initializeState);
  const history = useHistory();
  
  useEffect(() => {
    dispatch({type:usersActionTypes.FETCHING});
    console.log(state)
    fetchUserApi(match.params.userId)
      .then((data) => {
        dispatch({
          type:usersActionTypes.FETCH_SUCCESS,
          payload:{
            user:data.user
          }
        });
        console.log(data)
      })
    .catch(e => console.log(e));
  },[]);
  
  function onClickEditHandle() {
    history.push(userEditHistory(state.user.id))
  }

  return (
    <Fragment>
      <UserHeaderWrapper>
        {USER_HEADER_TITLE.USER_DETAIL}
      </UserHeaderWrapper> 
        {
          REQUEST_STATE.OK === state.fetchState?
          <UserDetailWrapper>
            <UserName>
              {state.user.name}
            </UserName>
            <Userpoint>
              {state.user.point}
            </Userpoint>
            <UserDescription>
              {state.user.address}
            </UserDescription>
            <UserEditButton>
              <ThemeProvider theme={ButtonTheme}>
                <ContainedButton onClick={onClickEditHandle} />
              </ThemeProvider>
            </UserEditButton>
          </UserDetailWrapper>
          :
          <ContentsList>
              <Fragment>
                  <Skeleton variant="rect" width={450} height={300} />
                  <Skeleton variant="rect" width={450} height={300} />
                  <Skeleton variant="rect" width={450} height={300} />
              </Fragment>
            </ContentsList>
        } 
    </Fragment>
    )
}