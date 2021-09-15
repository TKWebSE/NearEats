import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { OrderState, OrderDispatch } from "../context/Context";
import { orderActionTypes } from "../reducer/orderReducer";

export default function MaterialUIUpdateRatingStar({ onClick }) {
  const state = useContext(OrderState);
  const dispatch = useContext(OrderDispatch)

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          size="large"
          value={state.valuation}
          onChange={(event, newValue) => {
            dispatch({
              type: orderActionTypes.UPDATE_VALUATION,
              payload: {
                valuation: newValue
              },
            });
          }}
        />
      </Box>
    </div>
  );
}
