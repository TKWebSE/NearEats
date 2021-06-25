import React,{Fragment,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {sessionActionTypes} from "../../reducer/sessionReducer";
import {SessionState,SessionDispatch} from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

//signInで使用するEmailのテキストフィールドコンポーネント
export function MaterialUISetPasswordComfirmLine() {
  const classes = useStyles();
  const SessionState = useContext(SessionState)
  const SessionDispatch = useContext(SessionDispatch)

  const handleChange = (event) => {
    SessionDispatch({
      type:sessionActionTypes.SETTINGEMAIL,
      payload:{
        email: event.target.value
      }
    })
  };
  
  return (
    <Fragment>
        {
        SessionState.user === undefined || SessionState.user === null?
        <Fragment>
            LOADING
        </Fragment>
        :
        <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            fullWidth
            value={SessionState.user.email}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}