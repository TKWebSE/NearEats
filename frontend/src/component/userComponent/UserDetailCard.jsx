import React, { Fragment, useReducer, useEffect } from 'react';
import styled from "styled-components";
import media from "styled-media-query";

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

export const UserDetail = ({ match }) => {

  return (
    <Fragment>
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
