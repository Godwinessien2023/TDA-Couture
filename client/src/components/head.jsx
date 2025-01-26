import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p mb-0>Free shipping over $100 and free Returns</p>
            </div>
            <div className="col-6 mb-0">
              <p className="text-end m">
                Hotline:
                <a className="text-white" href="tel: +2348148298174">
                  +2348148298174
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2 custom-head-down">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2 custom-image">
              <h2>
                <Link to="/" className="text-white custom-hover ">
                  <img src="./images/tda-couture-logo.png" alt="TDA-Couture" />
                </Link>
              </h2>
            </div>
            <div className="col-10 custom-gen">
              <div className="header-upper-link d-flex align-item-right justify-content-end">
                <div className="custom-hover">
                  <Link
                    to="/compare-product"
                    className="d-flex align-item-center gap-10 text-white custom-cart"
                  >
                    <img src="./images/compare.svg" alt="compare_svg" />
                    <p mb-0>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-item-center gap-10 text-white custom-cart"
                  >
                    <img src="./images/wishlist.svg" alt="wishlist_svg" />
                    <p mb-0>
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/productsearch"
                    className="d-flex align-item-center gap-10 text-white custom-cart"
                  >
                    <span class="material-symbols-outlined">search</span>
                    <p mb-0>
                      Product <br /> search
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-item-center gap-10 text-white custom-cart"
                  >
                    <span class="material-symbols-outlined">login</span>
                    <p mb-0>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
