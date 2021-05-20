import React,{Fragment,useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {foodCreateActionTypes} from "../reducer/foodCreateReducer";

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
  const FoodState = useContext(FoodState)
  const FoodDispatch = useContext(FoodDispatch)

  const handleChange = (event) => {
    FoodDispatch({
      type:foodCreateActionTypes.SETTINGFOODNAME,
      payload:{
        name: event.target.value
      }
    })
    };
  
  useEffect(()=> {
      console.log(FoodState)
  },[])
  

  return (
    <Fragment>
        {
        // value === undefined || value === null?
        // <Fragment>
        //     LOADING
        // </Fragment>
        // :
        <Fragment>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="outlined-basic" 
            label="商品名" 
            variant="outlined" 
            fullWidth
            value={FoodState.food.name}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}