import React, { Fragment,useEffect,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {foodCreateActionTypes} from "../reducer/foodCreateReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
}));

//foodの説明を設定するためのTextFieldコンポーネント
export function MaterialUIFoodDescriptionMultiLine() {
    const classes = useStyles();
    const FoodState = useContext(FoodState);
    const FoodDispatch = useContext(FoodDispatch);

    const handleChange = (event) => {
      FoodDispatch({
        type:foodCreateActionTypes.SETTINGFOODDESCRIPTION,
        payload:{
          description:event.target.value
        }
      })
    };
    
    useEffect(() => {
      console.log(FoodState)
    }, []);
        
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
        <div>
        <TextField
          id="outlined-multiline-static"
          label="料理の説明"
          multiline
          rows={4}
          fullWidth
          defaultValue={FoodState.food.description}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      </form>
    </Fragment>
    }
    </Fragment>
  );
}
