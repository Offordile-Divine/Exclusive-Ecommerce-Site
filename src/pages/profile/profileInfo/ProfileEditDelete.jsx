import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { TbMessageCircleUser } from "react-icons/tb";

const ProfileEditDelete = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

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
          setAddress(address);
        }
      } catch (err) {
        console.error("Error occurred:", err.response);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="submitAddress">
      <div className="deliveryOpt">
        <Link>
          <FaArrowLeft id="arrowBack" />
        </Link>
        <div className="linkbtn">
          <Link id="addressId">Delivery Address</Link>
          <Link
            to="/profile/myAdddress/deliveryDrop"
            id="btn_newAddress"
            onClick={() => setSummitLayout(1)}
          >
            Add new Address
          </Link>
        </div>
      </div>
      <div className="userDetail">
        <div className="user_info">
          <p id="defaultDeliveryAddress">Default Delivery Address</p>
          <div className="delEdit">
            <Link id="user_del">Delete</Link>
            <Link to={`/profile/myAddress/deliveryDrop`} id="user_edit">
              Edit
            </Link>
          </div>
        </div>
        <div className="usersData">
          <div className="userDataDetail">
            <LuUser2 id="iconPersonal" />
            <p id="personalUserInfo">
              {lastname} {firstName}
            </p>
          </div>
          <div className="userDataDetail">
            <GoLocation id="iconPersonal" />
            <p id="personalUserInfo">{address}</p>
          </div>
          <div className="userDataDetail">
            <TbMessageCircleUser id="iconPersonal" />
            <p id="personalUserInfo">{phonenumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditDelete;
