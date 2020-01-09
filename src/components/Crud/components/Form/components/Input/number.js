import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Number = ({ placeholder, name }) => (
  <input placeholder={placeholder} name={name} type="number" />
);

Number.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Number;
