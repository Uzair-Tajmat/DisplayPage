import React from "react";
import {
  FaRegStar,
  FaBuildingColumns,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
const CardPackage = ({ card }) => {
  return (
    <div className="card swiper-slide">
      {/* Venue */}
      <div className="image-content card-image">
        <img src={card.image} alt="" className="card-img" />
      </div>
      <div className="card-content">
        <div className="top">
          <div className="firstSectionofCard">
            <h2 className="name">{card.venue}</h2>
            <div className="secondLineofCard">
              <p className="description">
                <CiLocationOn />
                {card.location}
              </p>
            </div>
            <h2 className="name1">Price : {card.price} /-</h2>
          </div>

          <div className="rating">
            <p className="ratingStar">{card.rating}</p>
            <p className="description1">
              <FaBuildingColumns />
              {card.type}
            </p>
          </div>
        </div>
        <div className="bottom">
          <button className="buy">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardPackage;
