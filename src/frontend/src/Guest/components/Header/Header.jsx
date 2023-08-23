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
  return (
    <Navbar
      expand="lg"
      className="bg-body-dark fixed-top"
      style={{ backgroundColor: "#000d6b" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#fff" }}>
          <h2>Arshi Rovers</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "#fff" }} />
        <Navbar.Collapse id="navbarScroll" style={{ color: "#fff" }}>
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: "100px", color: "#fff" }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: "#fff" }}>
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "#fff" }}>
              <IoIosPaper /> About
            </Nav.Link>
            <Nav.Link href="/Blogs" style={{ color: "#fff" }}>
              <IoIosPaper /> Blogs
            </Nav.Link>
            <Nav.Link href="/products" style={{ color: "#fff" }}>
              <AiOutlineCar /> Cars
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#fff" }}>
              <AiOutlineMail /> Contact
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "#fff" }}>
              <AiOutlineUser /> Login
            </Nav.Link>
            <Nav.Link href="/registration" style={{ color: "#fff" }}>
              <AiOutlineUser /> Signup
            </Nav.Link>
          </Nav>

          {/* <Button
            className="btn btn-dark sign-out-button"
            onClick={() => {
              Cookies.remove("token");
              dispatch({ type: "USER_LOGOUT" });
            }}
          >
            <FaSignOutAlt /> Sign Out
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
