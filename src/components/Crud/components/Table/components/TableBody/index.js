import React from 'react';
import PropTypes from 'prop-types';

import TableBodyUI from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Input from './components/Input';
import Actions from './components/Actions';

const TableBody = ({ data, structure }) => {
  const lines = data.map(line => (
    <TableRow key={line.id}>
      {structure.map((struct, index) => {
        return (
          <TableCell key={`${line.id}-${index}`}>
            <Input value={line[struct.column]} struct={struct} />
          </TableCell>
        );
      })}
      <TableCell>
        <Actions />
      </TableCell>
    </TableRow>
  ));

  return data.length ? (
    <TableBodyUI>{lines}</TableBodyUI>
  ) : (
    <TableBodyUI>
      <TableRow>
        <TableCell colSpan="100">No data found</TableCell>
      </TableRow>
    </TableBodyUI>
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
