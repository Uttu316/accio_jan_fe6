import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Contact.module.css";
import PageWrapper from "../../components/pageWrapper";

const Contact = () => {
  return (
    <PageWrapper title="E-Shop" className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>

      <section className={styles.section}>
        <div className={styles.infoBox}>
          <h2>Contact Information</h2>
          <p style={{ marginBottom: "30px" }}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className={styles.contactMethod}>
            <FaPhone className={styles.icon} />
            <span>+1 234 567 890</span>
          </div>
          <div className={styles.contactMethod}>
            <FaEnvelope className={styles.icon} />
            <span>support@ecommerce.com</span>
          </div>
          <div className={styles.contactMethod}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>123 Business Avenue, New York, NY 10001</span>
          </div>

          <div className={styles.socialLinks}>
            <FaFacebook className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <input type="text" placeholder="Subject" className={styles.input} />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </section>
    </PageWrapper>
  );
};

export default Contact;
