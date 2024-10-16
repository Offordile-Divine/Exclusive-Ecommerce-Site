import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import "./dropdown.css";

const HelpDropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="HelpDropDown">
      <div className="tog">
        <div className="help-icon" onClick={handleClick}>
          <Link id="tog_help">Help</Link>
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
                marginLeft: "5px",
                textAlign: "center",
              }}
            />
          )}
        </div>
      </div>
      <ul className={click ? "help_toggle active" : "help_toggle"}>
        <li className="help_tog">
          <Link to="/contact" className="rm">
            Contact us {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="help_tog">
          <Link to="/track" className="rm">
            Track My Orders {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="help_tog">
          <Link to="/policy" className="rm">
            Return policy {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
        <li className="help_tog">
          <Link to="/faq" className="rm">
            FAQ's {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default HelpDropdown;
