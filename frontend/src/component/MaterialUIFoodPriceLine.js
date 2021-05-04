import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function MaterialUIFoodPriceLine(food) {
    const classes = useStyles();
    console.log(food)
    

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-number"
            label="金額"
            type="text"
            inputMode="numeric"
            defaultValue="1"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
    　</form>
  );
}
