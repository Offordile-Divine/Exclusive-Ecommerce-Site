import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer_content">
        <div className="footer_name">
          <h1>Company</h1>
        </div>
        <div className="footer">
          <div className="footer_session">
            <p className="header">
              <b>Support</b>
            </p>
            <p>
              Lorem Ipsum is a <br /> dummy text address
            </p>
            <p>#######@gmail.com</p>
            <p>+3333-33333-33333</p>
          </div>

          <div className="footer_session">
            <p className="header">
              <b>Account</b>
            </p>
            <Link>My Account</Link>
            <Link>Login/Register</Link>
            <Link>Cart</Link>
            <Link>Shop</Link>
          </div>

          <div className="footer_session">
            <p className="header">
              <b>Quick Link</b>
            </p>
            <Link>FAQ</Link>
            <Link>Contact</Link>
          </div>

          <div className="footer_session">
            <p className="header">
              <b>Payment</b>
            </p>
            <Link>Verve</Link>
            <Link>MasterCard</Link>
            <Link>Visa</Link>
            <Link>Tracking Order</Link>
          </div>

          <div className="footer_session">
            <p className="header">
              <b>Legal</b>
            </p>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/returnPolicy">Return Policy</Link>
          </div>
        </div>

        <div className="mb_footer">
          <div className="sec1">
            <Link>Account</Link>
            <Link>Contact Us</Link>
            <Link>Help</Link>
            <Link>Terms & Condition </Link>
          </div>

          <div className="sec2">
            <Link>Faq</Link>
            <Link>Contact Us</Link>
            <Link to="/returnPolicy">Return Policy</Link>
            <Link to="/privacy">Privacy Policy </Link>
          </div>
        </div>

        <div className="footer_below">
          <hr id="footerHr" />

          <div className="footer_copyright">
            <p>
              <BsCCircle />
              Copyright Company 202#,All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* <> */}
      {/* <div className="mb_content">
          <div className="mb_header">
            <h1>Company</h1>
          </div>

          <div>
            <table>
              <tbody>
                <tr>
                  <td className="mb_account">Account</td>
                  <td className="mb_contact">Contact Us</td>
                  <td className="mb_help">Help</td>
                  <td className="mb_terms">Terms & Condition</td>
                </tr>

                <tr>
                  <td className="mb_faq">Faq</td>
                  <td className="mb_us">Contact Us</td>
                  <td className="mb_return">Return Policy</td>
                  <td className="mb_privacy">Privacy Policy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb_below">
            <hr></hr>

            <div className="mb_copyright">
              <p>Copyright Company 202#,All rights reserved</p>
            </div>
          </div>
        </div> */}
      {/* </> */}
    </>
  );
};

export default Footer;
