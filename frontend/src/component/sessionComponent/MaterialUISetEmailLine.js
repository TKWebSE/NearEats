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

//signInで使用するEmailのテキストフィールドコンポーネント
export function MaterialUISetEmailLine() {
  const classes = useStyles();
  const SessionEmailState = useContext(SessionState)
  const SessionEmailDispatch = useContext(SessionDispatch)

  const handleChange = (event) => {
    SessionEmailDispatch({
      type:signInActionTypes.SETTINGEMAIL,
      payload:{
        email: event.target.value
      }
    })
  };


  return (
    <Fragment>
        {
        SessionEmailState.user === undefined || SessionEmailState.user === null?
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
            value={SessionEmailState.user.email}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}