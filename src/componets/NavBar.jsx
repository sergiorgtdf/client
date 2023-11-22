// import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
    return (
        <>
            <Navbar
                expand="lg"
                className="navega "
                bg="primary"
                data-bs-theme="dark">
                <Container>
                    <div className="logo"></div>
                    <Navbar.Brand to="/">Arg.Pro 4.0</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/task">Task</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>

                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item to="changepass">
                                    Change Password
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
