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
export function MaterialUISetPasswordComfirmLine() {
  const classes = useStyles();
  const SessionPasswordConfirmationState = useContext(SessionState)
  const SessioPasswordConfirmationDispatch = useContext(SessionDispatch)

  const handleChange = (event) => {
    SessioPasswordConfirmationDispatch({
      type:signInActionTypes.SETTINGEMAIL,
      payload:{
        email: event.target.value
      }
    })
  };
  
  return (
    <Fragment>
        {
        SessionPasswordConfirmationState.user === undefined || SessionPasswordConfirmationState.user === null?
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
            value={SessionPasswordConfirmationState.user.email}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}