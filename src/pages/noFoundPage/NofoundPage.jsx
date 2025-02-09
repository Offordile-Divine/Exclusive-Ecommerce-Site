import React from "react";
import "./noFound.css";
import { Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import Footer from "../../components/footer/Footer";

const NofoundPage = () => {
 return (
 <>
 <div>
 <div className="pi_navFooter">
 <Link to="/">Home</Link>
 <BsSlashLg id="pi_icon" />
 <Link className="proof" to="/profile">
 404 Error
 </Link>
 </div>
 <div className="noFound">
 <h1>404 Not Found</h1>
 <p>Your visited page not found. You may go home page.</p>
 <Link to="/">Move to home page</Link>
 </div>
 </div>

 <Footer />
 </>
 );
};

export default NofoundPage;

