import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { GlobalContext } from "../../../Context/context";
import Cookies from "js-cookie";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../../styles/header.css";

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

  const cartStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    marginLeft: "20px", // Adding space after cart icon
  };

  return (
    <Navbar expand="lg" className="Navigation">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#fff" }}>
          <h2>
            <strong>Arshi Rovers</strong>
          </h2>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-4 my-lg-0" style={navStyle} navbarScroll>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/products" style={linkStyle}>
              Cars
            </Link>
            <Link to="/Blogs" style={linkStyle}>
              Blogs
            </Link>
            <Link to="/category" style={linkStyle}>
              Categories
            </Link>
            <Link to="/brands" style={linkStyle}>
              Brands
            </Link>
            <Link to="/carts" style={{ ...linkStyle, ...cartStyle }}>
              <FaShoppingCart />
            </Link>
          </Nav>

          <div className="d-flex gap-3 align-items-center">
            <Button
              className="btn btn-dark"
              onClick={() => {
                Cookies.remove("token");
                dispatch({ type: "USER_LOGOUT" });
              }}
            >
              Sign Out
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
