import { Link, useParams } from "react-router-dom";
import bag from "../../assets/images/bag.png";

const SectionImgDescription = ({ img, name, id }) => {
  console.log("props", img, name, id);
  return (
    <Link to={`/products/${id}`} className="wrapSectionImgDescription2">
      <div className="SectionImgDescription1">
        <div className="sectionImgDescription">
          <img src={img} />
        </div>
        <h3 id="itemProduct">{name}</h3>
      </div>
    </Link>
  );
};

export default SectionImgDescription;
