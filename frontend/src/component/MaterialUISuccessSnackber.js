import React, {Fragment, useEffect,useState,useContext } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {SessionState,SessionDispatch} from "../context/Context";
import {UserState,UserDispatch} from "../context/Context";
import {sessionActionTypes} from "../reducer/sessionReducer";
import {userActionTypes} from "../reducer/userReducer";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function MaterialUISuccessSnackber({message}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const sessionAuthState = useContext(SessionState);
  const sessionAuthDispatch = useContext(SessionDispatch);

  useEffect(() => {
    if(message === ""){
      setOpen(false);
    } else {
      setOpen(true);
      sessionAuthDispatch({
        type:sessionActionTypes.SETTINGMESSAGE,
        payload: {
          message:""
        },
      })
    }
  },[message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Fragment>
      {
      message === undefined || message === null || message === ""?
        null
      :
      <div className={classes.roeot}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={"success"}>
            {message}
          </Alert>
        </Snackbar>
      </div>
      }
    </Fragment>
  );
}