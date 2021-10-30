import { Fragment } from "react"
import media from "styled-media-query";
import styled from "styled-components";
import { SETTING_TEXT } from "../constants";

const UserSettingWrapper = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;

const BuyUserPointWrapper = styled.div`
`;

const DeleteUserWrapper = styled.div``;

export const Setting = () => {

  return (
    <Fragment>
      <UserSettingWrapper>
        <BuyUserPointWrapper>
          {SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
        </BuyUserPointWrapper>
        <DeleteUserWrapper>
          {SETTING_TEXT.DELETE_USER_LINK_TEXT}
        </DeleteUserWrapper>
      </UserSettingWrapper>
    </Fragment>
  )
}
