import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <header>
        {children}
      </header>
    );
  }
}
