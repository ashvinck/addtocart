import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//   NavigationBar 

export function NavigationBar({ itemCount}) {
  return (
    <div className="navigation-bar-container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="link me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="shop-nav-container">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex Cartright">
                <button className="btn btn-outline-dark cartbutton" type="submit">
                  <FontAwesomeIcon icon={faCartShopping} />
                  &ensp;
                  Cart
                  &ensp;
                  <span className="badge bg-dark text-white ms-1 rounded-pill ">{itemCount}</span>
                </button>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
;
