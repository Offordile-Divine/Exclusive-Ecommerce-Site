import React, { useEffect, useState } from "react";
import "../profile.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const APIKEY = import.meta.env.VITE_API_KEY;

const ProfileSubmitAddress = () => {
  const [states, setStates] = useState([]);
  const [selectedLga, setSelectedLga] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");

  const schema = yup.object().shape({
    firstname: yup.string().required("First Name is requred"),
    lastname: yup.string().required("Last Name is required"),
    phonenumber: yup.number().typeError("Must be anumber").required(),
    streetname: yup.string().required("Street Name is required"),
    direction: yup.string(),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    lga: yup.string().required("LGA is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const stateDate = async () => {
    const stateOpt = {
      header: {
        "x-api-key": APIKEY,
        "Content-Type": "application/json",
      },
    };
    try {
      const stateEnd = await axios.get(
        "https://100daysofcoding-production.up.railway.app/api/v1/states",
        stateOpt
      );
      setStates(stateEnd.data);
      setSelectedLga(stateEnd.data);
      // if (states) {
      //   setSelectedLga(selectedLga.lgas);
      //   setValue("State", states.id);
      // }
      console.log(stateEnd);
    } catch (err) {
      console.log(err);
    }
  };

  // Update LGAs based on selected state
  const handleStateChange = (e) => {
    const selectedStateId = e.target.value;
    setSelectedStateId(selectedStateId);

    // Find the state by id and set its LGAs
    const selectedState = states.find(
      (state) => state.id === parseInt(selectedStateId)
    );

    if (selectedState) {
      setSelectedLga(selectedState.selectedLga || []);
    } else {
      setSelectedLga([]); // Reset LGAs if no state is selected
    }
  };

  useEffect(() => {
    stateDate();
  }, []);

  console.log(states);
  console.log(selectedLga);
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div className="submitAddress">
      <Link>
        <FaArrowLeft id="arrowBack" />
      </Link>

      <div className="linkbtn">
        <Link id="addressId">Add Delivery Address</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addressVal">
          <div className="form-name">
            <label>First Name</label>
            <input type="text" id="inputPass" {...register("firstname")} />
          </div>
          <div className="form-name">
            <label>Last Name</label>
            <input type="text" id="inputPass" {...register("lastname")} />
          </div>
        </div>

        <div className="phoneNum">
          <label>Phone Number</label>
          <input type="number" id="inputPass" {...register("phonenumber")} />
        </div>

        <div className="phoneNum">
          <label>Street Number</label>
          <input type="text" id="inputPass" {...register("streetname")} />
        </div>

        <div className="phoneNum">
          <label>Direction (Optional)</label>
          <input type="text" id="inputPass" {...register("direction")} />
        </div>
        <div className="lga">
          <label>State</label>
          <select
            className="select"
            {...register("state")}
            onChange={handleStateChange}
          >
            <option>Select a state</option>
            {states.map((state, i) => (
              <option key={state.id} value={state.id}>
                {state.state}
              </option>
            ))}
          </select>
        </div>

        <div className="lga">
          <label>City</label>
          <select className="select" {...register("city")}>
            <option>Select</option>
          </select>
        </div>

        <div className="lga">
          <label>LGA (Local Government Area)</label>
          <select
            className="select"
            {...register("lga")}
            // disabled={!selectedLga.length}
          >
            <option>Select a LGA</option>
            {selectedLga.map((lga, id) => (
              <option key={lga.id} value={lga.name}>
                {lga.lgas[1].name}
                {/* {lga.name} */}
              </option>
            ))}
          </select>
        </div>
        <div className="btnCont">
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSubmitAddress;
