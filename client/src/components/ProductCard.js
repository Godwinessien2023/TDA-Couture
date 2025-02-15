import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import addcart from "../images/addcart.svg";
import { Link, useLocation } from "react-router-dom";
import { getProductApi } from "../api";

const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProductApi();
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  // Function to format price in Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${
            location.pathname === "/store" ? `gr-${grid}` : "col-3"
          }`}
        >
          <Link
            to={`/product/${product._id}`}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
              <Link>
                <img className="custom-action" src={wish} alt="wish" />
              </Link>
            </div>
            <div className="product-image">
              <img src={product.image} className="img-fluid" alt="product" />
              <img src={product.image} className="img-fluid" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">{product.name}</h6>
              <h5 className="product-title">{product.description}</h5>
              <ReactStars
                count={5}
                value={product.ratings}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                {product.description}
              </p>
              <p className="price">{formatPrice(product.price)}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <img
                    className="custom-action"
                    src={prodcompare}
                    alt="product_compare"
                  />
                </Link>
                <Link>
                  <img className="custom-action" src={view} alt="view" />
                </Link>
                <Link>
                  <img className="custom-action" src={addcart} alt="add_cart" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
