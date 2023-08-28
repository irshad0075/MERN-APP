import React from "react";

import { Container, Row, Col } from "reactstrap";
import "../../styles/footer.css";
import { RiSendPlaneLine  } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <div className=" d-flex align-items-center gap-2">
                  <span>Arshi Rovers</span>
                </div>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

         

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">
                123 Gulshan Iqbal, Karachi, Pakistan
              </p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: arshirovers@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description" style={{ color: "white" }}>
                Subscribe our newsletter
              </p>
              <div className="newsletter" style={{ color: "white" }}>
                <input type="email" placeholder="Email" />
                <span>
                  <RiSendPlaneLine />
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p
                className="section__description d-flex align-items-center justify-content-center gap-1 pt-4"
                style={{ color: "white" }}
              >
                <i className="copyright">@</i>Copyright {year}, Developed
                by arshirovers. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
