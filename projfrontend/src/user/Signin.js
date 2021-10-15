import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
    loading: false,
    didRedirect: false,
  });

  const { name, email, password, error, success, loading, didRedirect } =
    values; //destructure

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Your account has been created. Please{" "}
            <Link to="/signin">login</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };
  const validatePassword = () => {};

  const signInForm = () => {
    return (
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light"> Email</label>
            <input
              className="form-control"
              type="email"
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

          <div className=" d-grid gap-2 col-md-4 mt-3 mx-auto">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Base title="Welcome, to the login page" description="Login Here">
      {signInForm()}
      <p className="text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
