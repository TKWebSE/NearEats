import React, { Fragment } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import foodImage from "../../images/food-image.jpg";
import Rating from '@material-ui/lab/Rating';
import { USER_LABEL } from "../../constants";
import { MaterialUIReadOnlyTextField } from "../MaterialUIReadOnlyTextField";

const UserCardWrapper = styled.div`
    text-align:left;
`;

const RatingTitle = styled.h1`
    margin-top:3%;
    margin-bottom:1%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size:150%;
`;

const UserRatingWrapper = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom:3%;
`;

const UserWrapper = styled.div`
`;

export const UserDetailCard = (user) => {
  return (
    <Fragment>
      <UserCardWrapper>
        <UserRatingWrapper>
          <RatingTitle>
            評価
          </RatingTitle>
          <Rating
            name="read-only"
            size={'large'}
            value={user.valuation} readOnly
          />
        </UserRatingWrapper>
        <UserWrapper>
          <MaterialUIReadOnlyTextField label={"名前"} value={user.name} />
        </UserWrapper>
        <UserWrapper>
          <MaterialUIReadOnlyTextField label={"所持ポイント"} value={user.point} />
        </UserWrapper>
        <UserWrapper>
          <MaterialUIReadOnlyTextField label={"Email"} value={user.email} />
        </UserWrapper>
        <UserWrapper>
          <MaterialUIReadOnlyTextField label={"住所"} value={user.address} />
        </UserWrapper>
        <UserWrapper>
          <MaterialUIReadOnlyTextField label={"配達エリア"} value={user.city} />
        </UserWrapper>

      </UserCardWrapper>
    </Fragment>
  )
}
