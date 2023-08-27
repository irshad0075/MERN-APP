import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GlobalContext } from "../../../Context/context";
import Cookies from "js-cookie";
import "../styles/header.css";

function Header() {
  const { state, dispatch } = useContext(GlobalContext);

  const linkStyle = {
    color: "#fff",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    margin: "0 50px", // Adding space between links
  };

  const navStyle = {
    maxHeight: "100px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center align the links
  };

  return (
    <Navbar expand="lg" className="Navigation">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#fff" }}>
          <h2>
            <strong>Arshi Rovers</strong>
          </h2>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "#fff" }} />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#fff" }}>
          <Nav className="me-auto my-4 my-lg-0" style={navStyle} navbarScroll>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <Link to="/Blogs" style={linkStyle}>
              Blogs
            </Link>
            <Link to="/products" style={linkStyle}>
              Cars
            </Link>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/registration" style={linkStyle}>
              Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
