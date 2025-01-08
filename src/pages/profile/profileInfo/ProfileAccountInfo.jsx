import React from "react";
import "../profile.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileAccountInfo = () => {
  const schema = yup.object().shape({
    firtname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    address: yup.string().required("Address is required"),
    email: yup.string().email().required("Email should be valid"),
    currentPassword: yup
      .string()
      .min(4)
      .required("Current password is required"),
    newPassword: yup
      .string()
      .min(4)
      .when("currentPassword", (currentPassword, field) =>
        currentPassword ? field.required() : field
      ),
    confirmPassword: yup
      .string()
      .when("newPassword", (newPassword, field) =>
        newPassword ? field.required().oneOf([yup.ref("newPassword")]) : field
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);

    const profileForm = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    }
  };
  return (
    <div>
      <div className="account_infoAddress">
        <Link>
          <FaArrowLeft id="arrowBack" />
        </Link>
        <div className="account_infoAddressContent">
          <Link className="editProfile">Edit Your Profile</Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pi_inputFieldContent">
              <div className="pi_inputField">
                <label className="pi_InputName">First Name</label>
                <input type="text" id="inputRm" {...register("firtname")} />
                <p className="err">{errors.firtname?.message}</p>
              </div>
              <div className="pi_inputField">
                <label className="pi_InputName">Last Name</label>
                <input type="text" id="inputRm" {...register("lastname")} />
                <p className="err">{errors.lastname?.message}</p>
              </div>
            </div>

            <div className="pi_inputFieldContent">
              <div className="pi_inputField">
                <label className="pi_InputName">Address</label>
                <input type="text" id="inputRm" {...register("address")} />
                <p className="err">{errors.address?.message}</p>
              </div>
              <div className="pi_inputField">
                <lable className="pi_InputName">Email</lable>
                <input type="text" id="inputRm" {...register("email")} />
                <p className="err">{errors.email?.message}</p>
              </div>
            </div>
            <label id="passWordChange">Password Change</label>
            <input
              type="password"
              placeholder="Current password"
              id="inputPass"
              {...register("currentPassword")}
            />
            <p className="err">{errors.currentPassword?.message}</p>
            <input
              type="password"
              placeholder="New password"
              id="inputPass"
              {...register("newPassword")}
            />
            <p className="err">{errors.newPassword?.message}</p>
            <input
              type="password"
              placeholder="Confirm New Password"
              id="inputPass"
              {...register("confirmPassword")}
            />
            <p className="err">{errors.confirmPassword?.message}</p>

            <div className="btn_ProfileAdddress">
              <button id="btn_cancel">Cancel</button>
              <button id="btn_change" onClick={() => handleSubmit(onSubmit)}>
                Apply Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccountInfo;
