import React from 'react';
import PropTypes from 'prop-types';

import MaterialUI from '../MaterialUI';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import Input from './components/Input';

import { Container } from './styles';

const Form = ({ handleForm, structure }) => {
  const fields = structure.map((field, index) => (
    <Grid item md={4} xs={12} key={index}>
      <Input field={field} />
    </Grid>
  ));

  return (
    <Container>
      <MaterialUI />
      <div className="arrow-back" onClick={handleForm}>
        <ArrowBackIcon />
        Back
      </div>
      <div>
        <form>
          <Grid container spacing={3}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              {fields}
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      alias: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Form;
