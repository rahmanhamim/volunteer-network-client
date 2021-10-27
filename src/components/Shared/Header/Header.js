import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logos/site-logo.png";
import "./Header.css";

const Header = () => {
 const { user, logOut } = useAuth();

 return (
  <Navbar className="navbar-container" expand="lg">
   <Container>
    <Link to="/">
     <img src={logo} alt="" style={{ width: "150px" }} />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <Link className="navlink-custom m-2" to="/">
       Home
      </Link>
      <Link className="navlink-custom m-2" to="/addservice">
       Add Service
      </Link>
      <Link className="navlink-custom m-2" to="/deleteservice">
       Delete Service
      </Link>
      <Link className="navlink-custom m-2" to="/blog">
       Blog
      </Link>
      <small className="navlink-custom my-2">{user.email}</small>
      {!user.email ? (
       <>
        {" "}
        <Link to="/login">
         <button className="btn btn-outline-success m-2">Login</button>
        </Link>
        <Link to="/register">
         <button className="btn btn-outline-warning m-2">Register</button>
        </Link>{" "}
       </>
      ) : (
       <button onClick={logOut} className="btn btn-outline-danger m-2">
        {" "}
        logout
       </button>
      )}
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
