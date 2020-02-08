import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TableUI from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

import MaterialUI from '../MaterialUI';

import { Container } from './styles';

const Table = ({ handleForm, structure, data, nextPage, previousPage }) => (
  <Container>
    <MaterialUI stickyHeader />
    <div>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        onClick={handleForm}
      >
        Add
      </Button>
    </div>
    <TableUI size="small">
      <TableHeader structure={structure} />
      <TableBody data={data} structure={structure} />
    </TableUI>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={100}
      rowsPerPage={5}
      page={0}
      onChangePage={() => {}}
      onChangeRowsPerPage={() => {}}
    />
  </Container>
);

Table.propTypes = {
  handleForm: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  structure: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
