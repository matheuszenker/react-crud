import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// import { Container } from './styles';

const TableHeader = ({ structure }) => {
  const columns = structure.map((column, index) => {
    return (
      <TableCell key={index}>
        <TableSortLabel>{column.alias}</TableSortLabel>
      </TableCell>
    );
  });

  return (
    <TableHead>
      <TableRow>{columns}</TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      alias: PropTypes.string.isRequired,
    })
  ),
};

export default TableHeader;
