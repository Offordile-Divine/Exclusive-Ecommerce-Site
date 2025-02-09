
import React from 'react'
import HomeNav from '../../components/navigation/home-nav/HomeNav'
import { Link } from 'react-router-dom'
import "./track_order.css"
import Footer from '../../components/footer/Footer'

const Track_order = () => {
  return (
    <>
    <div className="track_check">
      <HomeNav />

      <div className="track_general">
        <div className="track_link">
          <Link to="/">Home / </Link>
          <Link to="/help">Help / </Link>
          <Link to="/track">Track My Order </Link>
        </div>
    
        <center>
        <div>
          <div className="track_header">
            <h1>Track My Order</h1>
          </div>

          <div className="track_form">
            <form action="">
              <input type="number" placeholder="Enter tracking number" />
            </form>
          </div>

          <div className="track_button">
            <button onClick={SubmitEvent}>Track</button>
          </div>
        </div>
        </center>

      </div>

      <Footer />
    </div>



    <div className="mtrack_check">
      <HomeNav />

      <div className="mtrack_general">
        <div className="mtrack_link">
          <Link to="/">Home / </Link>
          <Link to="/help">Help /  </Link>
          <Link to="/track">Track My Order </Link>
        </div>
    
        <center>
        <div>
          <div className="mtrack_header">
            <h1>Track My Order</h1>
          </div>

          <div className="mtrack_form">
            <form action="">
              <input type="number" placeholder="Enter tracking number" />
            </form>
          </div>

          <div className="mtrack_button">
            <button onClick={SubmitEvent}>Track</button>
          </div>
        </div>
        </center>

      </div>
      <Footer />
      
    </div>
    </>
  )
}

export default Track_order
