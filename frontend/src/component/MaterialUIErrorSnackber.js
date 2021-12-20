import React, { Fragment, useEffect, useState, useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { messageActionTypes } from "../reducer/messageReducer";

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

export function MaterialUIErrorSnackber({ message, dispatch }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message === "") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: messageActionTypes.DELETE_ALL_MESSAGE });
    setOpen(false);
  };

  return (
    <Fragment>
      {
        <div className={classes.roeot}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={"error"}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      }
    </Fragment>
  );
}
