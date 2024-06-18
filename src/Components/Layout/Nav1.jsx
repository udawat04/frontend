import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../App.css";

const Nav1 = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="head">
        <Navbar.Brand className="navbar-brand">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link">
              <Link to="/" className="nav-item">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/about" className="nav-item">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/contact" className="nav-item">
                Contact us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/cart" className="nav-item">
                Cart
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/product" className="nav-item">
                Product
              </Link>
            </Nav.Link>
            <Nav.Link className="search">
              <input
                type="search"
                className="searchbox"
                placeholder="Search Plants Here... "
              />
              <button>
                <img src="/images/search.PNG" alt="" className="searchlogo" />
              </button>
            </Nav.Link>

            <Nav.Link className="iconstab">
              <button>
                <img src="/images/rupee.jpg" alt="" className="iconslogo" />
              </button>
              <button>
                <Link to="/login" className="">
                  <img
                    src="/images/admin.PNG"
                    alt=""
                    className="iconslogo adminlogo"
                  />
                </Link>
              </button>
            </Nav.Link>

            {/* <div className="search"></div> */}

            {/* <div className="iconstab"></div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1