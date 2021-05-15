import React, { Fragment, useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの金額を設定するためのTextFieldコンポーネント。
//number指定していないので、バリデーションを書ける必要あり
export function MaterialUIFoodPriceLine(food) {
    const classes = useStyles();
    const [value,setValue] = useState(food.price);
    
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    useEffect(()=>{
      setValue(food.price)
    },[food]);

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
              id="standard-number"
              label="金額"
              type="text"
              inputMode="numeric"
              fullWidth
              defaultValue={value}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </div>
      　</form>
      </Fragment>
      }
    </Fragment>
  );
}
