import React from "react";
import startedImg from "../../assets/images/form-image.png";
import "./getStarted.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Get_started = () => {
  const schema = yup.object().shape({
    address: yup.string().required("It is required"),
    phoneNumber: yup.number().required("Must be a number"),
    calender: yup.string().max(new Date()).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="Get">
      <div className="getStarted">
        <img src={startedImg} />

        <div className="getStarted_form">
          <h1>Get Started</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
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
            <input
              type="date"
              placeholder="Calender"
              {...register("calender")}
            />
            <p>{errors.calender?.message}</p>

            <div className="btns">
              <button onClick={handleSubmit(onSubmit)} id="cont">
                Continue
              </button>
              <button id="skip">Skip</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Get_started;
