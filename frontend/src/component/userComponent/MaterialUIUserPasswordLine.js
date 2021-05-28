import React, { Fragment,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {userEditActionTypes} from "../../reducer/userEditReducer";
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
    const userPasswordState = useContext(UserState);
    const userPasswordDispatch = useContext(UserDispatch);

    const handleChange = (event) => {
        userPasswordDispatch({
            type:userEditActionTypes.SETTINGUSERPASSWORD,
            payload:{
                password:event.target.value
            }
        })
    };
        
    return (
    <Fragment>
      {
      userPasswordState.user === undefined || userPasswordState.user === null?
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
            value={userPasswordState.user.password}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
