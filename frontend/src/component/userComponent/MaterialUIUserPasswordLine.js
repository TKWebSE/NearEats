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

//userのメールアドレスを設定するためのTextFieldコンポーネント
export function MaterialUIUserPasswordLine() {
    const classes = useStyles();
    const state = useContext(UserState);
    const dispatch = useContext(UserDispatch);

    const handleChange = (event) => {
      dispatch({
            type:userActionTypes.SETTINGUSERPASSWORD,
            payload:{
                password:event.target.value
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
            label="パスワード" 
            variant="outlined" 
            fullWidth
            value={state.user.password}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
