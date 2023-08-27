import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineCar,
  AiOutlineMail,
} from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
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
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Navbar
      expand="lg"
      className="Navigation"
      // style={{ backgroundColor: " #2c2c2cdd" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#fff" }}>
          <h2>
            <strong>Arshi Rovers</strong>
          </h2>{" "}
          {/* Making "Arshi Rovers" bold */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "#fff" }} />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#fff" }}>
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: "100px", color: "#fff" }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ ...linkStyle }}>
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ ...linkStyle }}>
              <IoIosPaper /> About
            </Nav.Link>
            <Nav.Link href="/Blogs" style={{ ...linkStyle }}>
              <IoIosPaper /> Blogs
            </Nav.Link>
            <Nav.Link href="/products" style={{ ...linkStyle }}>
              <AiOutlineCar /> Cars
            </Nav.Link>
            <Nav.Link href="/login" style={{ ...linkStyle }}>
              <AiOutlineUser /> Login
            </Nav.Link>
            <Nav.Link href="/registration" style={{ ...linkStyle }}>
              <AiOutlineUser /> Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
