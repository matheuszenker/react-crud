import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

// import { Container } from './styles';

const Number = ({ label, name }) => (
  <TextField
    id="outlined-basic"
    label={label}
    variant="outlined"
    size="small"
    name={name}
    type="number"
  />
);

Number.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Number;
