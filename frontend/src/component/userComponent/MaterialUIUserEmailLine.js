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

//userのメールアドレスを設定するためのTextFieldコンポーネント
export function MaterialUIUserEmailLine({ label, onKeyDown }) {
  const classes = useStyles();
  const state = useContext(UserState);
  const dispatch = useContext(UserDispatch);

  const handleChange = (event) => {
    dispatch({
      type: userActionTypes.SETTINGUSEREMAIL,
      payload: {
        value: event.target.value
      }
    })
  };

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
                label={label}
                variant="outlined"
                fullWidth
                value={state.user.email}
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    onKeyDown(event)
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
