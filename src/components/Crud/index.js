import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeader from './components/TableHeader';
// import { Container } from './styles';

export default class Crud extends Component {
  componentDidMount() {
    console.log(this.props.data.structure);
  }

  render() {
    return (
      <table>
        <thead>
          <TableHeader structure={this.props.data.structure} />
        </thead>
        <tbody></tbody>
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
