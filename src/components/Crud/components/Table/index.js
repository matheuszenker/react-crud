import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

import MaterialUI from '../MaterialUI';

import { Container } from './styles';

const Table = ({ handleForm, structure, data, nextPage, previousPage }) => (
  <Container>
    <MaterialUI />
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
    <table>
      <thead>
        <TableHeader structure={structure} />
      </thead>
      <tbody>
        <TableBody data={data} structure={structure} />
      </tbody>
    </table>
    <div>
      <button onClick={previousPage}>Prev</button>
    </div>
    <div>
      <button onClick={nextPage}>Next</button>
    </div>
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
