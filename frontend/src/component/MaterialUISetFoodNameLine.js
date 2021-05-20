import React,{Fragment,useEffect,useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FoodCreateState,FoodCreateDispatch} from "../containers/FoodCreate"
import {foodCreateActionTypes} from "../reducer/foodCreateReducer";
import { foodDetailActionTypes } from '../reducer/foodDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの名前を設定するためのテキストフィールドコンポーネント
export default function MaterialUISetFoodNameLine() {
  const classes = useStyles();
  const [value,setValue] = useState(0)
  const FoodCreateNameState = useContext(FoodCreateState)
  const FoodCreateNameDispatche = useContext(FoodCreateDispatch)

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(FoodCreateNameState)
    FoodCreateNameDispatche({
      type:foodCreateActionTypes.SETTINGFOODNAME,
      payload:{
        name: event.target.value
      }
    })
    console.log(FoodCreateNameState)
    };

  console.log("nekoneko")
  console.log(FoodCreateNameState)
  
  useEffect(()=> {
      setValue(1);
      console.log(FoodCreateNameState)
  },[])
  

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
        <TextField 
            id="outlined-basic" 
            label="商品名" 
            variant="outlined" 
            fullWidth
            value={FoodCreateNameState.food.name}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}