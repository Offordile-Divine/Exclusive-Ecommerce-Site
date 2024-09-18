import React from 'react'
import TpsNav from '../../components/navigation/terms-privacy-support-nav/TpsNav'

const Checkout = () => {
  return (
    <div>
      <TpsNav/>
      <div id='c_background'>
        <div id='c_delivery'>
          Delivery Information
          <form action=""></form>
        </div>
        <div id='c_schedule'>Schedule Delivery</div>
        <div id='c_payment'>Payment Method</div>
        <div></div>
      </div>
    </div>
  )
}

export default Checkout
