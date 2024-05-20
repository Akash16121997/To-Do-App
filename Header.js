import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto Nav_bar_Wrapper">
          <Link to="/Login">LOGIN</Link>
          <Link to="/UpdateProduct">Update</Link>
          <Link to="/Register">Register</Link>
          <Link to="/AddProduct">Update</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
