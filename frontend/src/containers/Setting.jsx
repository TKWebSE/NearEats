import { Fragment, useContext } from "react"
import media from "styled-media-query";
import styled from "styled-components";
import { useHistory } from "react-router";
import { SETTING_TEXT } from "../constants";
import { userEditURL } from "../urls/index";
import { SessionState, SessionDispatch } from '../context/Context';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingRectangleModalComponent from "../component/settingComponent/SettingRectangleModalComponent";


const UserSettingWrapper = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  padding-top:5%;
`;

const BuyUserPointWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
`;

const BuyUserPointIcon = styled.div`
  padding-top:1%;
  padding-right:1%;
`;

const BuyUserPointText = styled.div`
  padding-top:1%;
`;

const EditUserInfoWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
`;

const EditUserInfoIcon = styled.div`
  padding-top:1%;
`;

const EditUserInfoText = styled.div`
  padding-top:1%;
  padding-left:1%;
`;

const EditUserAuthInfoWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
  `;

const EditUserAuthInfoIcon = styled.div`
  padding-top:1%;
`;

const EditUserAuthInfoText = styled.div`
  padding-top:1%;
  padding-left:1%;
`;

const LogoutWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
  `;

const LogoutIcon = styled.div`
  padding-top:1%;
`;

const LogoutText = styled.div`
  padding-top:1%;
  padding-left:1%;
`;

const DeleteUserWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
`;

const DeleteUserIcon = styled.div`
padding-top:1%;
`;

const DeleteUserText = styled.div`
padding-top:1%;
padding-left:1%;
`;

export const Setting = () => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch)
  const history = useHistory();

  function handleBuyPoint() {
    console.log("handleBuyPoint")
  }

  function handleEditUser() {
    history.push(userEditURL(SessionAuthState.currentUser.id))
    console.log("handleEditUser")
  }

  function handleEditUserAuthInfo() {
    console.log("handleEditUserAuthInfo")
  }

  function handleLogout() {
    console.log("handleLogout")
  }

  function handleDeleteUser() {
    console.log("userDeleteeeeeeeeeeeeeee!!!!")
  }

  return (
    <Fragment>
      <UserSettingWrapper>
        <SettingRectangleModalComponent
          Icon={AddCircleIcon}
          text={SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
          onClick={console.log("sssss")}
          modalTilte={SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
          modalText={SETTING_TEXT.BUY_USER_POINT_MODAL_TEXT}
        />
        <BuyUserPointWrapper onClick={() => { handleBuyPoint() }}>
          <BuyUserPointIcon>
            <AddCircleIcon fontSize='large' />
          </BuyUserPointIcon>
          <BuyUserPointText>
            {SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
          </BuyUserPointText>
        </BuyUserPointWrapper>
        <EditUserInfoWrapper onClick={() => { handleEditUser() }}>
          <EditUserInfoIcon>
            <PersonAddIcon fontSize='large' />
          </EditUserInfoIcon>
          <EditUserInfoText>
            {SETTING_TEXT.EDIT_USER_INFO_LINK_TEXT}
          </EditUserInfoText>
        </EditUserInfoWrapper>
        <EditUserAuthInfoWrapper onClick={() => { handleEditUserAuthInfo() }}>
          <EditUserAuthInfoIcon>
            <VerifiedUserIcon fontSize='large' />
          </EditUserAuthInfoIcon>
          <EditUserAuthInfoText>
            {SETTING_TEXT.EDIT_USER_AUTH_INFO_LINK_TEXT}
          </EditUserAuthInfoText>
        </EditUserAuthInfoWrapper>
        <LogoutWrapper onClick={() => { handleLogout() }}>
          <LogoutIcon>
            <MeetingRoomIcon fontSize='large'>
            </MeetingRoomIcon>
          </LogoutIcon>
          <LogoutText>
            {SETTING_TEXT.LOGOUT_LINK_TEXT}
          </LogoutText>
        </LogoutWrapper>
        <DeleteUserWrapper onClick={() => { handleDeleteUser() }}>
          <DeleteUserIcon>
            <DeleteForeverIcon fontSize='large' />
          </DeleteUserIcon>
          <DeleteUserText>
            {SETTING_TEXT.DELETE_USER_LINK_TEXT}
          </DeleteUserText>
        </DeleteUserWrapper>
      </UserSettingWrapper>
    </Fragment >
  )
}
