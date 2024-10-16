import bag from "../../assets/images/bag.png";

const SectionImgDescription = ({ img, name }) => {
  return (
    <div className="wrapSectionImgDescription2">
      <div className="SectionImgDescription1">
        <div className="sectionImgDescription">
          <img src={img} />
        </div>
        <h3 id="itemProduct">{name}</h3>
      </div>
    </div>
  );
};

export default SectionImgDescription;
