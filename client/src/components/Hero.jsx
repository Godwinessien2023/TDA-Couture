import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src="https://www.dropbox.com/scl/fi/ye7857gyawticzuref1so/IMG-20250126-WA0006-1.jpg?rlkey=9601cnft9tmi1nw4eotns5z08&raw=1"
          alt="Hero Background"
          className="hero-img"
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TDA Couture
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Redefining elegance and style with bespoke designs crafted for the
          modern individual.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="hero-btn primary">Shop Now</button>
          <button className="hero-btn secondary">Explore Collection</button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="decorative-circle top-left"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <motion.div
        className="decorative-circle bottom-right"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
