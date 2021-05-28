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

//userの住所を設定するためのTextFieldコンポーネント
export function MaterialUIUserAddressLine() {
    const classes = useStyles();
    const userAddressState = useContext(UserState);
    const userAddressDispatch = useContext(UserDispatch);

    const handleChange = (event) => {
        userAddressDispatch({
            type:userEditActionTypes.SETTINGUSERADDRESS,
            payload:{
                address:event.target.value
            }
        })
    };
        
    return (
    <Fragment>
      {
      userAddressState.user === undefined || userAddressState.user === null?
      <Fragment>
          LOADING
      </Fragment>
      :
      <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="住所" 
            variant="outlined" 
            fullWidth
            value={userAddressState.user.address}
            onChange={handleChange}
        />
        </form>
    </Fragment>
    }
    </Fragment>
  );
}
