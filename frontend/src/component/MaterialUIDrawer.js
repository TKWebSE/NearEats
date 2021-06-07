import React, { Fragment, useEffect, useReducer} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {headerInitializeState,headerActionTypes,headerReducer} from "../reducer/headerReducer";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, dispacth] = useReducer(headerReducer,headerInitializeState);

  //DrawerのON,OFFを制御する
  const toggleDrawer = () => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // dispacth({type:headerActionTypes.OPENDRAWER});
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  console.log(state)
  return (
    <Fragment>
          <Button onClick={() => dispacth({type:headerActionTypes.OPENDRAWER})}>buttomDEATH</Button>
          <SwipeableDrawer
            open={state.isOpenDrawer}
            // open={true}
            onClose={() => dispacth({type:headerActionTypes.CLOSEDRAWER})}
            onOpen={() => dispacth({type:headerActionTypes.OPENDRAWER})}
          >
            {list()}
          </SwipeableDrawer>
    </Fragment>
  );
}
