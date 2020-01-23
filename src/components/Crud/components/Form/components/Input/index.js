import React from 'react';
import PropTypes from 'prop-types';

import Text from './text';
import Number from './number';
import Select from './select';

const Input = ({ field }) => {
  switch (field.type) {
    case 'number':
      return <Number label={field.alias} name={field.column} />;
    case 'select':
      return (
        <Select label={field.alias} name={field.column} select={field.select} />
      );
    default:
      return <Text label={field.alias} name={field.column} />;
  }
};

Input.propTypes = {
  field: PropTypes.shape({
    column: PropTypes.string.isRequired,
    alias: PropTypes.string,
    type: PropTypes.string,
    select: PropTypes.shape({
      options: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        })
      ),
      emptyOption: PropTypes.string,
    }),
  }),
};

export default Input;
