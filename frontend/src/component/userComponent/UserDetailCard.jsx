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
    margin-bottom:1%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size:200%;
`;

const UserRatingWrapper = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const UserUnderDetailWrapper = styled.h2`
  display: flex;
  padding-top:5%;
  ${media.greaterThan("large")`
  
  `}
`;

const UserLabelWrapper = styled.div`
  color:grey;
  // width:40%;
  font-size:150%;
`;

const UserDataWrapper = styled.div`
  padding-left:2%;
  font-size:150%;
`;

const UserPointLabel = styled.div`
  padding-bottom:1%;
`;

const UserLocationLabel = styled.div`
`;

const UserAddressLabel = styled.div`
  padding-bottom:1%;
`;

const UserEmailLabel = styled.div`
  padding-bottom:1%;
`;

const UserPassWordLabel = styled.div`
  padding-bottom:1%;
`;

const UserPoint = styled.div`
  padding-bottom:1%;
`;

const UserLocation = styled.div`
`;

const UserAddress = styled.div`
  padding-bottom:1%;
`;

const UserEmail = styled.div`
  padding-bottom:1%;
`;

const UserPassWord = styled.div`
  padding-bottom:1%;
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
          <Rating
            name="read-only"
            size={'large'}
            value={user.valuation} readOnly
          />
        </UserRatingWrapper>
        <UserUnderDetailWrapper>
          <UserLabelWrapper>
            <UserPointLabel>
              {USER_LABEL.USER_POINTLABEL}
            </UserPointLabel>
            <UserLocationLabel>
              {USER_LABEL.USER_LOCATION_LABEL}
            </UserLocationLabel>
            <UserAddressLabel>
              {USER_LABEL.USER_ADDRESS_LABEL}
            </UserAddressLabel>
            <UserEmailLabel>
              {USER_LABEL.USER_MAIL_LABEL}
            </UserEmailLabel>
            <UserPassWordLabel>
              { }
            </UserPassWordLabel>
          </UserLabelWrapper>
          <UserDataWrapper>
            <UserPoint>
              {user.point}
            </UserPoint>
            <UserLocation>
              {user.city}
            </UserLocation>
            <UserAddress>
              {user.address}
            </UserAddress>
            <UserEmail>
              {user.email}
            </UserEmail>
            <UserPassWord>
              { }
            </UserPassWord>
          </UserDataWrapper>
        </UserUnderDetailWrapper>
      </UserCardWrapper>
    </Fragment>
  )
}
