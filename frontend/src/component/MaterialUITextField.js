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

//汎用TextFieldコンポーネント
export function MaterialUITextField({ label, value, setValue, onKeyDown, helperText }) {
  const classes = useStyles();

  const handleChange = (event) => {
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
            helperText={helperText}
            onChange={(event) => handleChange(event)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                onKeyDown(event)
              }
            }
            }
          />
        </form>
      }
    </Fragment>
  );
}
