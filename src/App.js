import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
          <main className="page-container container">
              <h2>Services</h2>
              <Services />
              <Portfolio />
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
