import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="./images/newsletter.png" alt="newsletter_png" />
                <h2 className="mb-0 text-white">Subscribe to our Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group custom-input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email address..."
                  aria-label="Enter your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 custom-footer-hover">
              <h4 className="text-white mb-3">Contact Us</h4>

              <div>
                <address className="text-white custom-footer-links">
                  <p>N0 35 Waterworks Road <br/> Abakaliki <b /> Ebonyi State</p>
                </address>
                <a href="tel: +24308148298174" className="mt-4 d-block mb-3 text-white address-link custom-footer-links">Phone Number: 08148288174</a>
                <a href="mailto: nonsoogbonna324@gmil.com" className="mt-3 d-block mb-3 text-white address-link custom-footer-links">Email: nonsoogbonna324@gmail.com</a>

                <div className="social-icons d-flex align-items-center gap-30">
                  <Link to="/"><FaGithub className="text-white fs-5 custom-footer-links"/></Link>
                  <Link to="/"><FaLinkedin className="text-white fs-5 custom-footer-links"/></Link>
                  <Link to="/"><FaFacebook className="text-white fs-5 custom-footer-links"/></Link>
                  <Link to="/"><FaWhatsappSquare className="text-white fs-5 custom-footer-links"/></Link>
                  <Link to="/"><FaInstagramSquare className="text-white fs-5 custom-footer-links"/></Link>
                </div>
              </div>
            </div>
            <div className="col-3 custom-footer-hover">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link to="/privacy-policy" className="text-white custom-footer-links">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white custom-footer-links">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white custom-footer-links">Shipping Policy</Link>
                <Link to="/term-and-conditions" className="text-white custom-footer-links">Terms & Conduction</Link>
                <Link to="/blogs" className="text-white custom-footer-links">Blogs</Link>
              </div>
            </div>
            <div className="col-3 custom-footer-hover">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link to="/about" className="text-white custom-footer-links">About Us</Link>
                <Link to="/faq" className="text-white custom-footer-links">FAQ</Link>
                <Link to="/contact" className="text-white custom-footer-links">Contact Us</Link>
              </div>
            </div>
            <div className="col-2 custom-footer-hover">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link to="/" className="text-white custom-footer-links">Male and Female Wears</Link>
                <Link to="/" className="text-white custom-footer-links">Male and Female Bespoke Tailor</Link>
                <Link to="/" className="text-white custom-footer-links">Kaftans, Suits</Link>
                <Link to="/" className="text-white custom-footer-links">Watch, Cap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">
                &copy; {new Date().getFullYear()}: Powered by ALX Student
                Software Engineers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
