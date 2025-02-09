import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get } from "react-hook-form";
import axios from "axios";

const ProfileUserDetail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleUserDetail = (e) => {
    e.preventDefault();

    navigate(`/profile/myProfile`);
  };

  useEffect(() => {
    // Fetch user details on component mount
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("accessToken");

      const opt = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      try {
        const res = await axios.get(
          "https://one00daysofcoding.onrender.com/user/v1/profile",
          opt
        );

        if (res.status === 200) {
          const { firstname, lastname, phonenumber, email, address } =
            res.data.data;

          setFirstName(firstname);
          setLastname(lastname);
          setPhonenumber(phonenumber);
          setEmail(email);
          setAddress(address);
        }
      } catch (err) {
        console.error("Error occurred:", err.response);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="profileOrder">
      <div className="orderHistoryNAv">
        <div className="orderWrap">
          <Link>
            <FaArrowLeft id="arrowBack" />
          </Link>
          <Link id="orderHistoryTitle">User Information</Link>
        </div>
      </div>

      <form className="userDetailForm">
        <div className="userDetailInput">
          <label>First Name</label>
          <input
            value={firstName}
            onChange={() => setFirstName(e.target.value)}
          />
        </div>

        <div className="userDetailInput">
          <label>Last Name</label>
          <input
            value={lastname}
            onChange={() => setLastname(e.target.value)}
          />
        </div>

        <div className="userDetailInput">
          <label>Phone Number</label>
          <input
            value={phonenumber}
            onChange={() => setPhonenumber(e.target.value)}
          />
        </div>

        <div className="userDetailInput">
          <label>Email Address</label>
          <input value={email} onChange={() => setEmail(e.target.value)} />
        </div>

        <div className="userDetailInput">
          <label>Address</label>
          <input value={address} onChange={() => setAddress(e.target.value)} />
        </div>
      </form>
      <div className="btnEditAcct">
        <button onClick={handleUserDetail}>Edit Account</button>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
