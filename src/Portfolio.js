import React, { Component } from 'react';
//Import images
import vanarts from './img/1_vanarts_radio.jpg';
import lexus from './img/2_lexus.jpg';
import books from './img/3_books.jpg';
import encore from './img/4_logos.png';
import yoshi from './img/5_yoshi.jpg';
import engineer from './img/6_engineer.jpg';
import curve from './img/7_curve.png';
import eagle from './img/8_eagle.png';
import vault from './img/9_vault.png';

class Portfolio extends Component {
  render() {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="row port">
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={vanarts} alt="vanarts radio logo" />
                    </div>
                </article>
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={encore} alt="logo" />
                    </div>
                </article>
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={yoshi} alt="websites" />
                    </div>
                </article>
            </div>

            <div className="row port">
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={engineer} alt="engineer" />
                    </div>
                </article>
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={lexus} alt="design" />
                    </div>
                </article>


                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={books} alt="books" />
                    </div>
                </article>
            </div>

            <div className="row port">
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={vault} alt="logo" />
                    </div>
                </article>
                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={eagle} alt="logo" />
                    </div>
                </article>

                <article className="col-sm-12 col-md-4">
                    <div className="hover-img">
                        <div className="overlay"></div>
                        <img src={curve} alt="logo" />
                    </div>
                </article>
            </div>
    </section>
    );
  }
}

export default Portfolio;
