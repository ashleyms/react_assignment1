import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
            <section className="row serv">
                <article className="col-sm-12 col-md-3">
                    <p className=" icons"><i className="fa fa-copyright fa-2x"></i></p>
                    <h3>brand identity</h3>
                    <p>Whether you are starting a new business or reviving an old one, a brand identity plays an essential part in creating a successful company. It all starts with designing a striking logo to stand out from the crowd.</p>

                </article>

                <article className="col-sm-12 col-md-3">
                    <p className=" icons"><i className="fa fa-print fa-2x"></i></p>
                    <h3>print design</h3>
                    <p>Bringing creativity and innovation to print. Everything from custom designed invitations, business cards, brochures, stationary, packaging, magazines and much more! Let's express your message with print!</p>

                </article>

                <article className="col-sm-12 col-md-3">
                    <p className=" icons"><i className="fa fa-mobile fa-2x"></i></p>
                    <h3>ui design</h3>
                    <p>Design with your users in mind. Improving the usability and ease of a layout are all ways to keep a customer coming back. Having a well-planned UI design ensures that your user will have a pleasant experience.</p>

                </article>

                <article className="col-sm-12 col-md-3">
                    <p className=" icons"><i className="fa fa-desktop fa-2x"></i></p>
                    <h3>web development</h3>
                    <p>Every business needs an online presence that captures their brands personality. Let's start by developing custom responsive websites with SEO optimization to push your brand to its full potential.</p>
                    <div id="portfolio"></div>
                </article>
            </section>
    );
  }
}

export default Services;
