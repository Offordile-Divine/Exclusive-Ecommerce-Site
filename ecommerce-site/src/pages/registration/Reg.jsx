import React, { useContext, useState } from "react";
import formImg from "../../assets/images/form-image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./reg.css";
import { CiSquareCheck } from "react-icons/ci";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import { json, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "../../App";
import axios from "axios"
import Reg_nav from "../../components/navigation/register-nav/Reg_nav";

const APIKEY = import.meta.env.VITE_API_KEY;

const Reg = () => {
  const { setName } = useContext(AppContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().max(30).required("Your first name is required"),
    lastName: yup.string().max(30).required("Your last name is required"),
    email: yup.string().email().required("Email does not exist"),
    state: yup.string().max(15).required("Your state is required"),
    passWord: yup
      .string()
      .min(4, "Should be more than 4 characters")
      .max(20)
      .required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("passWord"), null], "Password don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    // console.log(data);

    const formData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      state: data.state,
      password: data.passWord,
      confirmPassword: data.confirmPassword,
    };
    console.log(data, formData);

    console.log(APIKEY);
    const opt = {
      headers: {
        "x-api-key": APIKEY,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "https://100daysofcoding-production.up.railway.app/auth/v1/register",
        formData,
        opt
      );
      // const response = await axios.get(
      //   "https://100daysofcoding-production.up.railway.app/api/v1/states"
      // );
      console.log("Response...", response.data);
      if (response.data.status === "success") {
        navigate("/otp");
      }
    } catch (err) {
      if (err.response) {
        console.error(err.response.data, "Error response message");
      } else if (err.request) {
        console.error(err.request, "Error request message....");
      } else {
        console.error(err.message, "Error message");
      }
    }

    // try {
    //   const res = fetch(
    //     "https://100daysofcoding-production.up.railway.app/auth/v1/register",
    //     {
    //       method: "POST",
    //       headers: {
    //         "x-api-key":
    //           "a4f5c6d7e8a9b10c11d12e13f14b15c16d17e18f19a20b21c22d23e24f25g26",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   );
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className="Form">
      <Reg_nav />
      {/* <Otp /> */}
      <div className="reg">
        <img src={formImg} />

        <div className="form-label">
          <h1>Create an account</h1>
          <p id="enter">Enter your details</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              // onChange={(e) => setName(e.target.value)}
            />
            <p className="err">{errors.firstName?.message}</p>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <p className="err">{errors.lastName?.message}</p>
            <input type="text" placeholder="State" {...register("state")} />
            <p className="err">{errors.state?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p className="err">{errors.email?.message}</p>
            <input
              type="password"
              placeholder="Password"
              {...register("passWord")}
            />
            <p className="err">{errors.passWord?.message}</p>

            <input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <p className="err">{errors.confirmPassword?.message}</p>
            {/* <input type="submit" className="submit-btn" /> */}

            <button className="btn-create" type="submit">
              Create an account
            </button>
            <div className="googleSignin">
              <button>
                <FcGoogle /> Sign in with Google
              </button>
            </div>
          </form>
          <div className="exist_log">
            <p>Already have an account?</p>
            <a href="#">Log in</a>
          </div>

          <div className="terms">
            <a href="#">Terms & conditions</a>
            <CiSquareCheck id="check" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
