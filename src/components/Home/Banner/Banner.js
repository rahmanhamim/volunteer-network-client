import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
 return (
  <div className="banner-container container-fluid d-flex justify-content-center align-items-center">
   <div className="container d-flex justify-content-center align-items-center">
    <div>
     <div className="banner-text my-3">
      <h1 className="text-capitalize">I grow by helping people in need</h1>
     </div>
     <div className="serach-input d-flex justify-content-center align-items-center">
      <InputGroup className="mb-3" style={{ maxWidth: "26rem" }}>
       <FormControl
        placeholder="Serach"
        aria-label="Search"
        aria-describedby="basic-addon2"
       />
       <Button variant="primary" id="button-addon2">
        Search
       </Button>
      </InputGroup>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Banner;
