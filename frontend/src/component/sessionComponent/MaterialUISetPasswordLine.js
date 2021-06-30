import React,{Fragment,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {signInActionTypes} from "../../reducer/signInReducer";
import {SessionState,SessionDispatch} from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

//signInで使用するpasswordのテキストフィールドコンポーネント
export function MaterialUISetPasswordLine() {
  const classes = useStyles();
  const SessionPasswordState = useContext(SessionState)
  const SessionPasswordDispatch = useContext(SessionDispatch)

  const handleChange = (event) => {
    SessionPasswordDispatch({
      type:signInActionTypes.SETTINGPASSWORD,
      payload:{
        password: event.target.value
      }
    })
  };
  
  return (
    <Fragment>
        {
        SessionPasswordState.user === undefined || SessionPasswordState.user === null?
        <Fragment>
            LOADING
        </Fragment>
        :
        <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            fullWidth
            value={SessionPasswordState.user.password}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}