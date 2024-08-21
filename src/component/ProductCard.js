import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard">
      <div className="img-wrapper">
        <img src={item?.img} />
      </div>
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
