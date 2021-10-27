import React from "react";
import "./Login.css";
import googleLogo from "../../images/logos/google.svg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
 const createAnAccount = () => {
  alert("register on progress try with google");
 };

 //

 const { googleSignIn } = useAuth();

 //

 return (
  <div className="login-section container d-flex justify-content-center align-items-center">
   <div className="login-card">
    <h4 className="text-center fw-bold">Login With</h4>
    <button onClick={googleSignIn} className="login-auth-btn">
     <img src={googleLogo} style={{ width: "1.5rem" }} alt="" />{" "}
     <p className="m-0">Continue with google</p>
    </button>
    <div className="my-2">
     <p>
      Don't have an account?{" "}
      <Link onClick={createAnAccount} to="/login">
       create an account
      </Link>
     </p>
    </div>
   </div>
  </div>
 );
};

export default Login;
