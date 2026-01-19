import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Logo from './assets/logo-black-color.png'
import "./styles/header.scss";



function Header() {
    return (
        <div className='sticky-top'>
            {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}

            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container>

                        <div className='d-flex align-items-center w-100'>
                            <div className='logo'>
                                <Navbar.Brand as={Link} to='/'> <img
                                    src={Logo}
                                    alt="logo"
                                    className="logo-img"
                                /> </Navbar.Brand>
                            </div>
                            <div className='d-flex align-items-center ms-auto gap-3'>
                                <Nav.Link className='text-right'>More details</Nav.Link>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            </div>
                        </div>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Design2Clinet
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                    <Nav.Link as={Link} to="/service">Service</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}

export default Header;