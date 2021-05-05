import React, { Fragment,useState,useEffect } from 'react';
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
    const Fooddescription = food.description
    const [value, setValue] = useState(Fooddescription);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    useEffect(() => {
      setValue(food.description);
      console.log("useEffective:" + value + "food:" + food.description)
    }, [food]);
        
    return (
    <wrapper>
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
          defaultValue={value===undefined? "a":value}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      </form>
    </Fragment>
    }
    </wrapper>
  );
}
