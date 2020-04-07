import React from "react";
import './index.css';

const ProductPricingSummary = ({ finalPrice, price, discount }) => (
  <div className={"pricingSummary"}>
    <span className={"finalPriceLabel"}>&#8377;{parseInt(finalPrice)}</span>
    <span className={"priceLabel"}>{parseInt(price)}</span>
    <span className={"discountLabel"}>{discount}% off</span>
  </div>
);

export default ProductPricingSummary;
