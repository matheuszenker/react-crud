import React from 'react';
import PropTypes from 'prop-types';

import { KeyboardDatePicker } from '@material-ui/pickers';

// import { Container } from './styles';

const Date = ({ label, name, handleFieldValue, values }) => (
  <KeyboardDatePicker
    autoOk
    variant="inline"
    size="small"
    inputVariant="outlined"
    label={label}
    name={name}
    value={values[name]}
    onChange={change => handleFieldValue(name, change)}
    format="MM/dd/yyyy"
    InputAdornmentProps={{ position: 'start' }}
    fullWidth
  />
);

Date.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleFieldValue: PropTypes.func.isRequired,
};

export default Date;
