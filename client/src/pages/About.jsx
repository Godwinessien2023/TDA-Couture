import React from 'react'
import BreadCrumb from "../components/BreadCrumb";    import Meta from "../components/Meta";
const About = () => {
  return (
	  <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">                         <div className="row">                                   <div className="col-12">
	  <div>
	  <div className="col-12 text-center mb-4">               <h2>About Us</h2>                                   </div>
	  <div className="flex-container d-flex flex-row mb-3">
	  <img src="https://www.dropbox.com/scl/fi/ruo1ffrwb6t4p0dqkc0mh/20250105_192936.png?rlkey=jbzjnp1989a555rouepq69951&st=mc3kis46&raw=1" alt="Agbada by TDA Couture" height="400" width="600" />
	  <div className="flex-item p-2">
	  <div className="flex-item p-2">
	  <p>TDA Couture is a bespoke, ready-to-wear fashion brand that provides well-tailored pieces for today’s man. The business prioritizes speed by providing outfits within 24 hours or less after taking measurements.</p>
	  <p>Every piece and style of outfit is unique, blending both African tradition and modern trends. The headquarters is located in Lagos, Nigeria, with branches across Nigeria and other African countries.</p>
	  </div>
	  </div>
	  </div>
	  <section className="container-xxl py-5">
  <div className="row">
    <div className="col-12 text-center mb-4">
      <h2>About Us</h2>
    </div>
    <div className="col-lg-6 mb-3">
      <img
        src="https://i.ibb.co/D4z5dFQ/20250105-192936.png"
        alt="Agbada by TDA Couture"
        className="img-fluid rounded shadow"
      />
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <p>
        TDA Couture is a bespoke, ready-to-wear fashion brand that provides
        well-tailored pieces for today’s man. The business prioritizes speed
        by providing outfits within 24 hours or less after taking measurements.
      </p>
      <p>
        Every piece and style of outfit is unique, blending both African
        tradition and modern trends. The headquarters is located in Lagos,
        Nigeria, with branches across Nigeria and other African countries.
      </p>
    </div>
  </div>
</section>

	  </div>
	  </div>
	  </div>
	  </div>
	  </div>
	  </>
  )
}

export default About
