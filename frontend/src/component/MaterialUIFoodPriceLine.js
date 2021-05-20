import React, { Fragment,useEffect,useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {foodCreateActionTypes} from "../reducer/foodCreateReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの金額を設定するためのTextFieldコンポーネント。
//number指定していないので、バリデーションを書ける必要あり
export function MaterialUIFoodPriceLine() {
    const classes = useStyles();
    const FoodState = useContext(FoodState)
    const FoodDispatch = useContext(FoodDispatch)
    
    const handleChange = (event) => {
      FoodDispatch({
        type:foodCreateActionTypes.SETTINGFOODPRICE,
        payload:{
          name: event.target.value
        }
      })
    };

    useEffect(()=>{
      console.log(FoodState)
    },[]);

    return (
      <Fragment>
      {
      // value === undefined || value === null?
      // <Fragment>
      //     LOADING
      // </Fragment>
      // :
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-number"
              label="金額"
              type="text"
              inputMode="numeric"
              fullWidth
              defaultValue={FoodState.food.price}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </div>
      　</form>
      }
    </Fragment>
  );
}
