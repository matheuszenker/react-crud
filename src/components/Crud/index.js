import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
// import { Container } from './styles';

export default class Crud extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/companies`).then(res => {
      const { data } = res;
      this.setState({ data });
    });
  }

  render() {
    return (
      <table>
        <thead>
          <TableHeader structure={this.props.data.structure} />
        </thead>
        <tbody>
          <TableBody data={this.state.data} />
        </tbody>
      </table>
    );
  }
}

Crud.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.shape({
    structure: PropTypes.arrayOf(PropTypes.object),
  }),
};
