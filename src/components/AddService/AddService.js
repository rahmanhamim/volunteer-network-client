import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
 const { register, handleSubmit, reset } = useForm();

 const onSubmit = (data) => {
  console.log(data);
  fetch("http://localhost:5000/addservice", {
   method: "POST",
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.insertedId) {
     alert("service added succesfully");
     reset();
    }
   });
 };
 return (
  <div className="d-flex justify-content-center">
   <div>
    <h1>Add new service</h1>
    <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
     <input
      className="add-form-input-field"
      {...register("name")}
      placeholder="Service name"
     />
     <input
      className="add-form-input-field"
      type="url"
      {...register("img")}
      placeholder="Image URL"
     />
     <input
      className="btn btn-outline-success my-2"
      type="submit"
      value="Add"
     />
    </form>
   </div>
  </div>
 );
};

export default AddService;
