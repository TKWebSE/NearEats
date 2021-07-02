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
export function MaterialUIUserEmailLine() {
    const classes = useStyles();
    const State = useContext(UserState);
    const dispatch = useContext(UserDispatch);

    const handleChange = (event) => {
      dispatch({
            type:userActionTypes.SETTINGUSEREMAIL,
            payload:{
                email:event.target.value
            }
        })
    };
        
    return (
    <Fragment>
      {
      State.user === undefined || State.user === null?
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
            value={State.user.email}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
