import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    volume: "",
    city: "",
    requirements: "",
    controlQuestion: "",
  });

  // const stockItems = [
  //   'CDT ABP – 68515-40-2: Europe - 23kg in stock',
  //   'Omnistab LS 123 – CAS: 129757-67-1: Europe, China, USA',
  //   'Omnistab LS 292 – CAS: 41556-26-7 & 82919-37-7: Europe, China, USA',
  //   'Omnistab LS 622 – CAS: 65447-77-0: Europe',
  //   // Add more items as needed
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % stockItems.length);
  //   }, 3000); // Change item every 3 seconds
  //   return () => clearInterval(interval);
  // }, [stockItems.length]);

  return (
    <div className="contact-form-container">
      <div className="stock-section">
        <div className="stock-item">
          <h3>Currently in Stock</h3>
          <p> 'CDT ABP – 68515-40-2: Europe - 23kg in stock',</p>
          <p> 'CDT ABP – 68515-40-2: Europe - 23kg in stock',</p>
          <p> 'CDT ABP – 68515-40-2: Europe - 23kg in stock',</p>
          <p> 'CDT ABP – 68515-40-2: Europe - 23kg in stock',</p>
        </div>

        <div className="form-section">
          <h2>Request a Quote</h2>
          <p>You will receive your quote within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                name="volume"
                placeholder="Required volume (kg)"
                value={formData.volume}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                name="city"
                placeholder="City of delivery*"
                value={formData.city}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="textarea-group">
            <div className="textarea-wrapper">
              <textarea
                name="requirements"
                placeholder="Add your special requirements."
                value={formData.requirements}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>
          </div>

          <div className="textarea-group">
            <div className="textarea-wrapper">
              <input
                type="text"
                name="controlQuestion"
                placeholder="Control Question 12+1=?"
                value={formData.controlQuestion}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
