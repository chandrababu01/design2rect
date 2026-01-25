import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./assets/logo-black-color.png";
import "./styles/header.scss";

function Header() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* 🔥 ACTIVE LINK BASED ON ROUTE */
  useEffect(() => {
    const path = location.pathname;

    if (path === "/about") setActive("about");
    else if (path === "/portfolio") setActive("portfolio");
    else if (path === "/service") setActive("service");
    else if (path === "/contact") setActive("contact");
    else setActive("");
  }, [location.pathname]);

  /* 🔥 SCROLL TO TOP ON PAGE CHANGE */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 smooth top scroll
    });
  }, [location.pathname]);

  return (
    <div className="sticky-top">
      <Navbar expand={false} className="bg-body-tertiary">
        <Container>
          {/* TOP BAR */}
          <div className="d-flex align-items-center w-100">
            <div className="logo">
              <Navbar.Brand as={Link} to="/" onClick={handleClose}>
                <img src={Logo} alt="logo" className="logo-img" />
              </Navbar.Brand>
            </div>

            <div className="d-flex align-items-center ms-auto gap-3">
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleClose}
                className={active === "contact" ? "active-link" : ""}
              >
                More details
              </Nav.Link>

              <Navbar.Toggle onClick={handleShow} />
            </div>
          </div>

          {/* RIGHT SIDE OFFCANVAS */}
          <Navbar.Offcanvas
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Design2Clinet</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3 d-flex flex-column align-items-start">
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={handleClose}
                  className={active === "about" ? "active-link" : ""}
                >
                  About
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/portfolio"
                  onClick={handleClose}
                  className={active === "portfolio" ? "active-link" : ""}
                >
                  Portfolio
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/service"
                  onClick={handleClose}
                  className={active === "service" ? "active-link" : ""}
                >
                  Service
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={handleClose}
                  className={active === "contact" ? "active-link" : ""}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
