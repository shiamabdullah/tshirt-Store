import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "ten@tees.com",
    password: "test",
    error: false,
    success: false,
    loading: false,
    didRedirect: false,
    tokenErrorMsg: "",
  });

  const {
    name,
    email,
    password,
    error,
    success,
    loading,
    didRedirect,
    tokenErrorMsg,
  } = values; //destructure

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    const user = { email, password };
    signin(user)
      .then((data) => {
        console.log("Token Data", data);
        if (data.token) {
          let sessionToken = data.token;
          authenticate(sessionToken, () => {
            console.log("Token Added");
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({
            ...values,
            loading: false,
            error: true,
            tokenErrorMsg: data.error,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading ...</h2>
        </div>
      )
    );
  };

  const sessionExistCheck = () => {};

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Your account has been created. Please{" "}
            <Link to="/signin">Login</Link>
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
            {tokenErrorMsg}
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
            <button className="btn btn-success" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <Base title="Welcome, to the login page" description="Login Here">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      <p className="text-center">{JSON.stringify(values)}</p>
      {performRedirect()}
    </Base>
  );
};

export default Signin;
