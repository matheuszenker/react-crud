import React from 'react';
import PropTypes from 'prop-types';

import TableBodyUI from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Input from './components/Input';

const TableBody = ({ data, structure }) => {
  const actions = (
    <TableCell>
      <IconButton aria-label="edit">
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </TableCell>
  );

  const lines = data.map(line => (
    <TableRow key={line.id}>
      {structure.map((struct, index) => {
        return (
          <TableCell key={`${line.id}-${index}`}>
            <Input value={line[struct.column]} struct={struct} />
          </TableCell>
        );
      })}
      {actions}
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
