import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HEADER_TEXT } from "../../../constants";
import { Link } from 'react-router-dom';
import { homeURL, userCreateURL, signInURL } from "../../../urls/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TypographyWrapper = styled.div`
`;

export default function MaterialUIGuestHeader() {
  const history = useHistory();
  const classes = useStyles();

  function signUpHandle() {
    history.push(userCreateURL)
  }

  function signInHandle() {
    history.push(signInURL)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <TypographyWrapper>
              <Link to={homeURL} style={{ textDecoration: 'none', color: '#FFF' }}>
                {HEADER_TEXT.HEADER_TITLE}
              </Link>
            </TypographyWrapper>
          </Typography>
          <Button color="inherit" onClick={() => signInHandle()}>{HEADER_TEXT.SIGNIN_HEADER_LABEL}</Button>
          <Button color="inherit" onClick={() => signUpHandle()}>{HEADER_TEXT.SOGNUP_HEADER_LABEL}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
