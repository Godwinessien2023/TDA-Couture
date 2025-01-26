import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import HeroSection from "../components/Hero";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              {/*<div className="main-banner position-relative">
                <img
                  src="./images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHARGED FOR PROS</h4>
                  <h5>iPad $13+ Pro</h5>
                  <p>From $999,00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative py-1">
                  <img
                    src="./images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY iPAD HERE</h5>
                    <p>
                      From $999,00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SAKE</h4>
                    <h5>iPad $13+ Pro</h5>
                    <p>
                      From $999,00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="./images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SAKE</h4>
                    <h5>iPad $13+ Pro</h5>
                    <p>
                      From $999,00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    src="./images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SAKE</h4>
                    <h5>iPad $13+ Pro</h5>
                    <p>
                      From $999,00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
  </div>**/}
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 custom-wrapper">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 custom-wrapper">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 custom-wrapper">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0"> shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 custom-wrapper">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 custom-wrapper">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Shoe</h6>
                    <p>Available</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737845029/1691581088062_uo9kgp.jpg"
                    alt="shoe"
                    height={110}
                    width={110}
                  />
                </div>

                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Black Cross leather slide</h6>
                    <p>Available</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737844959/1691581088308_avjfxb.jpg"
                    alt="Camera"
                    height={110}
                    width={110}
                  />
                </div>

                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Bussiness Bag</h6>
                    <p>Available</p>
                  </div>
                  <img
                    src="	https://res.cloudinary.com/duaygvjlr/image/upload/v1737845025/1691581087278_rvjwil.jpg"
                    alt="Camera"
                    height={110}
                    width={110}
                  />
                </div>

                <div className="d-flex gap-10 align-items-center">
                  <div>
                    <h6>Asad Arabian perfume</h6>
                    <p>Available</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737845015/1691581087226_srvt0q.jpg"
                    alt="Asad Arabian perfume"
                    height={110}
                    width={110}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feature Collections</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      {/**<section className="famous-wrapper-2 py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-01.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h6>Big Screen</h6>
                  <h4>Smart Watch Series 7</h4>
                  <p>From $999 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-02.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h6 className="text-dark">Studio Display</h6>
                  <h4 className="text-dark">600 nits of brightness</h4>
                  <p className="text-dark">27-inch 5k retina display</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-03.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h6 className="text-dark">SMARTPHONES</h6>
                  <h4 className="text-dark">Smartphone 13 Pro.</h4>
                  <p className="text-dark">
                    Now in Green From $999.00 or $4162/mo fot 24 mo. footnote
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-04.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h6 className="text-dark">Homespeakers</h6>
                  <h4 className="text-dark">Room-filling sound</h4>
                  <p className="text-dark">From $699 or $116.58/mo for 12 mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>**/}

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737845029/1691581088062_uo9kgp.jpg"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737844959/1691581088308_avjfxb.jpg"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737845025/1691581087278_rvjwil.jpg"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737844073/1691581088573_da7muh.jpg"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737845015/1691581087226_srvt0q.jpg"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737843192/71_mh6xaa.png"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737843192/71_mh6xaa.png"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://res.cloudinary.com/duaygvjlr/image/upload/v1737843192/71_mh6xaa.png"
                      alt="Brand"
                      height={110}
                      width={110}
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
