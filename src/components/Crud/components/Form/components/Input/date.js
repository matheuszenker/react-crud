import React from 'react';
import PropTypes from 'prop-types';

import { KeyboardDatePicker } from '@material-ui/pickers';

// import { Container } from './styles';

const Date = ({ label, name }) => (
  <KeyboardDatePicker
    autoOk
    variant="inline"
    size="small"
    inputVariant="outlined"
    label={label}
    name={name}
    format="MM/dd/yyyy"
    InputAdornmentProps={{ position: 'start' }}
    fullWidth
  />
);

Date.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Date;
