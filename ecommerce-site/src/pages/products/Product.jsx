import React from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import Footer from "../../components/footer/Footer";
import { PRODUCT } from "../../products";
import { Shop } from "./Shop";
import "./product.css"


const Products = () => {
  return (
    <>
      <HomeNav />
      <div className="pd_content">
        <div className="pd_header">
          <h1>Shop</h1>
        </div>

        <div className="pd_product"> {PRODUCT.map((product, index) =>(
          <Shop data={product} key={index} />
        ))} </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
