import { Fragment } from "react"
import media from "styled-media-query";
import styled from "styled-components";
import { SETTING_TEXT } from "../constants";

const UserSettingWrapper = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;

const BuyUserPointWrapper = styled.div`
border: solid;
border-color: #F0F0F0 ;
color:black;
border-width:2px;
display: flex;
justify-content:space-between;
height:30%;
width:100%;
text-align:center;
`;

const EditUserInfoWrapper = styled.div``;

const EditUserAuthInfoWrapper = styled.div``;

const LogoutWrapper = styled.div``;

const DeleteUserWrapper = styled.div``;

export const Setting = () => {

  function handleUserDelete() {
    console.log("userDeleteeeeeeeeeeeeeee!!!!")
  }

  return (
    <Fragment>
      <UserSettingWrapper>
        <BuyUserPointWrapper>
          {SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
        </BuyUserPointWrapper>
        <EditUserInfoWrapper>
          {SETTING_TEXT.EDIT_USER_INFO_LINK_TEXT}
        </EditUserInfoWrapper>
        <EditUserAuthInfoWrapper>
          {SETTING_TEXT.EDIT_USER_AUTH_INFO_LINK_TEXT}
        </EditUserAuthInfoWrapper>
        <LogoutWrapper>
          {SETTING_TEXT.LOGOUT_LINK_TEXT}
        </LogoutWrapper>
        <DeleteUserWrapper onClick={() => { handleUserDelete() }}>
          {SETTING_TEXT.DELETE_USER_LINK_TEXT}
        </DeleteUserWrapper>
      </UserSettingWrapper>
    </Fragment>
  )
}
