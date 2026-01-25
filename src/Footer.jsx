import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/logo-black-color.png";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <footer className="footer-section-content">
      <div className="container">
        <div className="row align-items-end">
          {/* LOGO */}
          <div className="footer-logo">
            <Link to="/" onClick={() => handleNavigate("/")}>
              <img src={Logo} alt="logo" className="logo-img" />
            </Link>
          </div>

          {/* CONTACT */}
          <div className="col-md-8">
            <div className="footer-contact-details">
              <div className="location">
                <span>Chennai</span>
                <a href="tel:+917010846495">+91 7010846495</a>
              </div>

              {/* SOCIAL */}
              <div className="follow">
                <ul>
                  <li>
                    <span>Follow us</span>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Behance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/design2client/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/designtoclient?igsh=MW04OTNyeXN5M2h6NQ=="
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Threads
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/designtoclient" target="_blank">
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@design2client?si=BCEF7r4GAKQOaDKC"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FOOTER NAV */}
          <div className="col-md-4">
            <div className="servies-related">
              <div className="row">
                <div className="col-md-6">
                  <div className="footernav">
                    <button onClick={() => handleNavigate("/about")}>
                      About us
                    </button>
                    <button onClick={() => handleNavigate("/portfolio")}>
                      Work
                    </button>
                    <button onClick={() => handleNavigate("/service")}>
                      Services
                    </button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="footernav">
                    <button onClick={() => handleNavigate("/contact")}>
                      Contact us
                    </button>
                    <button disabled>Careers</button>
                    <button disabled>Blogs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
