import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/context";

import {
  BsFillHouseFill,
  BsGrid3X3GapFill,
  BsBoundingBoxCircles,
  BsFillPersonFill,
  BsBoxArrowRight,
} from "react-icons/bs"; // Import icons
import Cookies from "js-cookie";
import "./top-nav.css";

export default function NavigationBar() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed-top">
      <Container>
        <Link className="navbar-brand" to="/">
          <span className="brand-icon">
            <BsFillHouseFill size={30} />
          </span>
          Arshi Rovers
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/dashboard" className="nav-link">
              <span className="nav-icon">
                <BsBoundingBoxCircles size={20} />
              </span>
              Dashboard
            </Link>
            <Link to="/sell-car" className="nav-link">
              <span className="nav-icon">
                <BsBoundingBoxCircles size={20} />
              </span>
              Sell Car
            </Link>
            <Link to="/category" className="nav-link">
              <span className="nav-icon">
                <BsGrid3X3GapFill size={20} />
              </span>
              Category List
            </Link>
            <Link to="/brands" className="nav-link">
              <span className="nav-icon">
                <BsBoundingBoxCircles size={20} />
              </span>
              Brand List
            </Link>
            <Link to="/products" className="nav-link">
              <span className="nav-icon">
                <BsBoundingBoxCircles size={20} />
              </span>
              Products List
            </Link>
            {/* <Link to="/cars" className="nav-link">
              <span className="nav-icon">
                <BsBoundingBoxCircles size={20} />
              </span>
              Cars
            </Link> */}
          </Nav>
          <div className="d-flex gap-3">
            <button
              className="btn btn-dark"
              onClick={() => {
                Cookies.remove("token");
                dispatch({ type: "USER_LOGOUT" });
              }}
            >
              <BsBoxArrowRight size={20} className="me-2" />
              Sign Out
            </button>
            {/* <button className="btn btn-outline-success">
              <span className="nav-icon">
                <BsFillPersonFill size={20} />
              </span>
              Admin
            </button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
