import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Logo extends Component {
  render() {
    return (
      <p className="Logo">
        <img src={logo} alt="logo" />
      </p>
    );
  }
}

export default Logo;
