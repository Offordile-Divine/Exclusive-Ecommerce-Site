import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer_content">
      <div className="footer">
      <div className="footer_name">
        <h1>Company</h1>
      </div>

      <div className="footer_support">
        <p className="header"><b>Support</b></p>
        <p>Lorem Ipsum is a <br /> dummy text address</p>
        <p>#######@gmail.com</p>
        <p>+3333-33333-33333</p>
      </div>

      <div className="footer_account">
        <p className="header"><b>Account</b></p>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Shop</p>
      </div>

      <div className="footer_link">
        <p className="header"><b>Quick Link</b></p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className="footer_payment">
        <p className="header"><b>Payment</b></p>
        <p >Verve</p>
        <p>MasterCard</p>
        <p>Visa</p>
        <p>Tracking Order</p>
      </div>

      <div className="footer_legal">
        <p className="header"><b>Legal</b></p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Return Policy</p>
      </div>

        
    </div>
    
    <div className="footer_below">
          <hr></hr>
        
          <div className="footer_copyright">
            <p>Copyright Company 202#,All rights reserved</p>
          </div>
          </div>
     </div>
      <br />
      <br />
     <>
     <div className="mb_content">
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
      </div>
     </>
     </>
  )
}

export default Footer;