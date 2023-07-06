import React from "react";
import "./scss/footer.scss";
import m2 from "../assets/m2.PNG";
import sprite from "../assets/sprite.svg";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={m2} alt="footer logo" />
        <div className="footer-middle">
          <div className="footer-icon-nav">
            <a href="mailto:sainuthanreddy213@gmail.com">
              <svg className="footer-icon-nav-item">
                <use xlinkHref={`${sprite}#icon-mail4`}></use>
              </svg>
            </a>
            <a href=" https://www.instagram.com/nuthan_reddy__45/">
              <svg className="footer-icon-nav-item">
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </svg>
            </a>
            <a href=" https://twitter.com/NuthanReddy__45">
              <svg className="footer-icon-nav-item">
                <use xlinkHref={`${sprite}#icon-twitter`}></use>
              </svg>
            </a>
            <svg className="footer-icon-nav-item">
              <use xlinkHref={`${sprite}#icon-facebook2`}></use>
            </svg>
            <a href="https://github.com/NuthanReddy45">
              <svg className="footer-icon-nav-item">
                <use xlinkHref={`${sprite}#icon-github`}></use>
              </svg>
            </a>
           
          </div>
          <div className="footer-creator">CreatedBy</div>
          <div className="footer-creator-name">
            <span>&copy;</span>Sai Nuthan Reddy
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <h4>about movieex</h4>
            <h4>contact us</h4>
          </div>
          <div className="footer-thanku">Thank you for visiting us!</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
