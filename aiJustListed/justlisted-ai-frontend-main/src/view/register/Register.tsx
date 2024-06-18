import React, { useState } from "react";
import "./register.scss";

import { AppleSvg, FacebookSvg, GoogleSvg } from "../../assets/icon";
import InputText from "../../components/input/InputText";
import InputMail from "../../components/input/InputMail";
import InputSswipe from "../../components/input/InputSswipe";
import InputPwd from "../../components/input/InputPwd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const [pwdError, setpwdError] = useState(false);
  const [error, seterror] = useState({
    error: false,
    errorMsg: "error",
  });
  const [formData, setformData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    if (name === "remember") {
      setformData({ ...formData, [name]: checked });
    } else if (name === "confirmPassword") {
      if (formData.password === value) {
        setpwdError(false);
      } else {
        setpwdError(true);
      }
      setformData({ ...formData, [name]: value });
    } else {
      setformData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      axios
        .post(`${process.env.REACT_APP_API}/user/signup`, formData)
        .then((response) => {
          if (response.data.success) {

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userName", response.data.userName);
            navigate("/emailVerify");
          }
        })
        .catch((error) => {
          if (error.response.data.success === false) {
            console.log(error.response.data);
            seterror({ error: true, errorMsg: error.response.data.message });
          }
        });
    } else {
      setpwdError(true);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <div className="register-form">
          <div className="register-with">
            <label htmlFor="">Register with</label>
            <div className="social">
              <button>
                <FacebookSvg />
              </button>
              <button>
                <AppleSvg />
              </button>
              <button>
                <GoogleSvg />
              </button>
            </div>
          </div>
          <span>Or</span>
          <form onSubmit={handleSubmit}>
            <InputText
              value={formData.userName}
              onchange={handleChange}
              title="Name"
              placeholder="Your Name"
              name="userName"
            />
            <InputMail
              value={formData.email}
              onchange={handleChange}
              title="Email"
              placeholder="Your email address"
              name="email"
            />
            <InputPwd
              value={formData.password}
              onchange={handleChange}
              title="Password"
              placeholder="Your password"
              name="password"
              error={pwdError}
              errorMsg={""}
            />
            <InputPwd
              error={pwdError}
              errorMsg={"pass word not match"}
              value={formData.confirmPassword}
              onchange={handleChange}
              title="confirm Password"
              placeholder="Your password"
              name="confirmPassword"
            />
            <InputSswipe
              checked={!formData.remember}
              name="remember"
              error={false}
              value="eaapmple"
              onchange={handleChange}
              title="Remember me "
            />
            {error.error ? (
              <span className="errormessage">{error.errorMsg}</span>
            ) : null}
            <button type="submit">SIGN UP</button>
          </form>
          <div className="signin">
            <p>Already have an account?</p>
            <Link to={"/login"}> Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
