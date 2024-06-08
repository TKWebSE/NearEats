import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonTheme } from "../style_constants";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MaterialUICommonButton({ onClick, btnLabel, color }) {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={ButtonTheme}>
        <Button
          size="large"
          variant="contained"
          color={color ? color : 'primary'}
          className={classes.button}
          onClick={onClick}
        >
          {btnLabel}
        </Button>
      </ThemeProvider>
    </div>
  )
}
