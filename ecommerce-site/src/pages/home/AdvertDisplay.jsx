import "./home.css";
import { Link } from "react-router-dom";
import img3 from "../../assets/images/speaker.png";

const AdvertDisplay = () => {
  return (
    <div className="AdvertDisplay">
      <div className="advertImg">
        <div className="advertContent">
          <h1 id="productAdvert1">Play Station 5</h1> <br />
        </div>
        <p id="productAdvertDescription">
          Black and White version of the PS5 coming out on sale.
        </p>
        <div className="shopNowAdvert1">
          <Link id="shopNowAdvert">Shop Now</Link>
        </div>
      </div>

      <div className="advertContent2">
        <div className="productAdvert2">
          <div className="descriptionAdvert2">
            <h1 id="speakerAdvert">Speakers</h1>
            <p id="speakerDescription">Amazon wireless</p>
            <div className="wrapSpeakerShopNow">
              <Link id="speakerShopNow">Shop Now</Link>
            </div>
          </div>
          <div className="imgAdvert2">
            <img src={img3} />
          </div>
        </div>

        <div className="wrapBtnDescription">
          <div className="btnDescription">
            <h1>Lorem ipsum is a dummy text</h1>
            <Link id="btnAdvert">Button</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertDisplay;
