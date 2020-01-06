import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import Form from './components/Form';
// import { Container } from './styles';

export default class Crud extends Component {
  state = {
    data: [],
    showForm: false,
  };

  componentDidMount() {
    axios.get(this.props.url).then(res => {
      const { data } = res;
      this.setState({ data });
    });
  }

  handleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  render() {
    const { data } = this.state;
    const { structure } = this.props.data;

    if (this.state.showForm) {
      return <Form handleForm={this.handleForm} structure={structure} />;
    } else {
      return (
        <>
          <div>
            <button onClick={this.handleForm}>Add</button>
          </div>
          <table>
            <thead>
              <TableHeader structure={structure} />
            </thead>
            <tbody>
              <TableBody data={data} structure={structure} />
            </tbody>
          </table>
        </>
      );
    }
  }
}

Crud.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.shape({
    structure: PropTypes.arrayOf(PropTypes.object),
  }),
};
