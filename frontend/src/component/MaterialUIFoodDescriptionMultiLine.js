import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function MaterialUIFoodDescriptionMultiLine(food) {
    const classes = useStyles();
    const [value, setValue] = React.useState(food.description);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="outlined-multiline-static"
          label="料理の説明"
          multiline
          rows={4}
          value={value}
          variant="outlined"
        />
      </div>
    </form>
  );
}
