import { Fragment, useContext } from "react"
import media from "styled-media-query";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";
import { useHistory } from "react-router";
import { userEditURL, homeURL, buyPointURL, userEmailEditURL, userPasswordEditURL } from "../urls/index";
import { SETTING_TEXT } from "../constants";
import { SessionState, SessionDispatch } from "../context/Context";
import { sessionActionTypes } from "../reducer/sessionReducer";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingRectangleModalComponent from "../component/settingComponent/SettingRectangleModalComponent";
import SettingRectangleComponent from "../component/settingComponent/SettingRectangleComponent";
import SettingRectangleModalInModalComponent from "../component/settingComponent/SettingRectangleModaInModallComponent";
import { signOutApi } from "../apis/sessionApis";
import { deleteAllFoodForOneUserApi } from "../apis/foodApis";
import { userDelete } from "../apis/userApis";

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
  const SessionUserState = useContext(SessionState);
  const SessionUserDispatch = useContext(SessionDispatch);
  const history = useHistory();

  function handleBuyPoint() {
    history.push(buyPointURL);
  }

  function handleEditUser() {
    history.push(userEditURL(SessionUserState.currentUser.id));
  }

  function handleEditEmail() {
    history.push(userEmailEditURL);
  }

  function handleEditPassWord() {
    history.push(userPasswordEditURL);
  }

  function handleSignOut() {
    signOutApi()
      .then((data) => {
        SessionUserDispatch({
          type: sessionActionTypes.SIGNOUT,
        });
      })
    history.push(homeURL)
  }


  function handleDeleteUser() {
    console.log("userDeleteeeeeeeeeeeeeee!!!!")
    deleteAllFoodForOneUserApi(SessionUserState.currentUser)
      .then((data) => {
        userDelete(SessionUserState.currentUser)
          .then((data) => {
            SessionUserDispatch({
              type: sessionActionTypes.SIGNOUT,
            });
          })
        history.push(homeURL)
      })
  }

  return (
    <Fragment>
      <ThemeProvider theme={ButtonTheme}>
        <UserSettingWrapper>
          <SettingRectangleComponent
            Icon={AddCircleIcon}
            text={SETTING_TEXT.BUY_USER_POINT_LINK_TEXT}
            onClick={() => handleBuyPoint()}
          />
          <SettingRectangleComponent
            Icon={PersonAddIcon}
            text={SETTING_TEXT.EDIT_USER_INFO_LINK_TEXT}
            onClick={() => handleEditUser()}
          />
          <SettingRectangleComponent
            Icon={EmailIcon}
            text={SETTING_TEXT.EDIT_EMAIL_LINK_TEXT}
            onClick={() => handleEditEmail()}
          />
          <SettingRectangleComponent
            Icon={VerifiedUserIcon}
            text={SETTING_TEXT.EDIT_PASSWORD_LINK_TEXT}
            onClick={() => handleEditPassWord()}
          />
          <SettingRectangleComponent
            Icon={MeetingRoomIcon}
            text={SETTING_TEXT.LOGOUT_LINK_TEXT}
            onClick={() => handleSignOut()}
          />
          <SettingRectangleModalInModalComponent
            Icon={DeleteForeverIcon}
            text={SETTING_TEXT.DELETE_USER_LINK_TEXT}
            onClick={() => handleDeleteUser()}
            modalTilte={SETTING_TEXT.DELETE_USER_MODAL_TITLE}
            modalText={SETTING_TEXT.DELETE_USER_MODAL_TEXT}
            modalVerificationTitle={SETTING_TEXT.DELETE_USER_VERIFICATION_MODAL_TITLE}
            modalVerificationText={SETTING_TEXT.DELETE_USER_VERIFICATION_MODAL_TEXT}
          />
        </UserSettingWrapper>
      </ThemeProvider>
    </Fragment >
  )
}
