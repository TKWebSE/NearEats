import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { COLORS } from "../style_constants";
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CustomButton = styled(LoadingButton)({
  backgroundColor: COLORS.MAIN_COLOR,
  opacity: 0.9,
  "&:hover": {
    backgroundColor: COLORS.MAIN_COLOR,
    opacity: 1,
  },
});

export function MaterialUISendEmailButton({ onClick, btnLabel }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    onClick();
  }

  return (
    <div>
      <CustomButton
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="end"
        endIcon={<SendIcon />}
        className={classes.button}
      >
        {btnLabel}
      </CustomButton>
    </div>
  )
}
