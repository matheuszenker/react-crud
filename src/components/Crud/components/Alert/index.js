import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// import { Container } from './styles';

const Alert = ({ openAlert, handleClose, message, severity }) => (
  <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
    <MuiAlert
      elevation={6}
      variant="filled"
      onClose={handleClose}
      severity={severity}
    >
      {message}
    </MuiAlert>
  </Snackbar>
);

Alert.propTypes = {
  openAlert: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
};

Alert.defaultProps = {
  severity: 'success',
};

export default Alert;
