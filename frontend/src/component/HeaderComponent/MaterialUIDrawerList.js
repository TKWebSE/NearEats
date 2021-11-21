import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DRAWER_TEXT } from "../../constants";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import StoreIcon from '@material-ui/icons/Store';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { foodsIndexURL, foodCreateURL, myFoodsURL, myTaskIndexURL, userShowURL, ordersIndexURL, buyPointURL, settingURL } from "../../urls/index";
import { isLoginApi } from "../../apis/sessionApis";
import Cookies from "js-cookie";

export const MaterialUIDrawerList = () => {
    const history = useHistory();
    const userId = Cookies.get("user_id");

    function foodIndexLink() {
        history.push(foodsIndexURL);
    }

    function createFoodLink() {
        history.push(foodCreateURL);
    }

    function myFoodLink() {
        history.push(myFoodsURL);
    }

    function myTaskLink() {
        history.push(myTaskIndexURL);
    }

    //認証機能実装後改修予定(idを受け取る)
    function profileLink() {
        history.push(userShowURL(userId));
    }

    function ordersLink() {
        history.push(ordersIndexURL);
    }

    function buyPointLink() {
        history.push(buyPointURL)
    }

    function settingLink() {
        history.push(settingURL);
    }

    return (
        <div
            role="presentation"
        //   onClick={toggleDrawer(false)}
        //   onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button onClick={() => foodIndexLink()}>
                    <ListItemIcon><FastfoodIcon /></ListItemIcon>
                    <ListItemText primary={DRAWER_TEXT.FOOD_INDEX_TEXT} />
                </ListItem>
                <ListItem button onClick={() => createFoodLink()}>
                    <ListItemIcon><CloudUploadIcon /></ListItemIcon>
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
                <ListItem button onClick={() => ordersLink()}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={DRAWER_TEXT.ORDER_TEXT} />
                </ListItem>
                <ListItem button onClick={() => buyPointLink()}>
                    <ListItemIcon><AddCircleIcon /></ListItemIcon>
                    <ListItemText primary={DRAWER_TEXT.BUY_POINT_TEXT} />
                </ListItem>
                <ListItem button onClick={() => settingLink()}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary={DRAWER_TEXT.SETTING_TEXT} />
                </ListItem>
            </List>
        </div>
    )
};
