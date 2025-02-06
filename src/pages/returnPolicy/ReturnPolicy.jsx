
import React from 'react'
import HomeNav from '../../components/navigation/home-nav/HomeNav'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "./return.css"

const ReturnPolicy = () => {
  return (
    <>
    <div className="return_total">
      <HomeNav />

        <div className="return_general">
          <div className="return_link">
            <Link to="/">Home / </Link>
            <Link to="/help">Help / </Link>
            <Link to="/returnPolicy">Return Policy </Link>
          </div>

          <div className="return_body">
            <h2>Return Policy</h2>
            
            <h3>Refund and Return Timelines</h3>

            <p>All you need to know about our returns and refunds timelines can be seen below: <br />Please note that only 2 attempts will be made to retrieve your item. Business days are from Monday to Friday, and do not include Weekends and Public Holidays.</p>

            <h3>I. Return Pick up Timeline:</h3>

            <p>The return pick up time starts from the day you make a request to return an item to the day one of our delivery associate retrieves the item that you will like to return. These timelines also apply if you are dropping your returns at one of our PICK-UP STATIONS. You can create a return online.
            <br />
            <br />
            Once the return is created, please note that:
            <br />
            <br />
            If you have chosen to return your item(s) to a Company pickup station:
            Please drop off your item(s) as soon as possible. Your return request will be canceled 
            if the package is not dropped off within 3 working days following the return creation.
            <br />
            <br />
            If you have chosen to have our delivery agent pick up your return item(s) from your delivery address: please be aware that our agent will contact you within 1 to 2 business days to schedule a pickup. If the items are not picked up within two attempts, your return request will be canceled.</p>

            <h3>II. Refund Timeline:</h3>

            <p>The refund time starts from the day the item you would like to return is picked up by one of our delivery associates to the day the refund process is completed. Note: If the reason for returning an item cannot be validated, such item will be redelivered to you and a refund will not be processed.
            <br />
            <br />
            If your return request is validated, it may take 3 to 10 business days for your bank to process and credit the funds back to your account.</p>

            <ul>
              <li>For Bank cards (Visa/Mastercard), the refund narration will be RFND E-Cart Internet.</li>
              <li>For Verve cards, the refund narration will be IPG/Customer Ref.</li>
              <li>For Bank transfers, the refund narration will be XxxPay/MNFY.</li>
            </ul>

            <p>- If you used Credpal payment, the refund will be processed into the Credpal account depending on the payment plan.
              <br />
            - If you used Voucher to pay, the refund voucher will be processed within 24 hours and sent to your email.
            <br />
            <br />
            We hope this guide has been helpful. Happy Shopping!</p>
          </div>
        </div>

      <Footer />
    </div>
    </>
  )
}

export default ReturnPolicy
