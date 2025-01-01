import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from 'react-stars';
import ProductCard from "../components/ProductCard"
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-3">
                    <span>$</span>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <span>$</span>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                     <Color />
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-11">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-30">
                      <img src="./images/headphone.jpg" className="img-fluid" alt="headphone" />
                    </div>
                    <div className="w-50">
                      <h5>Kid headphone bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700"/>
                      <p>$100.00</p>
                    </div>
                  </div>

                  <div className="random-products mb-3 d-flex">
                    <div className="w-30">
                      <img src="./images/headphone.jpg" className="img-fluid" alt="headphone" />
                    </div>
                    <div className="w-50">
                      <h5>Kid headphone bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700"/>
                      <p>$100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 f-sort">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value={"manual"}>Featured</option>
                      <option value={"best-selling"} selected="selected">Best Selling</option>
                      <option value={"title-ascending"}>Alphabetically, A-Z</option>
                      <option value={"title-descending"}>Alphabetically, Z-A</option>
                      <option value={"price-ascending"}>Price, low to high</option>
                      <option value={"price-descending"}>Price, high to low</option>
                      <option value={"created-ascending"}>Date, old to new</option>
                      <option value={"created-ascending"}>Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-11">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-15 align-items-center grid">
                    <img onClick={() => {setGrid(3)}} src="./images/gr4.svg" className="d-block" img-fluid alt="grid" />
                    <img onClick={() => {setGrid(4)}} src="./images/gr3.svg" className="d-block" img-fluid alt="grid" />
                    <img onClick={() => {setGrid(6)}} src="./images/gr2.svg" className="d-block" img-fluid alt="grid" />
                      <img onClick={() => {setGrid(12)}} src="./images/gr.svg" className="d-block" img-fluid alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-2">
                <div className="d-flex gap-11 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
