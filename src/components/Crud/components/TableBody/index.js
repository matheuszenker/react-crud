import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const TableBody = ({ data, structure }) => {
  console.log(structure);
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
      <td>Carregando...</td>
    </tr>
  );
};

TableBody.propTypes = {
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string.isRequired,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
