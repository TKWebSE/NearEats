import React, { Fragment, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { foodCreateActionTypes } from "../../reducer/foodCreateReducer";
import { FoodState, FoodDispatch } from "../../context/Context";

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
  const FoodDescriptionState = useContext(FoodState);
  const FoodDescriptionDispatch = useContext(FoodDispatch);

  const handleChange = (event) => {
    FoodDescriptionDispatch({
      type: foodCreateActionTypes.SETTINGFOODDESCRIPTION,
      payload: {
        description: event.target.value
      }
    })
  };

  return (
    <Fragment>
      {
        FoodDescriptionState.food === undefined || FoodDescriptionState.food === null ?
          <Fragment>
            LOADING
          </Fragment>
          :
          <Fragment>
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
            <div>
              <TextField
                id="outlined-multiline-static"
                label="料理の説明"
                multiline
                rows={4}
                fullWidth
                defaultValue={FoodDescriptionState.food.description}
                variant="outlined"
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                  }
                }
                }
              />
            </div>
            {/* </form> */}
          </Fragment>
      }
    </Fragment>
  );
}
