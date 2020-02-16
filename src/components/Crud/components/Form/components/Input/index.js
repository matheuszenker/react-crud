import React from 'react';
import PropTypes from 'prop-types';

import Text from './text';
import Number from './number';
import Select from './select';
import Date from './date';

const Input = ({ field, handleFieldValue, values }) => {
  switch (field.type) {
    case 'date':
      return (
        <Date
          label={field.alias}
          name={field.column}
          handleFieldValue={handleFieldValue}
          values={values}
        />
      );
    case 'number':
      return (
        <Number
          label={field.alias}
          name={field.column}
          handleFieldValue={handleFieldValue}
          values={values}
        />
      );
    case 'select':
      return (
        <Select
          label={field.alias}
          name={field.column}
          select={field.select}
          handleFieldValue={handleFieldValue}
          values={values}
        />
      );
    default:
      return (
        <Text
          label={field.alias}
          name={field.column}
          handleFieldValue={handleFieldValue}
          values={values}
        />
      );
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
  handleFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default Input;
