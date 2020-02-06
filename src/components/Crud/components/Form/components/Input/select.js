import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// import { Container } from './styles';
const Select = ({ name, select, label, handleFieldValue, values }) => {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <SelectUI
        value={values[name] || ''}
        onChange={event => handleFieldValue(name, event.target.value)}
        labelWidth={labelWidth}
        inputProps={{
          name: 'name',
        }}
      >
        <MenuItem>
          <em>{select.emptyOption || 'Select a value'}</em>
        </MenuItem>
        {select.options.map(option => (
          <MenuItem key={option.key} value={option.key}>
            {option.value}
          </MenuItem>
        ))}
      </SelectUI>
    </FormControl>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  select: PropTypes.shape({
    emptyOption: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
  }),
  handleFieldValue: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
