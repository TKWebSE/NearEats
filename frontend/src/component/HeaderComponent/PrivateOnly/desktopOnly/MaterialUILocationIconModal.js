import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MaterialUILocationButton } from "./MaterialUILocationButton";
import { MaterialUICommonButton } from "../../../MaterialUICommonButton";
import { HEADER_TEXT, MODAL_BUTTON_LABEL } from "../../../../constants";
import AnimatedMultiSelect from "../../../AnimatedMultiSelect";
import { sessionActionTypes } from "../../../../reducer/sessionReducer";
import { SessionState, SessionDispatch } from "../../../../context/Context";
import { foodsIndexURL } from "../../../../urls/index";
import { useHistory } from "react-router-dom";


const SelectWrapper = styled.div`
  margin-bottom:3%;
`;

const OKButtomWrapper = styled.div`
  margin-left:45%;
  float:left;
`;

const NGButtomWrapper = styled.div``;

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

export default function MaterialUILocationIconModal({ onClick, modalTilte, modalText, nowLocation }) {
  const classes = useStyles();
  const history = useHistory();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [nowSelectLocation, setLocation] = useState(nowLocation);
  const SessionUserState = useContext(SessionState);
  const SessionUserDispatch = useContext(SessionDispatch);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    SessionUserDispatch({
      type: sessionActionTypes.SETNOWLOCATION,
      payload: {
        nowLocation: nowSelectLocation
      },
    });
    handleClose()
    history.push(foodsIndexURL)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{modalTilte}</h2>
      <p id="simple-modal-description">
        {modalText}
      </p>
      <SelectWrapper>
        <AnimatedMultiSelect
          placeholederText={HEADER_TEXT.NOWLOCATION_MODAL_SELECT_TEXT}
          setLocation={setLocation}
          nowSelectLocation={nowSelectLocation}
        />
      </SelectWrapper>
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
      <MaterialUILocationButton onClick={() => handleOpen()} btnLabel={nowLocation}></MaterialUILocationButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
