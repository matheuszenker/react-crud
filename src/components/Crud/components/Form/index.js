import React from 'react';
import PropTypes from 'prop-types';

import MaterialUI from '../MaterialUI';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import Input from './components/Input';

// import { Container } from './styles';

const Form = ({ handleForm, structure }) => {
  const fields = structure.map((field, index) => (
    <div key={index}>
      <Input field={field} />
    </div>
  ));

  return (
    <>
      <MaterialUI />
      <div>
        <ArrowBackIcon onClick={handleForm} />
      </div>
      <div>
        <form>
          {fields}
          <div>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
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
