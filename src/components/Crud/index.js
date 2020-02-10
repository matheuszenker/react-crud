import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import Table from './components/Table';
import Form from './components/Form';
// import { Container } from './styles';

export default class Crud extends Component {
  state = {
    data: [],
    dataTotal: 0,
    showForm: false,
    currentPage: 1,
    rowsPerPage: 10,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { currentPage, rowsPerPage } = this.state;

    axios
      .get(`${this.props.url}?page=${currentPage}&limit=${rowsPerPage}`)
      .then(res => {
        const { data, headers } = res;
        console.log(headers);
        this.setState({ data: data.data, dataTotal: data.total });
      });
  };

  handleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
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
    const { data, currentPage, rowsPerPage, dataTotal } = this.state;
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
          />
        );
      }
    };

    return <ThemeProvider theme={theme}>{formTable()}</ThemeProvider>;
  }
}

Crud.propTypes = {
  url: PropTypes.string.isRequired,
  structure: PropTypes.arrayOf(PropTypes.object),
};
