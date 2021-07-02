import React, {Fragment,useReducer,useEffect} from 'react';
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeProvider } from '@material-ui/core/styles';
import {fetchUserApi} from "../apis/userApis";
import {initializeState,userActionTypes,userReducer} from "../reducer/userReducer";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {userEditHistory} from "../urls/index";
import {REQUEST_STATE, USER_HEADER_TITLE} from "../constants";
import {useHistory} from "react-router-dom";
import {USER_LABEL} from "../constants";

const ContentsList = styled.div`
`;

const UserHeaderWrapper = styled.h1`
  margin-top:5%;
  margin-left:5%;
`;

const UserDetailWrapper = styled.div`
  margin-left:5%;
  vertical-align:  middle; 
`;
const UserNameWrapper = styled.div`
  display: table;
`;
const UserNameLabel = styled.h1` 
  display: table-cell;
`;

const UserName = styled.div`
  margin-bottom:1%;
`;

const UserPointWrapper = styled.h2`
  display: table;
`;

const UserPointLabel = styled.h2`
  display: table-cell;
`;

const Userpoint = styled.div`
  margin-bottom:1%;
`;

const UserAddressWrapper = styled.div`
  display: table;
`;

const UserAddressLabel = styled.h2`
  display: table-cell;
`;

const UserAddress = styled.div`
  display: table-cell;
`;

const UserEditButton = styled.div`
  margin-left:90%;
  text-align: right;
`;

export const UserDetail = ({match}) => { 
  const [state,dispatch] = useReducer(userReducer,initializeState);
  const history = useHistory();
  
  useEffect(() => {
    dispatch({type:userActionTypes.FETCHING});
    console.log(state)
    fetchUserApi(match.params.userId)
      .then((data) => {
        dispatch({
          type:userActionTypes.FETCH_SUCCESS,
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
            <UserNameWrapper>
                <UserNameLabel>
                  {USER_LABEL.USER_NAME}
                </UserNameLabel>
                <UserName>
                  {state.user.name}
                </UserName>
            </UserNameWrapper>
            <UserPointWrapper>
              <UserPointLabel>
                {USER_LABEL.USER_POINT}
              </UserPointLabel>
              <Userpoint>
                {state.user.point}
              </Userpoint>
            </UserPointWrapper>
            <UserAddressWrapper>
              <UserAddressLabel>
                {USER_LABEL.USER_ADDRESS}
              </UserAddressLabel>
              <UserAddress>
                {state.user.address}
              </UserAddress>
            </UserAddressWrapper>
            <UserEditButton>
              <ThemeProvider theme={ButtonTheme}>
                <MaterialUICommonButton onClick={onClickEditHandle} btnLabel={"編集する"}/>
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