import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="cardlink" to={`/product/${item.id}`}>
        <div className="image">
          <img src={item.thumbnail} className="mainImage" alt="product" />
          <img src={item?.images[0]} className="secondImage" alt="product" />
        </div>
      </Link>
      <div className="description">
        <h4>{item?.title}</h4>
        <div className="prices">
          <span>
            ${((item?.discountPercentage / 100) * item?.price).toFixed(2)}
          </span>
          <span>${item?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
