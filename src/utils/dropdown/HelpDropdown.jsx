import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import "./dropdown.css";

const HelpDropdown = () => {
  const [click, setClick] = useState(false);
  const dropDownRef=useRef(null)

  const handleClick = () => {
    setClick(!click);
  };
  useEffect(()=>{
    function handleOutsideClick(e){
      if(dropDownRef.current['first'] && !dropDownRef['first'].current.contains(e.target)&&dropDownRef.current['second'] && !dropDownRef['second'].current.contains(e.target)){
        setClick(false)
      }
    }
    document.addEventListener('mousedown',handleOutsideClick)
    return ()=>{document.removeEventListener('mousedown',handleOutsideClick)}
  },[])

  return (
    <nav className="HelpDropDown p-2">
      <div className="tog">
        <div className="help-icon flex items-center gap-2" onClick={handleClick}>
          <FiHelpCircle size={20} />
          <span >Help</span>
          {click ? (
            <IoIosArrowDown
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            />
          ) : (
            <IoIosArrowUp
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}
            />
          )}
        </div>
      </div>
      <ol ref={dropDownRef} className={click ? "help_toggle active bg-white fixed  top-20 w-[250px] rounded-[7px] right-[2%] " : "help_toggle"}>
        <li className="help_tog">
          <Link to="/contact" className="rm">
            Contact us {<LiaGreaterThanSolid />}
          </Link>
        </li>

        <li className="help_tog">
          <Link to="/track" className="rm">
            Track My Orders {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <li className="help_tog">
          <Link to="/policy" className="rm">
            Return policy {<LiaGreaterThanSolid />}
          </Link>
        </li>
        <li className="help_tog">
          <Link to="/faq" className="rm">
            FAQ's {<LiaGreaterThanSolid />}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default HelpDropdown;
