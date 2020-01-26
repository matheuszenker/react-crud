import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
// import { Container } from './styles';

const Text = ({ label, name }) => (
  <TextField
    label={label}
    variant="outlined"
    size="small"
    name={name}
    fullWidth
  />
);

Text.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Text;
