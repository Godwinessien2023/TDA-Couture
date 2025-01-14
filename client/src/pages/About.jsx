import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <section className="about-us">
                <h2>About Us</h2>
                <div className="row about-section">
                  <div className="col-md-6 about-image">
                    <img
                      src="https://www.dropbox.com/scl/fi/ruo1ffrwb6t4p0dqkc0mh/20250105_192936.png?rlkey=jbzjnp1989a555rouepq69951&st=mc3kis46&raw=1"
                      alt="Agbada by TDA Couture"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6 about-text">
                    <p>
                      TDA Couture is a bespoke, ready-to-wear fashion brand that
                      provides well-tailored pieces for today’s man. The business
                      prioritizes speed by providing outfits within 24 hours or less
                      after taking measurements.
                    </p>
                    <p>
                      Every piece and style of outfit is unique, blending both African
                      tradition and modern trends. The headquarters is located in
                      Lagos, Nigeria, with branches across Nigeria and other African
                      countries.
                    </p>
                  </div>
                </div>
              </section>
              <section className="why-join-us">
                  <h2>Why Join Us</h2>
                  <div className="reasons">
                    <div className="reason=list">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <h3>Speed</h3>
                    <p>Join a platform designed to propel your journey and achieve success faster than ever.</p>
                    </div>
                    <div className="reason=list">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <h3>Speed</h3>
                    <p>Join a platform designed to propel your journey and achieve success faster than ever.</p>
                    </div>
                    <div className="reason=list">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <h3>Speed</h3>
                    <p>Join a platform designed to propel your journey and achieve success faster than ever.</p>
                    </div>
                  </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
