import React from "react";
import ReactStars from 'react-stars';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import watch from "../images/watch.jpg";
import watchOne from "../images/watchOne.png";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import addcart from "../images/addcart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link><img className="custom-action" src={wish} alt="wish" /></Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product" />
            <img src={watchOne} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700"/>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Kids headphones bulk 10 pack multi colored for students.
              It is available in various colors such as blue, red, green, yellow, and purple.
              This product is perfect for kids and adults alike.
            </p>
            <p className="price">$ 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link><img className="custom-action" src={prodcompare} alt="product_compare" /></Link>
              <Link><img className="custom-action" src={view} alt="view" /></Link>
              <Link><img className="custom-action" src={addcart} alt="add_cart" /></Link>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link><img className="custom-action" src={wish} alt="wish" /></Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product" />
            <img src={watchOne} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700"/>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Kids headphones bulk 10 pack multi colored for students.
              It is available in various colors such as blue, red, green, yellow, and purple.
              This product is perfect for kids and adults alike.
            </p>
            <p className="price">$ 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link><img className="custom-action" src={prodcompare} alt="product_compare" /></Link>
              <Link><img className="custom-action" src={view} alt="view" /></Link>
              <Link><img className="custom-action" src={addcart} alt="add_cart" /></Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
