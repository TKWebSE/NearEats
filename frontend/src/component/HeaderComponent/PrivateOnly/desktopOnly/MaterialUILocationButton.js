import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
    width: 150,
  },
}));

export function MaterialUILocationButton({ onClick, btnLabel }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        startIcon={<LocationOnIcon />}
        className={classes.button}
        onClick={onClick}
      >
        {btnLabel === null || btnLabel === undefined ? "未設定" : btnLabel}
      </Button>
    </div>
  )
}
