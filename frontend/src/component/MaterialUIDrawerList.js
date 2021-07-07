import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {DRAWER_TEXT} from "../constants";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StoreIcon from '@material-ui/icons/Store';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {foodCreateHistory,userDetailHistory} from "../urls/index";
import {isLoginApi} from "../apis/sessionApis";

export const MaterialUIDrawerList = () => {
    const history = useHistory();

    function createFoodLink () {
        history.push(foodCreateHistory());
    }

    function myFoodLink () {
        history.push(userDetailHistory(1));
    }

    function myTaskLink () {
        history.push(userDetailHistory(1));
    }
    
    //認証機能実装後改修予定(idを受け取る)
    function profileLink () {
        history.push(userDetailHistory(1));
    }

    function orderLink () {
        history.push(userDetailHistory(1));
    }

    function settingLink () {
        history.push(userDetailHistory(1));
    }

    return (
    <div
      role="presentation"
    //   onClick={toggleDrawer(false)}
    //   onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem button onClick={() => isLoginApi()}>
            <ListItemIcon><FastfoodIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.FOOD_CREATE_TEXT} />
        </ListItem>
        <ListItem button onClick={() => createFoodLink()}>
            <ListItemIcon><FastfoodIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.FOOD_CREATE_TEXT} />
        </ListItem>
        <ListItem button onClick={() => myFoodLink()}>
            <ListItemIcon><StoreIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.MY_FOOD_TEXT} />
        </ListItem>
        <ListItem button onClick={() => myTaskLink()}>
            <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.TASK_TEXT} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => profileLink()}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.PROFILE_TEXT} />
        </ListItem>
        <ListItem button onClick={() => orderLink()}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.ORDER_TEXT} />
        </ListItem>
        <ListItem button onClick={() => settingLink()}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary={DRAWER_TEXT.SETTING_TEXT} />
        </ListItem>
      </List>
    </div>
    )
};