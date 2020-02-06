import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import ptbrLocale from 'moment/locale/pt-br';

// import { Container } from './styles';

const Date = ({ label, name, handleFieldValue, values }) => {
  useEffect(() => {
    moment.locale('pt-br');

    handleFieldValue(name, moment());
  }, [handleFieldValue, name]);

  return (
    <DatePicker
      autoOk
      format="L"
      locale={ptbrLocale}
      variant="inline"
      size="small"
      inputVariant="outlined"
      label={label}
      name={name}
      value={values[name]}
      onChange={change => handleFieldValue(name, change)}
      fullWidth
    />
  );
};

Date.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleFieldValue: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Date;
