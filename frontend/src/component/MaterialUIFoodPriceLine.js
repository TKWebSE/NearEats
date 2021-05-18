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
export function MaterialUIFoodPriceLine(props) {
    const classes = useStyles();
    const [value,setValue] = useState(null);
    
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    useEffect(()=>{
      props.food === undefined || props.food === null?
        console.log(props)
      :
      // setValue(props.food.price)
      console.log("kokokokoko")
      console.log(props)
    },[props]);

    return (
      <Fragment>
      {
      value === undefined || value === null?
      <Fragment>
          LOADING
      </Fragment>
      :
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-number"
              label="金額"
              type="text"
              inputMode="numeric"
              fullWidth
              defaultValue={value === undefined? 0 :value}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={props.handleSetPriceValue}
            />
          </div>
      　</form>
      }
    </Fragment>
  );
}
