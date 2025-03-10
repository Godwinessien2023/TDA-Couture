import React from "react";
import { NavLink, Link } from "react-router-dom";
import HeroSection from "./Hero";

const Header = () => {
  return (
    <>
      {/**<header className="header-top-strip py-1">
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
      </header>**/}
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
            <div className="col-9 custom-gen">
              <div className="header-upper-link d-flex align-item-center justify-content-end gap-4">
                <div className="custom-hover">
                  {/**<Link
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
                  </Link>**/}
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

                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-item-center gap-10 text-white custom-cart"
                  >
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="custom-cart">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center custom-cont"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="./images/menu.svg" alt="menu_svg" />
                      <span className="me-5 d-inline-block">Admin Menu</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className="dropdown-item text-white"
                          to="/addblog"
                        >
                          ADDBLOG
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/addcat">
                          ADD CATEGORIES
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white"
                          to="/addproduct"
                        >
                          ADD PRODUCT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex  align-item-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/Contact">Contact </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
