import React, { Fragment } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import Rating from '@material-ui/lab/Rating';
import { USER_LABEL } from "../../constants";

const UserCardWrapper = styled.div`
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


const UserAddressWrapper = styled.h2`
`;

const UserAddress = styled.h2`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

export const UserDetailCard = (user) => {
  return (
    <Fragment>
      <UserCardWrapper>
        <UserImage src={foodImage} alt="foodImage"></UserImage>
        <UserName>
          {user.name}
        </UserName>
        <UserRatingWrapper>
          <Rating name="read-only" value={user.valuation} readOnly />
        </UserRatingWrapper>
        <UserAddressWrapper>
          {USER_LABEL.USER_ADDRESS}
        </UserAddressWrapper>
        <UserAddress>
          {user.address}
        </UserAddress>
      </UserCardWrapper>
    </Fragment>
  )
}
