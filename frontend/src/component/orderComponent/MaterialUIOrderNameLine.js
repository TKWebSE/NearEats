import React, { Fragment, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { foodCreateActionTypes } from "../../reducer/foodCreateReducer";
import { OrderState, OrderDispatch } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

//foodの名前を設定するためのテキストフィールドコンポーネント
export function MaterialUISetOrderNameLine() {
  const classes = useStyles();
  const OrderNameState = useContext(OrderState)
  const OrderNameDispatch = useContext(OrderDispatch)

  const handleChange = (event) => {
    OrderNameDispatch({
      type: orderCreateActionTypes.SETTINGFOODNAME,
      payload: {
        name: event.target.value
      }
    })
  };

  return (
    <Fragment>
      {
        OrderNameState.food === undefined || OrderNameState.food === null ?
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
                value={OrderNameState.food.name}
                onChange={handleChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                  }
                }
                }
              />
            </form>
          </Fragment>
      }
    </Fragment>
  );
}
