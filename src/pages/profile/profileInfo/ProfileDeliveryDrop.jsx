import React, { useState } from "react";
import "../profile.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProfileSubmitAddress from "./ProfileSubmitAddress";
import ProfileEditDelete from "./ProfileEditDelete";

const ProfileDeliveryDrop = (props) => {
 const [summitLayout, setSummitLayout] = useState(0);
 const [editDel, setEditDel] = useState(false);

 const handleSummit = () => {
 setSummitLayout(1);
 };
 return editDel ? (
 <section>
 {summitLayout === 0 && (
 <div className="deliveryOpt">
 <Link>
 <FaArrowLeft id="arrowBack" />
 </Link>
 <div className="linkbtn">
 <Link id="addressId">Delivery Address</Link>
 <Link
 to={`myAdddress/deliveryDrop`}
 id="btn_newAddress"
 onClick={() => setSummitLayout(1)}
 >
 Add new Address
 </Link>
 </div>
 </div>
 )}
 {summitLayout === 1 && <ProfileSubmitAddress />}
 </section>
 ) : (
 <ProfileEditDelete />
 );
};

export default ProfileDeliveryDrop;