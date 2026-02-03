import React from "react";
import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import styles from "./About.module.css";
import PageWrapper from "../../components/pageWrapper";

const About = () => {
  return (
    <PageWrapper title="E-Shop" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Our Brand</h1>
        <p className={styles.subtitle}>
          We are dedicated to providing the highest quality products with a
          focus on reliability, customer service, and uniqueness.
        </p>
      </div>

      <section className={styles.section}>
        <div className={styles.imageBox}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Our Team"
            className={styles.image}
          />
        </div>
        <div className={styles.contentBox}>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our brand has come a long way from its beginnings
            in a home office. When we first started out, our passion for
            "Eco-friendly lifestyle" drove us to start our own business.
          </p>
          <p>
            We now serve customers all over the world and are thrilled that
            we're able to turn our passion into our own website. We hope you
            enjoy our products as much as we enjoy offering them to you.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <FaUsers className={styles.valueIcon} />
            <h3>Customer First</h3>
            <p>Our customers are at the heart of everything we do.</p>
          </div>
          <div className={styles.valueItem}>
            <FaLightbulb className={styles.valueIcon} />
            <h3>Innovation</h3>
            <p>
              We constantly strive to improve and innovate our product range.
            </p>
          </div>
          <div className={styles.valueItem}>
            <FaGlobe className={styles.valueIcon} />
            <h3>Sustainability</h3>
            <p>Committed to reducing our environmental footprint.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
