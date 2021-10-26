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


const UserAddressLabel = styled.h2`
`;

const UserAddress = styled.h2`
    margin-bottom:5%;
    overflow-wrap: break-word;
`;

const UserEmailLabel = styled.div`
`;

const UserEmail = styled.div`
`;

const UserPassWordLabel = styled.div`
`;

const UserPassWord = styled.div`
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
        <UserAddressLabel>
          {USER_LABEL.USER_ADDRESS}
        </UserAddressLabel>
        <UserAddress>
          {user.address}
        </UserAddress>
        <UserEmailLabel>
          {USER_LABEL.USER_MAIL}
        </UserEmailLabel>
        <UserEmail>
          {user.email}
        </UserEmail>
        <UserPassWordLabel>
          { }
        </UserPassWordLabel>
        <UserPassWord>
          { }
        </UserPassWord>
      </UserCardWrapper>
    </Fragment>
  )
}
