import React, { useState, useReducer, useContext, useEffect } from 'react';
import styled from "styled-components";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { SwipeableTemporaryDrawer } from "./MaterialUIDrawer";
import { headerInitializeState, headerActionTypes, headerReducer } from "../../../reducer/headerReducer";
import { sessionActionTypes } from "../../../reducer/sessionReducer";
import { SessionDispatch, SessionState } from "../../../context/Context";
import { Link } from "react-router-dom";
import { foodsIndexURL } from "../../../urls/index";
import { HOME_TEXT, HEADER_TEXT } from "../../../constants";
import { signOutApi } from "../../../apis/sessionApis";
import { useHistory } from "react-router-dom";
import { homeURL, buyPointURL } from "../../../urls/index";
import MaterialUILocationIconModal from "./desktopOnly/MaterialUILocationIconModal";
import MaterialUILocationModbileModal from "./mobileOnly/MaterialUILocationModbileModal";
import { COLORS } from "../../../style_constants";
import { MaterialUICommonButton } from "../../MaterialUICommonButton";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const TitleWrapper = styled.div`
  color: #FFF;
`;

const LocationWrapper = styled.div`
  padding-left:1%;
  display:flex;
`;

const PointWrapper = styled.div`
  padding-left:1%;
  display:flex;
`;

//ヘッダーのファンクション
export default function MaterialUIPrivateHeader() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [state, dispacth] = useReducer(headerReducer, headerInitializeState);
  const SessionUserState = useContext(SessionState);
  const SessionUserDispatch = useContext(SessionDispatch);
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(SessionUserState.searchWord === null ? "" : SessionUserState.searchWord);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSetLocation = () => {
    console.log("せいこうーーーーー")
  }

  const onKeyPressSerchWord = (event) => {
    if (event.which === 13) {
      SessionUserDispatch({
        type: sessionActionTypes.SETTINGSEARCHWORD,
        payload: {
          searchWord: searchValue,
        },
      });
      history.push(foodsIndexURL)
    }
  }

  function handlePoint() {
    history.push(buyPointURL);
  }

  //左サイドバーを制御する
  const handleDrawer = () => {
    if (state.isOpenDrawer) {
      dispacth({ type: headerActionTypes.CLOSEDRAWER })
    } else {
      dispacth({ type: headerActionTypes.OPENDRAWER })
    }
  }

  function handleNotice() {
    console.log("handleNotice")
  }

  function handleTaskNotification() {
    console.log("handleTaskNotification")
  }

  const handleSignOut = () => {
    signOutApi()
      .then((data) => {
        SessionUserDispatch({
          type: sessionActionTypes.SIGNOUT,
        });
      })
    handleMenuClose();
    history.push(homeURL)
  }
  //画面サイズが通常時の右側の三点ボタン
  const menuId = 'primary-search-account-menu';
  const renderLocation = (
    <LocationWrapper onClick={() => handleSetLocation()}>
      <MaterialUILocationIconModal
        onClick={() => handleSetLocation()}
        modalTilte={HEADER_TEXT.NOWLOCATION_MODAL_TITLE}
        modalText={HEADER_TEXT.NOWLOCATION_MODAL_TEXT}
        nowLocation={SessionUserState.nowLocation === undefined || SessionUserState.nowLocation === null ? SessionUserState.currentUser.city : SessionUserState.nowLocation}
      >
      </MaterialUILocationIconModal>
    </LocationWrapper>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{HEADER_TEXT.PROFILE_TEXT}</MenuItem>
      <MenuItem onClick={handleSignOut}>{HEADER_TEXT.SIGNOUT_TEXT}</MenuItem>
    </Menu>
  );
  //ポイントのボタン
  const renderPoint = (
    <PointWrapper>
      <MaterialUICommonButton
        onClick={() => handlePoint()}
        btnLabel={SessionUserState.currentUser.point + "P"}
      />
    </PointWrapper >
  );
  const renderMobilePoimt = (
    <PointWrapper>
      <MaterialUICommonButton
        onClick={() => handlePoint()}
        btnLabel={SessionUserState.currentUser.point + "P"}
      />
    </PointWrapper >
  );

  //画面が小さくなった時に適用される右側の三点ボタン
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileLocation = (
    <LocationWrapper id={mobileMenuId} onClick={() => handleSetLocation()}>
      <MaterialUILocationModbileModal
        id={mobileMenuId}
        onClick={() => handleSetLocation()}
        modalTilte={HEADER_TEXT.NOWLOCATION_MODAL_TITLE}
        modalText={HEADER_TEXT.NOWLOCATION_MODAL_TEXT}
        nowLocation={SessionUserState.nowLocation === undefined || SessionUserState.nowLocation === null ? SessionUserState.currentUser.city : SessionUserState.nowLocation}
      >
      </MaterialUILocationModbileModal>
    </LocationWrapper>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem color="red">
        <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => handleNotice}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit" onClick={() => handleTaskNotification}>
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <TitleWrapper>
            <Link to={foodsIndexURL} style={{ textDecoration: 'none', color: '#FFF' }}>
              <Typography className={classes.title} variant="h5" noWrap textprimary={"#000"}>
                {HOME_TEXT.HOME_TITLE}
              </Typography>
            </Link>
          </TitleWrapper>
          <div className={classes.sectionDesktop}>
            {renderLocation}
          </div>
          <div className={classes.sectionMobile}>
            {renderMobileLocation}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search foods…"
              value={searchValue}
              onKeyPress={(event) =>
                onKeyPressSerchWord(event)
              }
              onChange={(event) => {
                setSearchValue(event.target.value)
              }
              }
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <PointWrapper className="MuiInputBase-root makeStyles-inputRoot-245">
            <div className={classes.sectionDesktop}>
              {renderPoint}
            </div>
            <div className={classes.sectionMobile}>
              {renderMobilePoimt}
            </div>
          </PointWrapper>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => handleNotice}>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => handleTaskNotification}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <SessionDispatch.Provider value={dispacth}>
        <SessionState.Provider value={state}>
          <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
        </SessionState.Provider>
      </SessionDispatch.Provider>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
