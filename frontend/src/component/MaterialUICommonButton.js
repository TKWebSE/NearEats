import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MaterialUICommonButton({onClick , btnLabel})   {
    const classes = useStyles();
    console.log({onClick})
    return (
      <div>
        <Button
          size="medium"
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