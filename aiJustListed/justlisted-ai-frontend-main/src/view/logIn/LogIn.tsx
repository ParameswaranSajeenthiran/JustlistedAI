import React, { useState } from "react";
import { AppleSvg, FacebookSvg, GoogleSvg } from "../../assets/icon";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import InputPwd from "../../components/input/InputPwd";
import InputMail from "../../components/input/InputMail";
import InputSswipe from "../../components/input/InputSswipe";
import axios from "axios";
function LogIn() {
  const navigate = useNavigate();
  const [error, seterror] = useState({
    error: false,
    errorMsg: "error",
  });
  const [formData, setformData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    if (name === "remember") {
      setformData({ ...formData, [name]: checked });
    } else {
      setformData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      seterror({ error: true, errorMsg: "Email and password are required" });
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/user/login`,
        formData
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("userImage", response.data.userImage);
        navigate("/welcome");
      }
    } catch (error:any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.success === false
      ) {
        seterror({ error: true, errorMsg: error.response.data.message });
      } else {
        seterror({ error: true, errorMsg: "An unexpected error occurred" });
      }
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="register-form">
          <div className="register-with">
            <label htmlFor="">Sign in with</label>
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
            <InputMail
              error={false}
              value={formData.email}
              onchange={handleChange}
              title="Email"
              placeholder="Your email address"
              name="email"
            />
            <InputPwd
              error={false}
              value={formData.password}
              onchange={handleChange}
              title="Password"
              placeholder="Your password"
              name="password"
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
            <button type="submit">SIGN IN</button>
          </form>
          <div className="signin">
            <p>Already have an account?</p>
            <Link to={"/register"}> Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
