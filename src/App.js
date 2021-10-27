import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Events from "./components/Events/Events";
import AddService from "./components/AddService/AddService";
import DeleteService from "./components/DeleteService/DeleteService";

function App() {
 return (
  <div>
   <AuthProvider>
    <Router>
     <Header></Header>
     <Switch>
      <Route exact path="/">
       <Home></Home>
      </Route>
      <Route exact path="/login">
       <Login></Login>
      </Route>
      <Route exact path="/addservice">
       <AddService></AddService>
      </Route>
      <PrivateRoute exact path="/deleteservice">
       <DeleteService></DeleteService>
      </PrivateRoute>
      <PrivateRoute exact path="/events">
       <Events></Events>
      </PrivateRoute>
     </Switch>
    </Router>
   </AuthProvider>
  </div>
 );
}

export default App;
