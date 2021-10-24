import React, { Fragment, useReducer, useEffect } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import foodImage from "../images/food-image.jpg";
import { ThemeProvider } from '@material-ui/core/styles';
import { fetchUserApi } from "../apis/userApis";
import { initializeState, userActionTypes, userReducer } from "../reducer/userReducer";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { ButtonTheme } from "../style_constants";
import { userEditURL } from "../urls/index";
import { REQUEST_STATE, USER_HEADER_TITLE, USER_LABEL } from "../constants";
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';

const UserHeaderWrapper = styled.h1`
  margin-top:5%;
  margin-left:5%;
`;

const UserDetailWrapper = styled.div`
    text-align:left;
`;

const UserImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
`;

const UserName = styled.h1`
    margin-top:5%;
    margin-bottom:0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const UserRatingWrapper = styled.div`
`;

const UserPrice = styled.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const UserDesicription = styled.div`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

const UserEditButton = styled.div`
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
      <UserHeaderWrapper>
        {USER_HEADER_TITLE.USER_DETAIL}
      </UserHeaderWrapper>
      <UserDetailWrapper>
        <UserImage src={foodImage} alt="foodImage"></UserImage>
        <UserName>
          {state.user.name}
        </UserName>
        <UserRatingWrapper>
          <Rating name="read-only" value={state.user.valuation} readOnly />
        </UserRatingWrapper>
        <UserPrice>
          {state.user.point}
        </UserPrice>
        <UserDesicription>
          {state.user.address}
        </UserDesicription>
        <UserEditButton>
          <ThemeProvider theme={ButtonTheme}>
            <MaterialUICommonButton onClick={onClickEditHandle} btnLabel={"編集する"} />
          </ThemeProvider>
        </UserEditButton>
      </UserDetailWrapper>
    </Fragment>
  )
}
