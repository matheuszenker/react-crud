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

const Table = ({
  handleForm,
  structure,
  data,
  dataTotal,
  handlePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}) => {
  return (
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataTotal}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onChangePage={handlePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
};

Table.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  structure: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  dataTotal: PropTypes.number.isRequired,
};

export default Table;
