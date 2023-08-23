import React, { useContext, useState } from "react";
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaCar,
  FaNewspaper,
  FaTags,
  FaCogs,
} from "react-icons/fa";
import { GlobalContext } from "../../../Context/context";
import Cookies from "js-cookie";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import "../../styles/header.css";


function Header() {
  const { state, dispatch } = useContext(GlobalContext);
  const user = state.user;

  const [showCart, setShowCart] = useState(false);

  const linkStyle = {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  const cartStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-dark fixed-top"
      style={{ backgroundColor: "#000d6b" }}
    >
      <Navbar.Brand
        href="/"
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Arshi Rovers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "#fff" }} />
      <Navbar.Collapse id="navbarScroll" style={{ color: "#fff" }}>
        <Nav
          className="me-auto my-4 my-lg-0"
          style={{ maxHeight: "100px", color: "#fff" }}
          navbarScroll
        >
      <Nav.Link href="/" style={{ ...linkStyle }}>
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link href="/about" style={{ ...linkStyle }}>
            <FaInfoCircle /> About
          </Nav.Link>
          <Nav.Link href="/products" style={{ ...linkStyle }}>
            <FaCar /> Cars
          </Nav.Link>
          <Nav.Link href="/Blogs" style={{ ...linkStyle }}>
            <FaNewspaper /> Blogs
          </Nav.Link>
          <Nav.Link href="/category" style={{ ...linkStyle }}>
            <FaTags /> Categories
          </Nav.Link>
          <Nav.Link href="/brands" style={{ ...linkStyle }}>
            <FaCogs /> Models
          </Nav.Link>
          <Nav.Link href="/carts" style={{ ...linkStyle, ...cartStyle }}>
            <FaShoppingCart />
          </Nav.Link>
        </Nav>

        <div className="d-flex gap-3 align-items-center">
          <Button
            className="btn btn-dark"
            onClick={() => {
              Cookies.remove("token");
              dispatch({ type: "USER_LOGOUT" });
            }}
          >
            <FaSignOutAlt /> Sign Out
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
