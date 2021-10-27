import React from "react";
import { Card, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Service.css";
//thumbnailUrl

const Service = ({ service, index, services }) => {
 const { user } = useAuth();

 const handleJoinBtn = (index) => {
  const joinedTeam = services[index];
  joinedTeam.email = user.email;
  console.log(joinedTeam);
  fetch(`http://localhost:5000/userdata/${user.email}`, {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(joinedTeam),
  })
   .then((res) => res.json())
   .then((data) => console.log(data));
 };

 return (
  <Col className="">
   <Card className="h-100 service-card">
    <Card.Img variant="top" src={service.img} />
    <Card.Body>
     <Card.Title>{service.name}</Card.Title>
    </Card.Body>
    <Card.Footer>
     <button onClick={() => handleJoinBtn(index)} className="btn btn-success">
      Join Team
     </button>
    </Card.Footer>
   </Card>
  </Col>
 );
};

export default Service;
