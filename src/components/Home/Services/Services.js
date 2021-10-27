import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
 const [services, setServices] = useState([]);
 useEffect(() => {
  fetch("http://localhost:5000/services")
   .then((res) => res.json())
   .then((data) => setServices(data));
 }, []);

 //  console.log(services);

 return (
  <div className="container my-5">
   <Row xs={2} md={4} className="g-4">
    {services.map((service, index) => (
     <Service
      key={service._id}
      service={service}
      index={index}
      services={services}
     ></Service>
    ))}
   </Row>
  </div>
 );
};

export default Services;
