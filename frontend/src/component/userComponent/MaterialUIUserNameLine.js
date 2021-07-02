import React, { Fragment,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {userActionTypes} from "../../reducer/userReducer";
import {UserState,UserDispatch} from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

//userの名前を設定するためのTextFieldコンポーネント
export function MaterialUIUserNameLine() {
    const classes = useStyles();
    const state = useContext(UserState);
    const dispatch = useContext(UserDispatch);

    const handleChange = (event) => {
      dispatch({
            type:userActionTypes.SETTINGUSERNAME,
            payload:{
                name:event.target.value
            }
        })
    };

    return (
    <Fragment>
      {
      state.user === undefined || state.user === null?
      <Fragment>
          LOADING
      </Fragment>
      :
      <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="ユーザー名" 
            variant="outlined" 
            fullWidth
            value={state.user.name}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
