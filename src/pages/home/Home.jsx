import React from "react";
import HomeNav from "../../components/navigation/home-nav/HomeNav";
import LoginNav from "../../components/navigation/login-nav/LoginNav";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import Slider from "./Slider";
import SectionImgDescription from "./SectionImgDescription";
import Footer from "../../components/footer/Footer";
import TpsNav from "../../components/navigation/terms-privacy-support-nav/TpsNav";

const Home = () => {
  return (
    <div>
      <HomeNav />
      {/* <TpsNav /> */}
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
