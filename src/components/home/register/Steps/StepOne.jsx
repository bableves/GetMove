import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from '@material-ui/core';

const StepOne = ({ handleClose, setStepNumber }) => {
  return (
    <>
      <DialogContent>
        <DialogContentText>
          Első lépésként kérünk adj meg egy email-címet és egy
          jelszót.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email-cím"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Jelszó"
          type="password"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Jelszó ismét"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Bezár
        </Button>
        <Button onClick={() => setStepNumber(2)} color="primary">
          Tovább
        </Button>
      </DialogActions>
    </>
  );
};

StepOne.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setStepNumber: PropTypes.func.isRequired,
};

export default StepOne;
