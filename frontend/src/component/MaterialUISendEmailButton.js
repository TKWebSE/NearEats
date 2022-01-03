import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@material-ui/icons/Save';
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function MaterialUISendEmailButton({ onClick, btnLabel }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    onClick();
  }

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onClick}
      >
        {btnLabel}
      </Button>
      <LoadingButton
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SendIcon />}
        className={classes.button}
      >
        {btnLabel}
      </LoadingButton>
    </div>
  )
}
