import React from "react";
import { Col, Card } from "reactstrap"; // Import Card component from reactstrap
import { RiCheckboxCircleLine } from "react-icons/ri"; // Import the correct icon component
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      <div className="row">
        {servicesData.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <Card className="service__item">
      <div className="d-flex align-items-center justify-content-center icon-container">
        <RiCheckboxCircleLine className="service-icon" /> 
      </div>

      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <p className="card-text section__description">{item.desc}</p>
      </div>
    </Card>
  </Col>
);

export default ServicesList;
