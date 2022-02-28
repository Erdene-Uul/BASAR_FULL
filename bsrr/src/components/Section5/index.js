import React from "react";
import ZarImg from "../../assets/images/zar1.png";
import ZarImgSmall from "../../assets/images/zar_small.png";

const Section5 = () => {
  return (
    <div>
      <img className="bg-cover hidden lg:flex lg:visible" src={ZarImg} alt="ZarImg" />
      <img className="bg-cover  lg:hidden" src={ZarImgSmall} alt="zarImg" />
    </div>
  );
};

export default Section5;
