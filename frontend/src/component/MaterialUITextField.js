import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

//userのメールアドレスを設定するためのTextFieldコンポーネント
export function MaterialUITextField({ label, value, setValue }) {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  };

  return (
    <Fragment>
      {
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            fullWidth
            value={value}
            onChange={(event) => handleChange(event)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
              }
            }
            }
          />
        </form>
      }
    </Fragment>
  );
}
