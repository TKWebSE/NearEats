import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import { ArrowLeft } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MaterialUIIconOnlyButton({ onClick }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onClick}
      >
        <RoomIcon />
      </Button>
    </div>
  )
}
