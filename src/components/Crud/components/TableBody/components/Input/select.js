const Select = ({ value, struct }) => {
  const selectString = struct.select.options.filter(
    option => option.key === value
  );

  return selectString.length > 0 ? selectString[0].value : value;
};

export default Select;
