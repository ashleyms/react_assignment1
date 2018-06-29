import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
            <header className="main-header" id="home">
                <h1>Ashley Spires</h1>
                <p className="top">Graphic Designer / Web Developer</p>
                <p>Specializing in branding, print and web design.</p>
                <p><a><i className="fa fa-angle-double-down arrow fa-2x" id="services"></i></a></p>
            </header>
    );
  }
}

export default Header;
