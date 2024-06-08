import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { OrderState, OrderDispatch } from "../context/Context";
import { orderActionTypes } from "../reducer/orderReducer";

export default function MaterialUIUpdateRatingStar({ onClick, valuation, dispatch }) {

  function onChangeHandle(newValue) {
    console.log(newValue)
    if (newValue === null) {
      dispatch({
        type: orderActionTypes.UPDATE_VALUATION,
        payload: {
          valuation: 1
        },
      });
    } else {
      dispatch({
        type: orderActionTypes.UPDATE_VALUATION,
        payload: {
          valuation: newValue
        },
      });
    }
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          size="large"
          precision={1}
          value={valuation}
          onChange={(event, newValue) => {
            onChangeHandle(newValue)
          }}
        />
      </Box>
    </div>
  );
}
