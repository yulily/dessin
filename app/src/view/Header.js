import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Logo/>
        <Nav/>
      </header>
    );
  }
}

export default Header;
