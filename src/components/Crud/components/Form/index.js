import React from 'react';
import PropTypes from 'prop-types';

import Input from './components/Input';

// import { Container } from './styles';

const Form = ({ handleForm, structure }) => {
  const fields = structure.map((field, index) => (
    <div key={index}>
      <label>{field.alias}</label>
      <Input field={field} />
    </div>
  ));

  return (
    <>
      <div>
        <button onClick={handleForm}>Back</button>
      </div>
      <div>
        <form>
          {fields}
          <div>
            <button>Send</button>
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
