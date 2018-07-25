import React from 'react';

import logo from './images/template_logo.png';

import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <nav className="navcontainer">
        <img src={logo} alt="logo" />

      </nav>
    );
  }
}
