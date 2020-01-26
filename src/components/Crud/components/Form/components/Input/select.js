import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SelectUI from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// import { Container } from './styles';

const Options = ({ options }) => {
  return options.map(option => (
    <MenuItem key={option.key} value={option.key}>
      {option.value}
    </MenuItem>
  ));
};

const Select = ({ name, select, label }) => {
  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <SelectUI labelId="demo-simple-select-outlined-label" name={name}>
        <MenuItem>
          <em>{select.emptyOption || 'Select a value'}</em>
        </MenuItem>
        <Options options={select.options} />
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
};

export default Select;
