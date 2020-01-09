import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Text = ({ placeholder, name }) => (
  <input placeholder={placeholder} name={name} />
);

Text.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Text;
