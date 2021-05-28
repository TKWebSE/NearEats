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
export function MaterialUIUserEmailLine() {
    const classes = useStyles();
    const userEmailState = useContext(UserState);
    const userEmailDispatch = useContext(UserDispatch);

    const handleChange = (event) => {
        userEmailDispatch({
            type:userEditActionTypes.SETTINGUSEREMAIL,
            payload:{
                email:event.target.value
            }
        })
    };
        
    return (
    <Fragment>
      {
      userEmailState.user === undefined || userEmailState.user === null?
      <Fragment>
          LOADING
      </Fragment>
      :
      <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="メールアドレス" 
            variant="outlined" 
            fullWidth
            value={userEmailState.user.email}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
