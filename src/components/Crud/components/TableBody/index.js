import React from 'react';

// import { Container } from './styles';

const TableBody = ({ data }) => {
  const lines = data.map(line => (
    <tr key={line.id}>
      <td>{line.title}</td>
      <td>{line.cnpj}</td>
    </tr>
  ));

  return lines;
};

export default TableBody;
