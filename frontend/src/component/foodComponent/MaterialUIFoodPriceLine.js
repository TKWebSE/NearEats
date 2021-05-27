import React, { Fragment,useEffect,useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {foodCreateActionTypes} from "../../reducer/foodCreateReducer";
import {FoodState,FoodDispatch} from "../../context/Context";

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
    const FoodPriceState = useContext(FoodState)
    const FoodPriceDispatch = useContext(FoodDispatch)
    
    const handleChange = (event) => {
      FoodPriceDispatch({
        type:foodCreateActionTypes.SETTINGFOODPRICE,
        payload:{
          price: event.target.value
        }
      })
    };

    useEffect(()=>{
      console.log(FoodPriceState)
    },[]);

    return (
      <Fragment>
      {
      FoodPriceState.food === undefined || FoodPriceState.food === null?
      <Fragment>
          LOADING
      </Fragment>
      :
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic" 
            label="価格" 
            variant="outlined" 
            fullWidth
            value={FoodPriceState.food.price}
            onChange={handleChange}
        />
      　</form>
      }
    </Fragment>
  );
}
