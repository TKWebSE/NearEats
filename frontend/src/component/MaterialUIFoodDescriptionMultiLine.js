import React, { Fragment,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの説明を設定するためのTextFieldコンポーネント
export function MaterialUIFoodDescriptionMultiLine(food) {
    const classes = useStyles();
    const [value, setValue] = useState(food.description);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    useEffect(() => {
      setValue(food.description);
    }, [food]);
        
    return (
    <Fragment>
      {
      value === undefined || value === null?
      <Fragment>
          LOADING
      </Fragment>
      :
      <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="outlined-multiline-static"
          label="料理の説明"
          multiline
          rows={4}
          fullWidth
          defaultValue={value}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      </form>
    </Fragment>
    }
    </Fragment>
  );
}
