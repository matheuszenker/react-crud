import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MaterialUI from '../MaterialUI';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import axios from 'axios';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

import Input from './components/Input';

import { Container } from './styles';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValues: {},
      loading: false,
    };
  }

  handleFieldValue = (fieldName, value) => {
    const { fieldValues } = this.state;

    fieldValues[fieldName] = value;

    this.setState({ fieldValues });
  };

  handleSubmit = () => {
    const { fieldValues } = this.state;
    const { url } = this.props;

    const values = {};

    Object.entries(fieldValues).map(field => {
      if (moment.isMoment(field[1])) {
        values[field[0]] = field[1].format('YYYY-MM-DD HH:mm:ss');
      } else {
        values[field[0]] = field[1];
      }
    });

    this.setState({ loading: true });

    axios
      .post(url, values)
      .then(response => {
        this.setState({ loading: false });
        console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });
  };

  render() {
    const { fieldValues, loading } = this.state;
    const { handleForm, structure } = this.props;

    const fields = structure.map((field, index) => (
      <Grid item md={4} xs={12} key={index}>
        <Input
          field={field}
          handleFieldValue={this.handleFieldValue}
          values={fieldValues}
        />
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  {loading ? (
                    <CircularProgress size={23} color="inherit" /> // Size 14 works pretty well
                  ) : (
                    <Typography>Send</Typography>
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      alias: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string.isRequired,
};

export default Form;
