import React from 'react';
import PropTypes from 'prop-types';

import Text from './text';
import Select from './select';
import Number from './number';

// import { Container } from './styles';

const Input = ({ value, struct }) => {
  switch (struct.type) {
    case 'number':
      return <Number value={value} />;
    case 'select':
      return <Select value={value} struct={struct} />;
    default:
      return <Text value={value} />;
  }
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  struct: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

export default Input;
