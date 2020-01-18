import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Table from './components/Table';
import Form from './components/Form';
// import { Container } from './styles';

export default class Crud extends Component {
  state = {
    data: [],
    showForm: false,
    currentPage: 1,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { currentPage } = this.state;

    axios.get(`${this.props.url}?_page=${currentPage}`).then(res => {
      const { data, headers } = res;
      console.log(headers);
      this.setState({ data });
    });
  };

  handleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  handlePrevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(
        prevState => ({
          currentPage: prevState.currentPage - 1,
        }),
        () => {
          this.getData();
        }
      );
    }
  };

  handleNextPage = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      }),
      () => {
        this.getData();
      }
    );
  };

  render() {
    const { data } = this.state;
    const { structure } = this.props;

    if (this.state.showForm) {
      return <Form handleForm={this.handleForm} structure={structure} />;
    } else {
      return (
        <Table
          handleForm={this.handleForm}
          data={data}
          structure={structure}
          nextPage={this.handleNextPage}
          previousPage={this.handlePrevPage}
        />
      );
    }
  }
}

Crud.propTypes = {
  url: PropTypes.string.isRequired,
  structure: PropTypes.arrayOf(PropTypes.object),
};
