import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import Table from './components/Table';
import Form from './components/Form';
import Alert from './components/Alert';
// import { Container } from './styles';

export default class Crud extends Component {
  state = {
    data: [],
    dataTotal: 0,
    showForm: false,
    currentPage: 1,
    rowsPerPage: 10,
    alertSuccess: false,
    alertError: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { currentPage, rowsPerPage } = this.state;
    const { url } = this.props;

    axios.get(`${url}?page=${currentPage}&limit=${rowsPerPage}`).then(res => {
      const { data, headers } = res;
      console.log(headers);
      this.setState({ data: data.data, dataTotal: data.total });
    });
  };

  handleDelete = id => {
    const { url } = this.props;

    axios
      .delete(`${url}/${id}`)
      .then(res => {
        this.setState({ alertSuccess: true }, this.getData());
      })
      .catch(() => {
        this.setState({ alertError: true });
      });
  };

  handleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  handleCloseAlertError = () => {
    this.setState({ alertError: false });
  };

  handleCloseAlertSuccess = () => {
    this.setState({ alertSuccess: false });
  };

  handlePage = (event, page) => {
    this.setState({ currentPage: page + 1 }, () => this.getData());
  };

  handleChangeRowsPerPage = event => {
    this.setState({ currentPage: 1, rowsPerPage: event.target.value }, () =>
      this.getData()
    );
  };

  render() {
    const {
      data,
      currentPage,
      rowsPerPage,
      dataTotal,
      alertError,
      alertSuccess,
    } = this.state;
    const { structure } = this.props;

    const theme = createMuiTheme({}, ptBR);

    const formTable = () => {
      if (this.state.showForm) {
        return <Form handleForm={this.handleForm} structure={structure} />;
      } else {
        return (
          <Table
            handleForm={this.handleForm}
            data={data}
            structure={structure}
            dataTotal={dataTotal}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            handlePage={this.handlePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            handleDelete={this.handleDelete}
          />
        );
      }
    };

    return (
      <ThemeProvider theme={theme}>
        {formTable()}
        <Alert
          openAlert={alertError}
          handleClose={this.handleCloseAlertError}
          message="An error occurred."
          severit="error"
        />
        <Alert
          openAlert={alertSuccess}
          handleClose={this.handleCloseAlertSuccess}
          message="Item successfuly deleted."
          severit="success"
        />
      </ThemeProvider>
    );
  }
}

Crud.propTypes = {
  url: PropTypes.string.isRequired,
  structure: PropTypes.arrayOf(PropTypes.object),
};
