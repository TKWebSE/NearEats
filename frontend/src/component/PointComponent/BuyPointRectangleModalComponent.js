import React, { Fragment, useEffect, useState } from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MaterialUICommonButton } from "../MaterialUICommonButton";
import { MODAL_BUTTON_LABEL } from "../../constants";

const OKButtomWrapper = styled.div`
  margin-left:45%;
  float:left;
`;

const NGButtomWrapper = styled.div``;


const RectangleWrapper = styled.h2`
  border: solid;
  border-color: #F0F0F0 ;
  color:black;
  border-width:2px;
  display: flex;
  padding-left:1%;
  padding-top:1%;
  padding-bottom:1%;
  height:100%;
  width:100%;
`;

const RectangleIcon = styled.div`
  padding-top:1%;
  padding-right:1%;
`;

const RectangleText = styled.div`
  padding-top:1%;
`;


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

export default function BuyPointRectangleModalComponent({ Icon, text, onClick, modalTilte, modalText }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    onClick()
    handleClose()
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
    <Fragment>
      <RectangleWrapper onClick={() => { handleOpen() }}>
        <RectangleIcon>
          <Icon fontSize='large' />
        </RectangleIcon>
        <RectangleText>
          {text}
        </RectangleText>
      </RectangleWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Fragment>
  );
}
