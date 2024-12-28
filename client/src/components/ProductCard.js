import React from "react";
import ReactStars from 'react-stars';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link><img className="custom-action" src="images/wish.svg" alt="wish" /></Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-1.png" className="img-fluid" alt="product" />
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
              <Link><img className="custom-action" src="images/prodcompare.svg" alt="product_compare" /></Link>
              <Link><img className="custom-action" src="images/view.svg" alt="view" /></Link>
              <Link><img className="custom-action" src="images/add-cart.svg" alt="add_car" /></Link>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link><img className="custom-action" src="images/wish.svg" alt="wish" /></Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-1.png" className="img-fluid" alt="product" />
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
              <Link><img className="custom-action" src="images/prodcompare.svg" alt="product_compare" /></Link>
              <Link><img className="custom-action" src="images/view.svg" alt="view" /></Link>
              <Link><img className="custom-action" src="images/add-cart.svg" alt="add_car" /></Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
