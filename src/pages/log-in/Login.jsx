import React from "react";
import loginImg from "../../assets/images/form-image.png";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Reg_nav from "../../components/navigation/register-nav/Reg_nav";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import api from "../googleauth/Axiosconfig";

// const APIKEY = import.meta.env.VITE_API_KEY;

const Login = () => {
  // const {loggedIn} = useContext()
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const opt = {
      headers: {
        // "x-api-key": APIKEY,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://one00daysofcoding.onrender.com/auth/v1/login",
        loginData,
        opt
      );

      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      // toast.warning("Please enter the right input");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const responseGoogleLogin = await api.get("/api/v1/google");
      console.log(responseGoogleLogin);
      window.location.href = responseGoogleLogin.request.responseURL;
    } catch {
      console.error("Google login error");
    }
  };
  return (
    <div className="Login">
      <Reg_nav />
      <div className="login_content">
        <img src={loginImg} />
        <div className="login_form">
          <h1>Log In</h1>
          <p>Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="xxxx@gmail.com"
              {...register("email")}
            />
            <p className="err">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="#########"
              {...register("password")}
            />
            <p className="err">{errors.password?.message}</p>
            <div className="log_forget">
              <div>
                <button id="login_btn" type="submit">
                  Log In
                </button>
              </div>
              <div>
                <a href="">Forget password?</a>
              </div>
            </div>
            <div className="baseline">
              <hr id="hrBaseLine"/>
              <p id="or">or</p>
              <hr id="hrBaseLine"/>
            </div>

            <div className="googleSignin">
              <button onClick={handleGoogleLogin}>
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </form>
          <div className="acctForgetSignIn">
            <p>
              Don't have an account?
              <Link to="/registration">
                <b>Sign up</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
