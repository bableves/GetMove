import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import { default as DialogTitle } from '../../../utils/ui-helpers/CustomDialogTitle';
import { StepOne, StepTwo } from './Steps';

const RegisterDialog = ({ open, handleClose }) => {
  const [stepNumber, setStepNumber] = useState(1);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" onClose={handleClose}>
        Regisztráció
      </DialogTitle>
      {stepNumber === 1 && (
        <StepOne
          handleClose={handleClose}
          setStepNumber={setStepNumber}
        />
      )}
      {stepNumber === 2 && (
        <StepTwo
          handleClose={handleClose}
          setStepNumber={setStepNumber}
        />
      )}
      {stepNumber === 3 && (
        <StepOne
          handleClose={handleClose}
          setStepNumber={setStepNumber}
        />
      )}
    </Dialog>
  );
};

RegisterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default RegisterDialog;
