import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { userActionTypes } from "../../reducer/userReducer";
import { UserState, UserDispatch } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

//signInで使用するEmailのテキストフィールドコンポーネント
export function MaterialUISetPasswordConfirmationLine() {
  const classes = useStyles();
  const state = useContext(UserState)
  const dispatch = useContext(UserDispatch)

  const handleChange = (event) => {
    console.log(state)
    dispatch({
      type: userActionTypes.SETTINGUSERPASSWORDCONFIRMATION,
      payload: {
        value: event.target.value
      }
    })
  };
  console.log(state)
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
                label="パスワード確認"
                variant="outlined"
                fullWidth
                value={state.user.passwordConfirmation}
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
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
