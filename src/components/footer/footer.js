import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__section col-md-4">
            Brand
          </div>
          <div className="footer__section col-md-4">
            <h4>Quick links</h4>
            <ul className="footer__section-links">
              <li className="footer__link"><a href="#">test</a></li>
              <li className="footer__link"><a href="#">test</a></li>
            </ul>
          </div>
          <div className="footer__section col-md-4">
            <h4>Contact us</h4>
            <ul className="footer__section-links">
              <li className="footer__link">
                <a href="#">
                  <FontAwesomeIcon className="footer__contact-icon" icon="phone" />
                  <p className="footer__contact-text">0416659663</p>
                </a>
              </li>
              <li className="footer__link">
                <a href="#">
                  <FontAwesomeIcon className="footer__contact-icon" icon="envelope" />
                  <p className="footer__contact-text">450892952@qq.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="footer__bot-footer col">
            <p>&#169;2021 Carpet Paradise. <b>All rights reserved</b></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
