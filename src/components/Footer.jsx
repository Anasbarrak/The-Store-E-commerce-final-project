import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <>
        {/* Site footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  We are a new sales Company in E-commerce, you can find in "The
                  Store" all kinds of produts that are useful even in your daily
                  routine, Come on then and buy whatever you want.
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>Home Decoration</li>
                  <li>Services</li>
                  <li>Delivering</li>
                  <li>Selling</li>
                  <li>And all kinds of Business using Technologies</li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="https://3d-creativity.com/">About Us</a>
                  </li>
                  <li>
                    <a href="https://3d-creativity.com/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://3d-creativity.com/nos-realisation/">
                      Our Work brievely
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/dir/36.8432953,10.2487974/3d+creativity/@36.8294202,10.104081,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12fd334d7d4caded:0xa3ff21d0280cf6b7!2m2!1d10.0997081!2d36.8144333?utm_medium=s2email&shorturl=1">
                      Avenue Habib 2010 La Manouba
                    </a>
                  </li>
                  <li>
                    <span href="elementor-icon-list-text">commercial@3d-creativity.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright © 2023 All Rights Reserved by Anas Barrak
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="https://www.facebook.com/mohamedanasbarrak/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/mohamed-anas-barrak/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
