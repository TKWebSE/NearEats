import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MaterialUICommonButton({size,onClick , btnLabel})   {
    const classes = useStyles();

    return (
      <div>
        <Button
          size={size}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onClick}
        >
        {btnLabel}
      </Button>
      </div>
    )
  }