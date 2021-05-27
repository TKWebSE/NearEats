import React,{Fragment,useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {foodCreateActionTypes} from "../../reducer/foodCreateReducer";
import {FoodState,FoodDispatch} from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの名前を設定するためのテキストフィールドコンポーネント
export function MaterialUISetFoodNameLine() {
  const classes = useStyles();
  const FoodNameState = useContext(FoodState)
  const FoodNameDispatch = useContext(FoodDispatch)

  console.log(FoodNameState)
  const handleChange = (event) => {
    FoodNameDispatch({
      type:foodCreateActionTypes.SETTINGFOODNAME,
      payload:{
        name: event.target.value
      }
    })
  };
  
  useEffect(()=> {
      console.log(FoodNameState)
  },[])
  

  return (
    <Fragment>
        {
        FoodNameState.food === undefined || FoodNameState.food === null?
        <Fragment>
            LOADING
        </Fragment>
        :
        <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="商品名" 
            variant="outlined" 
            fullWidth
            value={FoodNameState.food.name}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}