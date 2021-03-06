import React from "react";
import { Card } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useServices from "../../../Hooks/useServices";
import "./Services.css";

const Services = () => {
  const [serviceItem] = useServices();
  return (
    <>
      <section id="services" className="services_sec bg-light my-2">
        <div className="container">
          <div className="sec_title">
            <h2 className="pt-4 fw-bold">
              <span className="text-danger">Our</span> Service
            </h2>
          </div>
          <div className="row pt-5">
            {serviceItem.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  data-aos="fade-up"
                >
                  <Card className="services_card_item my">
                    <div className="services_img">
                      <Card.Img variant="top" src={item.img} />
                    </div>
                    <Card.Body className="service_text">
                      <h3>{item.name}</h3>
                      <p>{item.description.slice(1, 60)}....</p>
                      <HashLink to={`servicesDetails/${item.name}`}>
                        <button className="regular_btn">See Details</button>
                      </HashLink>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
