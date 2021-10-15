import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    error: "",
    success: false,
  });

  const { name, email, password, password2, phone, gender, error, success } =
    values; //destructure

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }; //this higher order function ensures that when name comes heere it will set name when email comes it will set email and so on

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, phone, gender })
      .then((data) => {
        console.log("Data", data);
        if (data.email === email) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            phone: "",
            gender: "",
            error: "",
            success: true,
          });
        } else {
          setValues({
            ...values,
            error: true,
            success: false,
          });
          console.log("ERRR", data.email[0]);
        }
      })
      .catch((e) => console.log(e));
  };

  const validatePassword = () => {};

  const signUpForm = () => {
    return (
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light"> Name</label>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={handleChange("name")} //triggered when name changes
            />
          </div>
          <div className="form-group">
            <label className="text-light"> Email</label>
            <input
              className="form-control"
              type="text"
              value={email}
              onChange={handleChange("email")} //triggered when name changes
            />
          </div>
          <div className="form-group">
            <label className="text-light"> Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={handleChange("password")} //triggered when name changes
            />
          </div>
          <div className="form-group">
            <label className="text-light"> Gender</label>
            <select class="form-select" onChange={handleChange("gender")}>
              <option value="Male">♂ Male</option>
              <option value="Female">♀ Female</option>
            </select>
          </div>

          <div className="form-group">
            <label className="text-light"> Phone Number</label>
            <input
              className="form-control"
              type="text"
              value={phone}
              onChange={handleChange("phone")} //triggered when name changes
            />
          </div>

          <div className=" d-grid gap-2 col-md-4 mt-3 mx-auto">
            <button className="btn btn-success" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Base title="Sign Up Page" description="Sign up Tshirtee user">
      {signUpForm()}
      <p className="text-white ">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
