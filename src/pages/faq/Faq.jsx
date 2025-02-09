
import React from 'react'
import { DiVim } from 'react-icons/di'
import "./faq.css"
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import HomeNav from '../../components/navigation/home-nav/HomeNav'


const Faq = () => {
  return (
    <>
    <div className="faq_check">
    <HomeNav />
    <div className="faq_general">
      <div className="faq_link">
        <Link to="/">Home / </Link>
        <Link to="/help">Help / </Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="faq_header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="faq_paragraph">
        <p>Get all the answers to the most frequently asked questions (FAQs) regarding some of our popular categories which include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, building and a whole lot more from premium brands as well as managing your account, payment and much, much more.</p>
      </div>

      <div className="faq_major">
        <div className="faq_main">
          <ul className="faq_list">
            <li>Can I buy in bulk?</li>
            <li>Will all of the items in my order arrive in a single package?</li>
            <li>Why do I see different prices for the same product?</li>
            <li>What is buyer protection?</li>
            <li>What is the estimated delivery time?</li>
            <li>Why does the estimated delivery time vary?</li>
            <li>Who will deliver my order?</li>
            <li>My order is shipped. How can I track it?</li>
          </ul>
        </div>

        <div className="faq_minor">
          <h2>Can I buy in bulk?</h2>
            <p>For all your Corporate Procurement, and Consumer Promotion Activities, please contact us on XXXX XXX XXXX/XXXX XXX XXXX or email us at <u> company@gmail.com</u></p>

          <h2>Will all of the items in my order arrive in a single package?</h2>
            <p>If your order consists of items from more than one seller, your items will arrive separately. If your order consists of items from a single seller, your items may arrive together or separately. If your orders arrive separately, be rest assured that the remaining item(s) will be delivered shortly.</p>


          <h2>Why do I see different prices for the same product?</h2>
            <p>Company is your trusted online marketplace that supports Nigerian entrepreneurs and we have many different sellers competing for business. Therefore, you may see the same product offered by different sellers at different prices. We believe that by supporting these 'third-party' sellers, we can offer you a wider product selection, more choice, increased convenience, and better pricing.</p>


          <h2>What is buyer protection?</h2>
            <p>We offer all our customers ultimate peace of mind. We have you covered 100% on every eligible purchase. Visit our <u>Terms and Guidelines</u> to learn more.</p>


          <h2>What is the estimated delivery time?</h2>
            <p>Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text</p>


          <h2>Why does the estimated delivery time vary?</h2>
            <p>Comapny is a true online marketplace that empowers Nigerians across the country. This means that not all products on Comapny are sold or delivered by Company. In addition, Company buyers and sellers are found in every state in Nigeria. Given the various factors involved (the time it takes a seller to ship, the courier company used, the distance between buyer and seller, and more) delivery times may vary.</p>


          <h2>Who will deliver my order?</h2>
            <p>Your order may be delivered by Comapny Courier service, or by other courier companies, or by the seller or the seller's agents, depending on whether the item was sold by Company or a third-party seller and on the delivery method chosen by a third-party seller. You may be called prior to or on the same day as delivery to see if you are available to receive your order.</p>


          <h2>My order is shipped. How can I track it?</h2>
            <p>To track your order visit:u  <u>company.com</u></p>
        </div>
      </div>
      </div>
    <Footer />
    </div>


    <div className="faqm_check">
    <HomeNav />
    <div className="faqm_general">

      <div className="faqm_link">
        <Link to="/">Home / </Link>
        <Link to="/help">Help / </Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="faqm_header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="faqm_paragraph">
        <p>Get all the answers to the most frequently asked questions (FAQs) regarding some of our popular categories which include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, building and a whole lot more from premium brands as well as managing your account, payment and much, much more.</p>
      </div>

      <div className="faqm_major">
        <div className="faqm_main">
          <ul className="faqm_list">
            <li>Can I buy in bulk?</li>
            <li>Will all of the items in my order arrive in a single package?</li>
            <li>Why do I see different prices for the same product?</li>
            <li>What is buyer protection?</li>
            <li>What is the estimated delivery time?</li>
            <li>Why does the estimated delivery time vary?</li>
            <li>Who will deliver my order?</li>
            <li>My order is shipped. How can I track it?</li>
          </ul>
        </div>

        <div className="faqm_minor">
          <h2>Can I buy in bulk?</h2>
            <p>For all your Corporate Procurement, and Consumer Promotion Activities, please contact us on XXXX XXX XXXX/XXXX XXX XXXX or email us at  <u>company@gmail.com</u></p>

          <h2>Will all of the items in my order arrive in a single package?</h2>
            <p>If your order consists of items from more than one seller, your items will arrive separately. If your order consists of items from a single seller, your items may arrive together or separately. If your orders arrive separately, be rest assured that the remaining item(s) will be delivered shortly.</p>


          <h2>Why do I see different prices for the same product?</h2>
            <p>Company is your trusted online marketplace that supports Nigerian entrepreneurs and we have many different sellers competing for business. Therefore, you may see the same product offered by different sellers at different prices. We believe that by supporting these 'third-party' sellers, we can offer you a wider product selection, more choice, increased convenience, and better pricing.</p>


          <h2>What is buyer protection?</h2>
            <p>We offer all our customers ultimate peace of mind. We have you covered 100% on every eligible purchase. Visit our <u>Terms and Guidelines</u> to learn more.</p>


          <h2>What is the estimated delivery time?</h2>
            <p>Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text</p>


          <h2>Why does the estimated delivery time vary?</h2>
            <p>Comapny is a true online marketplace that empowers Nigerians across the country. This means that not all products on Comapny are sold or delivered by Company. In addition, Company buyers and sellers are found in every state in Nigeria. Given the various factors involved (the time it takes a seller to ship, the courier company used, the distance between buyer and seller, and more) delivery times may vary.</p>


          <h2>Who will deliver my order?</h2>
            <p>Your order may be delivered by Comapny Courier service, or by other courier companies, or by the seller or the seller's agents, depending on whether the item was sold by Company or a third-party seller and on the delivery method chosen by a third-party seller. You may be called prior to or on the same day as delivery to see if you are available to receive your order.</p>


          <h2>My order is shipped. How can I track it?</h2>
            <p>To track your order visit: <u> company.com</u></p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Faq
