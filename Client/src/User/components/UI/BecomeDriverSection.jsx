import React from "react";
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
