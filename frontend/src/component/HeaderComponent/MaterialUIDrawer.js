import React, { Fragment, useEffect, useReducer, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { MaterialUIDrawerList } from "../HeaderComponent/MaterialUIDrawerList";
import { headerInitializeState, headerActionTypes, headerReducer } from "../../reducer/headerReducer";
import { SessionState, SessionDispatch } from "../../context/Context";

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
  const state = useContext(SessionState);
  const dispatch = useContext(SessionDispatch);

  //DrawerのON,OFFを制御する
  const toggleDrawer = () => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    dispatch({ type: headerActionTypes.CLOSEDRAWER });
  };

  return (
    <Fragment>
      <SwipeableDrawer
        open={state.isOpenDrawer}
        onClose={() => dispatch({ type: headerActionTypes.CLOSEDRAWER })}
        onOpen={() => dispatch({ type: headerActionTypes.OPENDRAWER })}
      >
        <div
          role="presentation"
          onClick={() => dispatch({ type: headerActionTypes.CLOSEDRAWER })}
          onKeyDown={() => dispatch({ type: headerActionTypes.CLOSEDRAWER })}
        >
          {MaterialUIDrawerList()}
        </div>
      </SwipeableDrawer>
    </Fragment>
  );
}
