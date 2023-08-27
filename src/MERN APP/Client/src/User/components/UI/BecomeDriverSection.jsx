import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want Brand New Collections? So Don't Be Late
            </h2>
            <button>
              <Link to="/Contact" className="btn become__driver-btn mt-4" style={{backgroundColor : "grey" ,color:"white"}}>
                Contact Us
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
