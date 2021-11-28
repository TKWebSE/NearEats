import { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { UserState, UserDispatch } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
}));

export function MaterialUIReadOnlyTextField({ label, value }) {
  const classes = useStyles();
  const state = useContext(UserState);
  const dispatch = useContext(UserDispatch);

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-read-only-input"
          label={label}
          fullWidth
          value={value}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </form>
    </Fragment>
  );
}
