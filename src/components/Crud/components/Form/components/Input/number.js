import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

// import { Container } from './styles';

const Number = ({ label, name, handleFieldValue, values }) => (
  <TextField
    label={label}
    variant="outlined"
    size="small"
    name={name}
    type="number"
    fullWidth
  />
);

Number.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleFieldValue: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Number;
