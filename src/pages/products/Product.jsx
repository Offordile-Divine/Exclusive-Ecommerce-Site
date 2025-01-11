import React, { useState, useContext } from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import Footer from "../../components/footer/Footer";
import "./product.css";
import { PRODUCT } from "../../products";
import Shop from "./Shop";
import slide1 from "../../assets/images/select1.png";
import slide2 from "../../assets/images/select2.png";
import slide3 from "../../assets/images/select3.png";
import slide4 from "../../assets/images/select4.png";
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { BsSlashLg } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { ShopContext } from "../../context/Shop-context";

const Products = ({ id }) => {
  const { updateCartItemCount, cartItems } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(slide1);
  const images = [slide1, slide2, slide3];

  const handleSelectedImage = (imagesrc) => {
    setSelectedImage(imagesrc);
  };

  console.log(id);

  const quantity = cartItems[id]?.quantity || 0;
  console.log(quantity);

  const handleIncrease = () => {
    updateCartItemCount(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateCartItemCount(id, quantity - 1);
    }
  };
  return (
    <>
      <HomeNav />

      <div>
        <div className="pd_wrap">
          <div className="pdSelectedImg">
            <div className="pi_nav">
              <Link to="/">Home</Link>
              <BsSlashLg id="pi_icon" />
              <Link className="proof" to="/profile">
                Profile
              </Link>
              <BsSlashLg id="pi_icon" />
              <Link className="pi_focus">Account Information</Link>
            </div>
            <div className="pdSelectWrap">
              <div className="clickedImg">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`thumbnail ${index + 1}`}
                    onClick={() => handleSelectedImage(src)}
                  />
                ))}
              </div>

              <div className="selectedImg">
                <img src={selectedImage} alt="selected" />
              </div>
            </div>
          </div>
          <div className="pd_prop">
            <h2 id="pd_name">Polystar Smart TV</h2>
            <div className="pd_review">
              <div>
                <IoIosStarOutline id="pd_itemStar" />
                <IoIosStarOutline id="pd_itemStar" />
                <IoIosStarOutline id="pd_itemStar" />
                <IoIosStarOutline id="pd_itemStar" />
                <IoIosStarOutline id="pd_itemStar" />
              </div>
              <div>
                <p>(150 reviews)</p>
              </div>
              <p>|</p>
              <p id="pd_available">In stock</p>
            </div>
            <div className="pd_price">
              <p>$190.00</p>
            </div>
            <div className="pd_description">
              <p id="pd_detail">
                Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum
                ipsum is a dummy text. Lorum ipsum is a dummy text.
              </p>
            </div>
            <hr id="pd_line" />
            <div className="pd_opt">
              <label id="pdColourName">Colours:</label>
              <select className="pd_colourSelection">
                <option id="optRed">Red</option>
                <option id="optBlue">Blue</option>
                <option id="optBlack">Black</option>
                <option id="optYellow">Yellow</option>
              </select>
            </div>

            <div className="pd_sizes">
              <label id="pdColourName">Size:</label>
              <div className="pd_sizesbtn">
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>X</button>
              </div>
            </div>

            <div className="pd_incredecreFav">
              <div className="pdBtnIncrDecr">
                <button
                  id="btnIncreDecrement"
                  onClick={() => handleDecrease(id)}
                >
                  -
                </button>
                <input
                  id="pd_number"
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button
                  id="btnIncreDecrement"
                  onClick={() => handleIncrease(id)}
                >
                  +
                </button>
              </div>
              <div>
                <button id="pd_btnExplore">Explore</button>
              </div>
              <div className="pd_favourite">
                <button id="pd_favouriteBtn">
                  <GrFavorite />
                </button>
              </div>
            </div>

            <div className="wrap_pdServicesAuth">
              <div className="pd_serviceAuth">
                <div className="wrap_deliveryCar">
                  <TbTruckDelivery id="pd_deliveryCar" />
                </div>
                <div className="pd_PostalCode">
                  <p id="freeDeli">Free Delivery</p>
                  <Link id="postalNav">
                    Enter your postal code for Delivery Availability
                  </Link>
                </div>
              </div>

              <hr />

              <div className="pd_serviceAuth">
                <div className="wrap_deliveryCar">
                  <TfiReload id="pd_deliveryCar" />
                </div>
                <div className="pd_PostalCode">
                  <p id="freeDeli">Return Policy</p>
                  <p id="postalNav">Free 30 Days Delivery Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pd_content">
        <div className="pd_header">
          <h1>Shop</h1>
        </div>

        <div className="pd_product">
          {PRODUCT.map((product, index) => (
            <Shop data={product} key={index} />
          ))}
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Products;
