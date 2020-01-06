import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Form = ({ handleForm, structure }) => {
  const fields = structure.map((field, index) => (
    <div key={index}>
      <label>{field.alias}</label>
      <input placeholder={field.alias} name={field.column} />
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
