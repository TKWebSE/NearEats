import React, { useContext, Fragment, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { makeStyles } from '@material-ui/core/styles';
import { locationConstans } from '../../locationConstants';
import { UserState, UserDispatch } from "../../context/Context";
import { USER_EDIT } from "../../constants";
import { userActionTypes } from "../../reducer/userReducer";

const animatedComponents = makeAnimated();

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export function LocationMultiSelect({ placeholederText, setLocation, nowSelectLocation }) {
  const classes = useStyles();
  const state = useContext(UserState);
  const dispatch = useContext(UserDispatch);

  function handleChange(event) {
    console.log(event)
    console.log(event.value)
    dispatch({
      type: userActionTypes.SETTINGUSERCITY,
      payload: {
        value: event.value
      }
    })
  }

  function onkeyPressHandle(e) {
    if (e.which === 13)
      console.log(e)
  }

  return (
    <Fragment>
      {
        state.user === undefined || state.user === null ?
          <Fragment>
            LOADING
          </Fragment>
          :
          <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
              <Select
                options={locationConstans}
                placeholder={USER_EDIT.NOWLOCATION_PLACEHOLDER_TEXT}
                defaultValue={{ label: state.user.city, value: state.user.city }}
                onChange={(event) => { handleChange(event) }}
                onKeyPress={(e) => onkeyPressHandle(e)}
              />
            </form>
          </Fragment>

      }
    </Fragment >
  );
}
