import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

export function MaterialUIReadOnlyTextField({ label, value }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-read-only-input"
        label={label}
        defaultValue={value}
        fullWidth
        className={classes.root}
        InputProps={{
          readOnly: true,
        }}
      />
    </form>
  )
}
