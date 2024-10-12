import React from "react";
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

const Slider = () => {
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
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
      >
        <SectionA />
        <SectionA />
        <SectionA />
      </Carousel>
      <div className="explore">
        <Link id="exploreLink">Our Categories</Link>
      </div>
      <div className="wrapSectonDescription3">
        {Goods.map((product, ix) => (
          <SectionImgDescription
            key={product.id}
            img={product.img}
            name={product.name}
          />
        ))}
      </div>

      <div className="deals">
        <div>
          <p id="todayDeal">Today's Deals</p>
        </div>

        <div className="itemDeal">
          <p id="todayOff">##% Off</p>
          <Link id="seeAllItem">See all items</Link>
        </div>
      </div>

      <div className="wrapSectionB">
        {Goods.map((name, ix) => (
          <SectionDeal
            key={name.id}
            img={name.img}
            price={name.price}
            name={name.name}
          />
        ))}
      </div>

      <div className="explore">
        <Link id="exploreLink">Explore</Link>
      </div>

      <div className="wrapSectionB">
        {Goods.map((name, ix) => (
          <SectionB
            key={name.id}
            img={name.img}
            price={name.price}
            name={name.name}
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
