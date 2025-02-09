import React from "react";
import startedImg from "../../assets/images/form-image.png";
import "./getStarted.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Get_started = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const schema = yup.object().shape({
    address: yup.string().required("Address is required"),
    phoneNumber: yup
      .number()
      .typeError("Phone number must be a number")
      .required("Phone number is required"),
    gender: yup
      .string()
      .oneOf(["Male", "Female", "Other"], "Invalid gender")
      .required("Gender is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user");

    const getStartedData = {
      address: data.address,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
    };

    const opt = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.patch(
        `https://one00daysofcoding.onrender.com/profile/${user.userId}`,
        getStartedData,
        opt
      );

      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      if (err.res) {
        console.error(err.message);
      }
    }
  };

  const skipBtn = () => {
    navigate("/");
  };
  return (
    <div className="Get">
      <LoginNav />
      <div className="getStarted">
        <img src={startedImg} />

        <div className="getStarted_form">
          <h1>Get Started</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="addressFormAddress"
          >
            <input
              type="text"
              placeholder="Home Address"
              {...register("address")}
            />
            <p>{errors.address?.message}</p>
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <p>{errors.phoneNumber?.message}</p>
            <input type="text" placeholder="Gender" {...register("gender")} />
            <p>{errors.gender?.message}</p>

            <div className="btns">
              <button onClick={handleSubmit(onSubmit)} id="cont">
                Continue
              </button>
              <button id="skip" onClick={skipBtn}>
                Skip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Get_started;
