import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from '@material-ui/core';

const StepTwo = ({ handleClose, setStepNumber }) => {
  return (
    <>
      <DialogContent>
        <DialogContentText>
          Ez itt már a második lépés.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setStepNumber(1)} color="primary">
          Vissza
        </Button>
        <Button onClick={() => setStepNumber(3)} color="primary">
          Tovább
        </Button>
      </DialogActions>
    </>
  );
};

StepTwo.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setStepNumber: PropTypes.func.isRequired,
};

export default StepTwo;
