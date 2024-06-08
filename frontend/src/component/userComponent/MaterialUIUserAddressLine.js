import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { userActionTypes } from "../../reducer/userReducer";
import { UserState, UserDispatch } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

//userの住所を設定するためのTextFieldコンポーネント
export function MaterialUIUserAddressLine(onKeyPress) {
  const classes = useStyles();
  const state = useContext(UserState);
  const dispatch = useContext(UserDispatch);

  const handleChange = (event) => {
    dispatch({
      type: userActionTypes.SETTINGUSERADDRESS,
      payload: {
        value: event.target.value
      }
    })
  };

  const onKeyDownHandle = (event) => {
    onKeyPress(event)
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
              <TextField
                id="outlined-basic"
                label="住所"
                variant="outlined"
                fullWidth
                value={state.user.address}
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    onKeyDownHandle(event);
                  }
                }
                }
              />
            </form>
          </Fragment>
      }
    </Fragment>
  );
}
