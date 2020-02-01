import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
// import { Container } from './styles';

const Text = ({ label, name, handleFieldValue, values }) => (
  <TextField
    label={label}
    variant="outlined"
    size="small"
    name={name}
    value={values[name]}
    onChange={event => handleFieldValue(name, event.target.value)}
    fullWidth
  />
);

Text.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleFieldValue: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Text;
