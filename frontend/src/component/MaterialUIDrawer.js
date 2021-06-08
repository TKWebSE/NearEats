import React, { Fragment, useEffect, useReducer} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import {MaterialUIDrawerList} from "../component/MaterialUIDrawerList";
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

    dispacth({type:headerActionTypes.CLOSEDRAWER});
  };

  return (
    <Fragment>
          <Button onClick={() => dispacth({type:headerActionTypes.OPENDRAWER})}>buttomDEATH</Button>
          <SwipeableDrawer
            open={state.isOpenDrawer}
            onClose={() => dispacth({type:headerActionTypes.CLOSEDRAWER})}
            onOpen={() => dispacth({type:headerActionTypes.OPENDRAWER})}
          >
            <div 
              role="presentation"
              onClick={() => dispacth({type:headerActionTypes.CLOSEDRAWER})}
              onKeyDown={() => dispacth({type:headerActionTypes.CLOSEDRAWER})}
            >
            {MaterialUIDrawerList()}
            </div>
          </SwipeableDrawer>
    </Fragment>
  );
}
