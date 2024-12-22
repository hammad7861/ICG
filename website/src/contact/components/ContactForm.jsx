import React, { useState } from "react";
import styles from "./ContactPage.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyPolicy) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.rightColumn}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Contact & Resources</h2>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h3 className={styles.getInTouch}>Get in touch</h3>
            <p className={styles.formDescription}>
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName" className={styles.inputLabel}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={styles.formInput}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="lastName" className={styles.inputLabel}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={styles.formInput}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone number
              </label>
              <div className={styles.phoneInput}>
                <select
                  className={styles.countrySelect}
                  aria-label="Select country code"
                >
                  <option value="US">US</option>
                  <option value="UAE">UAE</option>
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.phoneNumber}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.messageInput}
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                id="privacyPolicy"
                name="privacyPolicy"
                type="checkbox"
                className={styles.checkbox}
                checked={formData.privacyPolicy}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
              <label htmlFor="privacyPolicy" className={styles.checkboxLabel}>
                You agree to our friendly privacy policy.
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
