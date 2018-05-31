import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const { config } = this.props;
    // const copyright = config.copyright;
    // if (!copyright) {
    //   return null;
    // }
    return (
      <footer id="contact">
        <div className="container">
          <h3>get in touch</h3>
          <ul id="menu-social" className="menu">
            <li className="menu-item">
              <a
                target="_blank"
                href="https://mail.google.com/mail/u/0/?view=cm&#038;fs=1&#038;to=hello@mikewalker.co&#038;tf=1"
              >
                Email
              </a>
            </li>
            <li className="menu-item">
              <a target="_blank" href="http://twitter.com/mikewalkercodes">
                Twitter
              </a>
            </li>
            <li className="menu-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mike-walker-8a5a8348"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <img
          className="logo"
          src="https://mikewalker.co/wp-content/uploads/2017/08/white-small.png"
        />

        <div className="copyright">
          <div className="container clearfix">
            <div className="copyright-left">
              <p>&copy; Michael Walker 2018 &nbsp;|</p>
              <a
                target="_blank"
                href="https://mail.google.com/mail/u/0/?view=cm&#038;fs=1&#038;to=hello@mikewalker.co&#038;tf=1"
                id="email"
              >
                &nbsp; hello@mikewalker.co
              </a>
            </div>
            <div className="copyright-right">
              <p>
                Developed by Mike Walker | Designed by
                <a href="http://kindredstudio.ca" target="_blank" id="studio">
                  Kindred Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
