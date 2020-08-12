import React, { FunctionComponent } from "react";
import styled from "styled-components";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import { BagInfoModalProps } from "./types";

import bagsImg from "assets/images/bags.jpg";

const StyledImg = styled.img`
  max-width: 100%;
`;

const BagInfoModal: FunctionComponent<BagInfoModalProps> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Do czego się spakować?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Na łódce nie sprawdzą się twarde, plastikowe walizki czy plecaki ze
          stelażem, którego nie można wyjąć. Zdecydowanie lepsza będzie "miękka"
          torba, plecak lub worek żeglarski.
        </DialogContentText>
        <StyledImg src={bagsImg} alt="W co się spakować na rejs?" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK, mam to
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BagInfoModal;
