import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiInformationCircle } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Meta title={"contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070396.61176808!2d3.376492385586064!3d9.006762181604184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1735303319280!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                 title="Google Maps showing the location of Nigeria"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action={""} className="d-flex flex-column gap-15">
                    <div>
                      <input text="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input text="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input text="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="3" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <FaHome  className="fs-5" />
                        <address className="mb-0">No 35 Waterworks Road Abakaliki Ebonyi State</address>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <FiPhoneCall className="fs-5" />
                        <a href="tel: +24308148298174">08148288174</a>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <FaMailBulk  className="fs-5" />
                        <a href="mailto:  nonsoogbonna324@gmail.com">nonsoogbonna324@gmail.com</a>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <HiInformationCircle  className="fs-5" />
                        <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
