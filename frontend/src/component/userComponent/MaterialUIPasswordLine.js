import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

//Passwordを設定するためのTextFieldコンポーネント
export function MaterialUIPasswordLine({ label, value, setValue, onKeyDown }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Fragment>
      {
        // state.user === undefined || state.user === null ?
        //   <Fragment>
        //     LOADING
        //   </Fragment>
        //   :
        <Fragment>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              fullWidth
              value={value}
              onChange={handleChange}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  onKeyDown(event)
                }
              }
              }
            />
          </form>
        </Fragment>
      }
    </Fragment>
  );
}
