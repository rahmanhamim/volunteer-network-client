import React, { useEffect, useState } from "react";

const DeleteService = () => {
 const [services, setServices] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/services")
   .then((res) => res.json())
   .then((data) => setServices(data));
 }, []);

 const handleDeleteService = (id) => {
  const confirmDelete = window.confirm("are you sure?");

  if (confirmDelete) {
   fetch(`http://localhost:5000/services/${id}`, {
    method: "DELETE",
   })
    .then((res) => res.json())
    .then((data) => {
     const remaining = services.filter((service) => service._id !== id);
     setServices(remaining);
    });
  }
 };

 return (
  <div>
   {services?.map((service) => (
    <div className="d-flex justify-content-center" key={service._id}>
     <div className="d-flex my-2 border p-2" style={{ minWidth: "28rem" }}>
      <p className="list-unstyled">{service.name}</p>
      <button
       onClick={() => handleDeleteService(service._id)}
       className="btn btn-danger ms-auto "
      >
       delete
      </button>
     </div>
    </div>
   ))}
  </div>
 );
};

export default DeleteService;
