import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/context";
import Cookies from "js-cookie";
import "./Navigation.css";

export default function NavigationBar() {
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
    <Navbar expand="lg" className="navbar ">
      <Container>
        <Link className="navbar-brand" to="/">
          Arshi Rovers
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/category" style={linkStyle}>
              Category List
            </Link>
            <Link to="/brands" style={linkStyle}>
              Brand List
            </Link>
            <Link to="/products" style={linkStyle}>
              Products List
            </Link>
            <Link to="/cars" style={linkStyle}>
              Cars
            </Link>
          </Nav>

          <div className="d-flex gap-3 ">
            <button
              className="btn btn-dark"
              onClick={() => {
                Cookies.remove("token");
                dispatch({ type: "USER_LOGOUT" });
              }}
            >
              Sign Out
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
