import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

const ProfileDelete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleDelete = () => {
    console.log("Deleted");
    setIsOpen(false);
    setIsDeleted(true);
  };
  return (
    <div className="submitAddress">
      <div className="deliveryOpt">
        <Link>
          <FaArrowLeft id="arrowBack" />
        </Link>
        <div className="linkbtn">
          <Link id="addressId">Delete Account</Link>
        </div>
      </div>

      <div className="detailDel">
        <p>
          Deleting your account erases all your data permanently and you will
          not be able to get them back. Read terms and condition before proceed?
        </p>
      </div>

      {isOpen && (
        <div className="wrapConfirmDelete">
          <div className="delMyAcct">
            <p>Are you sure you want to delete your account permanently</p>
            <div className="yesNo">
              <button id="yes" onClick={handleDelete}>
                YES
              </button>
              <button id="no" onClick={handleClose}>
                NO
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleted ? (
        <div className="checkDel">
          <div className="delCheck">
            <h5>Deleted</h5>
            <IoCheckmark id="check" />
          </div>
        </div>
      ) : (
        <div className="delBtn">
          <button onClick={handleOpen}>Delete Account</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDelete;
