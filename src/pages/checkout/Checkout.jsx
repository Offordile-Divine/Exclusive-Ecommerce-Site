import React from 'react'
import TpsNav from '../../components/navigation/terms-privacy-support-nav/TpsNav'

import Footer from '../../components/footer/Footer'
import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./checkout.css"


const Checkout = (props) => {

  const {id, productName, price, productImage} = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const quantity = cartItems[id]?.quantity || 0;
  console.log(quantity);

  return (
    <>
    <div className='check_total'>
      <TpsNav/>
      <div className='check_general'>
        <div className='check_major'>
          <div className='check_header'>
            <h3>Delivery Information</h3>

            <div className='check_form'>
              <div className='check_name'>
                <form action="">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                  <label htmlFor="">Email</label>
                  <input type="text" />
                  <label htmlFor="">State</label>
                  <input type="text" />
                </form>
              </div>

              <div className='check_number'>
                <form action="">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" />
                  <label htmlFor="">City</label>
                  <input type="text" />
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div>
              <h3>Schedule Delivery</h3>

              <div className='check_delivery'>
                <form action="">
                  <label htmlFor="">Date</label>
                  <input type="date" name="" id="" />
                  <label htmlFor="">Note</label>
                  <input type="text" placeholder='Type your note' />
                </form>
              </div>
            </div>

            <div className='check_payment'>
              <h3>Payment Method</h3>
              
              <div className='check_method'>
                <div className='check_merge'> 
                  
                    <form action="" className='check_action'>

                      <div className='check_radio'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Online Payment</label>
                      </div>

                      <div className='check_radio'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Cash on Delivery</label>
                      </div>

                      <div className='check_radio'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">POS on Delivery</label>
                      </div>

                    </form>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='check_main'>
          <div>
            <h3>Order Summary</h3>

            <div className='check_summary'>
              {/* <div> */}
                <div>
                  <img src="src/assets/images/bag.png" alt="Bag" />
                </div>

                <div className='check_bag'>
                  <p><b>Gucci Bag</b></p>
                  <p><b>$100</b></p>
                </div>
              {/* </div> */}

              <div className="check_countHandler">
                <button onClick={() => addToCart(id)} className="check_positive"><b>+</b></button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}  className="check_item"/>
                <button onClick={() => removeFromCart(id)} className="check_negative"><b>-</b></button>
              </div>

            </div>
          </div>

          <div className='check_button'>
            <button>Confirm Order</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>




    <div className='mcheck_total'>
      <TpsNav/>
      <div className='mcheck_general'>
        <div className='mcheck_main'>
          <div>
            <h3>Order Summary</h3>

            <div className='mcheck_summary'>
              {/* <div className='mcheck_image'> */}
                {/* <div> */}
                  <img src="src/assets/images/bag.png" alt="Bag" />
                {/* </div> */}

                <div className='mcheck_bag'>
                  <p><b>Gucci Bag</b></p>
                  <p><b>$100</b></p>
                </div>
              {/* </div> */}

              <div className="mcheck_countHandler">
                <button onClick={() => addToCart(id)} className="mcheck_positive"><b>+</b></button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}  className="mcheck_item"/>
                <button onClick={() => removeFromCart(id)} className="mcheck_negative"><b>-</b></button>
              </div>

            </div>
          </div>

          <div className='mcheck_button'>
            <button>Confirm Order</button>
          </div>

        </div>
        <div className='mcheck_major'>
          <div className='mcheck_header'>
            <h3>Delivery Information</h3>

            <div className='mcheck_form'>
              <div className='mcheck_name'>
                <form action="">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                  <label htmlFor="">Email</label>
                  <input type="text" />
                  <label htmlFor="">State</label>
                  <input type="text" />
                </form>
              </div>

              <div className='mcheck_number'>
                <form action="">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" />
                  <label htmlFor="">City</label>
                  <input type="text" />
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div>
              <h3>Schedule Delivery</h3>

              <div className='mcheck_delivery'>
                <form action="">
                  <label htmlFor="">Date</label>
                  <input type="date" name="" id="" />
                  <label htmlFor="">Note</label>
                  <input type="text" placeholder='Type your note' />
                </form>
              </div>
            </div>

            <div className='mcheck_payment'>
              <h3>Payment Method</h3>
              
              <div className='mcheck_method'>
                <div className='mcheck_merge'> 
                  <div className='mcheck_action'>
                    <form action="">
                      <input type="radio" name="" id="" />
                      <label htmlFor="">Online Payment</label>
                    </form>
                  </div>
          
                  <div className='mcheck_action'>
                    <form action="">
                      <input type="radio" name="" id="" /> 
                      <label htmlFor="">Cash on Delivery</label>
                    </form>
                  </div>

                  <div className='mcheck_action'>
                    <form action="">
                      <input type="radio" name="" id="" />
                      <label htmlFor="">POS on Delivery</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
    </>

  )
}

export default Checkout
