import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
                <nav className="main-nav row">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
    );
  }
}

export default Nav;
