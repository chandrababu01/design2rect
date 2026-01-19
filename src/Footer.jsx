import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo-black-color.png";

export const Footer = () => {
  return (
    <footer className="footer-section-content">
      <div className="container">
        <div className="row align-items-end">
          <div className="footer-logo">
            <Link>
              <img src={Logo} alt="logo" className="logo-img" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="footer-contact-details">
              <div className="location">
                <span>chennai</span>
                <Link>+91 7010846495</Link>
              </div>
              <div className="follow">
                <ul>
                  <li>
                    <span>Follow us</span>
                  </li>
                  <li>
                    <Link>Behance</Link>
                  </li>
                  <li>
                    <Link>Linkedin</Link>
                  </li>
                  <li>
                    <Link>Instagram</Link>
                  </li>
                  <li>
                    <Link>Facebook</Link>
                  </li>
                  <li>
                    <Link>threads</Link>
                  </li>
                  <li>
                    <Link>X</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="servies-related">
              <div className="row">
                <div className="col-md-6">
                  <div className="footernav">
                    <Link>About us</Link>
                    <Link>Work</Link>
                    <Link>Services</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footernav">
                    <Link>Contact us</Link>
                    <Link>Careers</Link>
                    <Link>Blogs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
