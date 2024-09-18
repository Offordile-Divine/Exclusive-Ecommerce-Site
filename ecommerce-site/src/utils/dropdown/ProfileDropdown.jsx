import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import "./dropdown.css";
import { AppContext } from "../../App";

const ProfileDropdown = () => {
  const [click, setClick] = useState(false);
  const { name, setName } = useContext(AppContext);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="ProfileDropDown">
      <div className="tog">
        <div className="prof-icon" onClick={handleClick}>
          <Link id="tog_prof">Profile</Link>
          {click ? (
            <SlArrowDown
              style={{
                cursor: "pointer",
                marginLeft: "5px",
                textAlign: "center",
              }}
            />
          ) : (
            <IoIosArrowUp
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                textAlign: "center",
              }}
            />
          )}
        </div>
      </div>

      <ul className={click ? "prof_toggle active" : "prof_toggle"}>
        <h1 id="customerName">Hi, {name ?? "user"}</h1>
        <hr />
        <li className="prof_tog">
          <Link to="/profile" className="rm">
            My profile {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/orders" className="rm">
            Orders {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/savedItems" className="rm">
            Saved Items {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/inbox" className="rm">
            Inbox {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/track" className="rm">
            Track My Order {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/paymentWallet" className="rm">
            Payment/Wallet Setting {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="prof_tog">
          <Link to="/logOut" className="rm">
            Log Out {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default ProfileDropdown;
