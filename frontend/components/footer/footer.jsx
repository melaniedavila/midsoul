import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer-container'>
          <ul>
            <li>
              <a  target="_blank"
                  href="http://www.melaniedavila.com"
                  className='footer-link'>
                  Melanie Davila</a>
            </li>
            <li>
              <i  className="fa fa-envelope fa-lg"
                  aria-hidden="true">
              </i>
              <a  href='mailto:davilam91@gmail.com'
                  className='footer-link'>
                  davilam91@gmail.com
              </a>
            </li>
            <li>
              <i  className="fa fa-github fa-lg"
                  aria-hidden="true">
              </i>
              <a  target="_blank"
                  href="https://github.com/melaniedavila"
                  className='footer-link'>Github
              </a>
            </li>
            <li>
              <i  className="fa fa-linkedin-square fa-lg"
                  aria-hidden="true">
              </i>
              <a  target="_blank"
                  href="https://linkedin.com/in/melaniedavila"
                  className='footer-link'>LinkedIn
              </a>
            </li>
          </ul>
      </footer>
    );
  }
}

export default Footer;
