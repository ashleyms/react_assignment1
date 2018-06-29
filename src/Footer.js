import React, { Component } from 'react';
import li from './img/in.png';
import be from './img/be.png';

class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
            <div className="contact" id="contact">
                <h5>contact</h5>
                <a href="mailto:ashleymspires@gmail.com">ashleymspires@gmail.com</a>
                <div>
                    <a href="https://www.linkedin.com/in/ashley-spires-44b7b864/"><img className="icon" src={li} alt="linkedin" /></a>
                    <a href="https://www.behance.net/ashleyspires"><img className="icon" src={be} alt="behance" /></a>
                </div>
            </div>

            <div className="copyright">
                <p>Vancouver, BC, CA </p>
                <p className="right">Copyright &#xA9; 2018, Ashley Spires</p>
            </div>
        </footer>
    );
  }
}

export default Footer;
