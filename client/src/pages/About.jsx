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
              {/* About Us Section */}
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

              {/* Our Values Section */}
              <section className="our-values">
                <h2>Our Values</h2>
                <div className="row">
                  <div className="col-md-4">
                    <h3>Quality</h3>
                    <p>We prioritize craftsmanship and premium materials in every outfit.</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Speed</h3>
                    <p>Our swift process ensures you get your outfit in no time – within 24 hours!</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Tradition & Modernity</h3>
                    <p>Our pieces blend rich African culture with contemporary fashion trends.</p>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="why-join-us">
                <h2>Why Choose Us</h2>
                <div className="reasons">
                  <div className="reason">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    <h3>Speed</h3>
                    <p>Get your custom-made outfit in less than 24 hours.</p>
                  </div>
                  <div className="reason">
                    <span className="material-symbols-outlined">style</span>
                    <h3>Style</h3>
                    <p>We offer unique styles that fuse traditional and modern designs.</p>
                  </div>
                  <div className="reason">
                    <span className="material-symbols-outlined">support_agent</span>
                    <h3>Customer Support</h3>
                    <p>We’re here to ensure a smooth experience from start to finish.</p>
                  </div>
                </div>
              </section>

              {/* Customer Testimonials */}
              <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-item">
                  <p>"TDA Couture's outfits made me feel confident and sharp. The delivery was fast, and the fit was perfect!"</p>
                  <span>- John Doe</span>
                </div>
                <div className="testimonial-item">
                  <p>"The craftsmanship and attention to detail were incredible. I’ll be coming back for more!"</p>
                  <span>- Michael Smith</span>
                </div>
              </section>

              {/* Call to Action */}
              <section className="cta">
                <h2>Ready to Experience Quality Fashion?</h2>
                <p>Browse our collection or contact us to get started!</p>
                <button className="btn btn-primary">Shop Now</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

