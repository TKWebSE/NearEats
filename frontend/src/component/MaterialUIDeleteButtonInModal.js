import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { MODAL_BUTTON_LABEL } from "../constants";
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OKButtomWrapper = styled.div`
  margin-left:45%;
  float:left;
`;

const NGButtomWrapper = styled.div``;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export function MaterialUIDeleteButtonInModal({ onClick, btnLabel, modalTilte, modalText }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  function handleOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  function handleOK() {
    handleClose();
    onClick();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{modalTilte}</h2>
      <p id="simple-modal-description">
        {modalText}
      </p>
      <OKButtomWrapper>
        <MaterialUICommonButton onClick={() => handleOK()} btnLabel={MODAL_BUTTON_LABEL.MODAL_OK}></MaterialUICommonButton>
      </OKButtomWrapper>
      <NGButtomWrapper>
        <MaterialUICommonButton onClick={() => handleClose()} btnLabel={MODAL_BUTTON_LABEL.MODAL_NG}></MaterialUICommonButton>
      </NGButtomWrapper>
    </div>
  );

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleOpen}
        startIcon={<DeleteIcon />}
      >
        {btnLabel}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
