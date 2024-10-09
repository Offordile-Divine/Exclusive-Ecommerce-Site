import React from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import Slider from "./Slider";
import SectionImgDescription from "./SectionImgDescription";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <Slider />
    </div>
  );
};

export default Home;
