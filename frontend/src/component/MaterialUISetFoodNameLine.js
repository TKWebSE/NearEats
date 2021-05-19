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
  const FoodCreateStateee = useContext(FoodCreateState)
  const FoodCreateDispatcheee = useContext(FoodCreateDispatch)

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(FoodCreateStateee)
    FoodCreateDispatcheee({
      type:foodCreateActionTypes.SETTING,
      payload:{
        name: event.target.value
      }
    })
    console.log(FoodCreateStateee)
    };

  console.log("nekoneko")
  console.log(FoodCreateStateee)
  useEffect(()=> {
    // food === undefined || food === null?
      setValue(0)
    // :
      setValue(1);
      console.log(FoodCreateStateee)
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
            value={value}
            onChange={handleChange}
        />
        </form>
        </Fragment>
        }
    </Fragment>
  );
}