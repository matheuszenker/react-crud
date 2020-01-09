import React from 'react';
import PropTypes from 'prop-types';

import Text from './text';
import Number from './number';

const Input = ({ field }) => {
  switch (field.type) {
    case 'number':
      return <Number placeholder={field.alias} name={field.column} />;

    default:
      return <Text placeholder={field.alias} name={field.column} />;
  }
};

Input.propTypes = {
  field: PropTypes.shape({
    column: PropTypes.string.isRequired,
    alias: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Input;
