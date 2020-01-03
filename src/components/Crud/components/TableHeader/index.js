import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const TableHeader = ({ structure }) => {
  const columns = structure.map((column, index) => (
    <th key={index}>{column.alias}</th>
  ));

  return <tr>{columns}</tr>;
};

TableHeader.propTypes = {
  structure: PropTypes.arrayOf(PropTypes.object),
};

export default TableHeader;
