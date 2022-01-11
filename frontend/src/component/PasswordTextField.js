import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

//Password用TextFieldコンポーネント
export function PasswordTextField({ label, value, setValue, onKeyDown, helperText }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    setValue(event.target.value)
  };

  function handleClickShowPassword() {
    setShowPassword(!(showPassword))
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  return (
    <Fragment>
      {
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            fullWidth
            value={value}
            helperText={helperText}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            }}
            onChange={(event) => handleChange(event)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                onKeyDown(event)
              }
            }}
          />
        </form>
      }
    </Fragment>
  );
}
