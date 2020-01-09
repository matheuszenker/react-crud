import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Options = ({ options }) => {
  return options.map(option => (
    <option key={option.key} value={option.key}>
      {option.value}
    </option>
  ));
};

const Select = ({ name, select }) => {
  return (
    <select name={name}>
      <option>{select.emptyOption || 'Select a value'}</option>
      <Options options={select.options} />
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  select: PropTypes.shape({
    emptyOption: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
  }),
};

export default Select;
