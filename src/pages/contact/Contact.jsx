import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import HomeNav from "../../components/navigation/home-nav/HomeNav"
import Footer from "../../components/footer/Footer"

const Contact = () => {
  return (
    <>
    <div className='tact_check'>

      <HomeNav />
      <div className='tact_general'>
        <div className='tact_link'>
        <Link to="/">Home / </Link>
        <Link to="/help">Help / </Link>
        <Link to="/contact">Contact Us</Link>
        </div>

        <div className='tact_header'>
          <h3>Get In Touch With Us</h3>
        </div>

        <div className='tact_main'>
          <div className='tact_major'>
            <form action="">
              <label htmlFor="">Phone Number</label>
              <p>##########</p>
              <input type="number" />

              <label htmlFor="">Email Address</label>
              <p>Johndoe@example.com</p>
              <input type="text" />

              <label htmlFor="">Location</label>
              <p>Lorem Ipsum</p>
            </form>
          </div>

          <div className='tact_minor'>
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc <br /> in molestie feugiat. </p>
            <div className='tact_total'>
              <div className='tact_name'>
                <form action="">
                  <input type="text" placeholder='Your Name' />
                  <input type="number" placeholder='Phone Number' />
                </form>
              </div>
              <div className='tact_email'>
                <form action="">
                  <input type="text" placeholder='Your E-mail' />
                  <input type="text" placeholder='Subject' />
                </form>
              </div>
            </div>

            <div className='tact_message'>
              <form action="">
                <input type="text" placeholder='Message' />
              </form>
            </div>
            
            <div className='tact_send'>
              <button>Send Message</button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>





    <div className='mtact_check'>

      <HomeNav />
      <div className='mtact_general'>
        <div className='mtact_link'>
        <Link to="/">Home / </Link>
        <Link to="/help">Help / </Link>
        <Link to="/contact">Contact Us</Link>
        </div>

        <div className='mtact_header'>
          <h3>Get In Touch With Us</h3>
        </div>

        <div className='mtact_main'>
          <div className='mtact_major'>
            <form action="">
              <label htmlFor="">Phone Number</label>
              <p>##########</p>
              <input type="number" />

              <label htmlFor="">Email Address</label>
              <p>Johndoe@example.com</p>
              <input type="text" />

              <label htmlFor="">Location</label>
              <p>Lorem Ipsum</p>
            </form>
          </div>

          <div className='mtact_minor'>
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc <br /> in molestie feugiat. </p>
            <div className='mtact_total'>
              <div className='mtact_name'>
                <form action="">
                  <input type="text" placeholder='Your Name' />
                  <input type="number" placeholder='Phone Number' />
                </form>
              </div>
              <div className='mtact_email'>
                <form action="">
                  <input type="text" placeholder='Your E-mail' />
                  <input type="text" placeholder='Subject' />
                </form>
              </div>
            </div>

            <div className='mtact_message'>
              <form action="">
                <input type="text" placeholder='Message' />
              </form>
            </div>
            
            <div className='mtact_send'>
              <button>Send Message</button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>

    </>
  )
}

export default Contact;
