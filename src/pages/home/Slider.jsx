import React, { useEffect, useState,CSSProperties } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionA from "./SectionA";
import { Link } from "react-router-dom";
import { Goods } from "../../db";
import SectionB from "./SectionB";
import SectionImgDescription from "./SectionImgDescription";
import SectionDeal from "./SectionDeal";
import { BsArrowRight } from "react-icons/bs";
import AdvertDisplay from "./AdvertDisplay";
import axios from "axios";
import Products from "../products/Product";

const Slider = () => {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [newProduct, setNewProducts] = useState({
 name: "Sample Product",
 description: "This is a sample product.",
 price: 100,
 category: "Electronics",
 images: [],
 unit: 50,
 });

 const responsive = {
 superLargeDesktop: {
 // the naming can be any, depends on you.
 breakpoint: { max: 4000, min: 3000 },
 items: 2,
 },
 desktop: {
 breakpoint: { max: 3000, min: 1024 },
 items: 2,
 },
 tablet: {
 breakpoint: { max: 1024, min: 464 },
 items: 1,
 },
 mobile: {
 breakpoint: { max: 464, min: 0 },
 items: 1,
 },
 };

 const productInfo = async (filters = {}) => {
 const token = localStorage.getItem("accessToken");

 try {
 const params = {};
 if (filters.category) params.category = filters.category;
 if (filters.minPrice) params.minPrice = filters.minPrice;
 if (filters.maxPrice) params.maxPrice = filters.maxPrice;
 if (filters.sort) params.sort = filters.sort;

 const res = await axios.get(
 "https://one00daysofcoding.onrender.com/v1/products",
 {
 headers: {
 Authorization: `Bearer ${token}`,
 "Content-Type": "application/json",
 },
 params,
 }
 );

 setProducts(res.data);
 console.log(res.data);
 setLoading(false);
 } catch (err) {
 setError(err.response ? err.response.data : "An error occurred");
 setLoading(false);
 }
 };

 useEffect(() => {
 productInfo();
 }, []);

 const createNewProduct = async () => {
 const token = localStorage.getItem("accessToken");

 try {
 const res = await axios.post(
 "https://one00daysofcoding.onrender.com/v1/products",
 newProduct,
 {
 headers: {
 Authorization: `Bearer ${token}`,
 "Content-Type": "application/json",
 },
 }
 );

 console.log(newProduct);

 setProducts([...products, res.data]);
 setNewProducts({
 name: "Shoe",
 description: "This is a shoe",
 price: "300",
 category: "Shoes",
 images: [
 "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=600",
 ],
 ratings: "4",
 stock: 20,
 });
 } catch (err) {
 setError(err.response ? err.response.data : "An error occurred");
 }
 };

  useEffect(() => {
    createNewProduct();
  }, []);

  return (
    <div>
      <Carousel swipeable={true} draggable={true} responsive={responsive}>
        <SectionA />
        <SectionA />
        <SectionA />
      </Carousel>
      <div className="dealsWrap">
        <div className="explore">
          <Link id="exploreLink">Our Categories</Link>
        </div>
      </div>

 <div className="wrapSectonDescription3">
 {products.map((product, ix) => (
 <SectionImgDescription
 key={product.id || product._id || ix} // Fallback to index if `id` is missing
 id={product.id || product._id} // Use `id` or `_id`
 img={product.images && product.images[0]} // Handle `images` as array
 name={product.name || "Unnamed Product"} // Fallback for missing name
 />
 ))}
 </div>
 <div className="dealsWrap">
 <div className="deals">
 <div>
 <p id="todayDeal">Today's Deals</p>
 </div>

 <div className="itemDeal">
 <p id="todayOff">##% Off</p>
 <Link id="seeAllItem">See all items</Link>
 </div>
 </div>
 </div>

 <div className="wrapSectionB">
 {products.map((product, ix) => (
 <SectionDeal
 key={product.id}
 id={product.id}
 img={product.images}
 price={product.price}
 name={product.name}
 />
 ))}
 </div>

 <div className="dealsWrap">
 <div className="explore">
 <Link id="exploreLink">Explore</Link>
 </div>
 </div>

 <div className="wrapSectionB">
 {products.map((product, ix) => (
 <SectionB
 key={ix}
 id={product.id}
 img={product.images}
 price={product.price}
 name={product.name}
 />
 ))}
 </div>

 <div className="shopNowWrap1">
 <Link id="shopNow1">Shop now</Link>
 <Link id="arrNow1">
 <BsArrowRight />
 </Link>
 </div>

 <AdvertDisplay />
 </div>
 );
};

export default Slider;

