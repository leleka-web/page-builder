import { Link } from "react-router-dom";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = ({ headerTitle }) => {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>{headerTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default React.memo(Header);
