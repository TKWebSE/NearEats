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
export function MaterialUIFoodPriceLine(food,handleSetPriceValue) {
  constructor(food){
    this.state = {value :food};
  }
    const classes = useStyles();
    // const [value,setValue] = useState(food.price);
    
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };

    useEffect(()=>{
      handleSetPriceValue(food.price)
    },[food]);

    return (
      <Fragment>
      {
      food === undefined || food === null || handleSetPriceValue === undefined || handleSetPriceValue === null?
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
              defaultValue={food}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleSetPriceValue}
            />
          </div>
      　</form>
      </Fragment>
      }
    </Fragment>
  );
}
