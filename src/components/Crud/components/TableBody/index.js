import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const TableBody = ({ data, structure }) => {
  const lines = data.map(line => (
    <tr key={line.id}>
      {structure.map((struct, index) => (
        <td key={`${line.id}-${index}`}>{line[struct.column]}</td>
      ))}
    </tr>
  ));

  return data.length ? (
    lines
  ) : (
    <tr>
      <td colSpan="100">No data found</td>
    </tr>
  );
};

TableBody.propTypes = {
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
