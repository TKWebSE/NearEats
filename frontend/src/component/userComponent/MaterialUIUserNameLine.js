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

//userの名前を設定するためのTextFieldコンポーネント
export function MaterialUIUserNameLine() {
    const classes = useStyles();
    const userNameState = useContext(UserState);
    const userNameDispatch = useContext(UserDispatch);

    const handleChange = (event) => {
        userNameDispatch({
            type:userEditActionTypes.SETTINGUSERNAME,
            payload:{
                name:event.target.value
            }
        })
    };
    console.log(userNameState.user)
    return (
    <Fragment>
      {
      userNameState.user === undefined || userNameState.user === null?
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
            value={userNameState.user.name}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
