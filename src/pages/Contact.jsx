import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ maxWidth: 700, margin: "80px auto", padding: "0 20px", fontFamily: "Segoe UI, Arial, sans-serif" }}>
      <h1 style={{ color: "#FFD600", marginBottom: 24 }}>Contact Us</h1>

      <div style={{ marginBottom: 40 }}>
        <h2>Our Location</h2>
        <p>5, Shakti Udyog Nagar, Palghar 401404</p>
        <p>Phone: +91</p>
        <p>Email: <a href="mailto:contact@tastytreatcafe.com" style={{ color: "#FFD600" }}>contact@tastytreatcafe.com</a></p>
        <p>Hours: Mon-Sun, 11:00 AM – 10:00 PM</p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h2>Share Yours Feedback</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "12px", boxSizing: 'border-box' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "12px", boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "12px", boxSizing: 'border-box' }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "12px", boxSizing: 'border-box' }}
            />
            <button
              type="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                backgroundColor: hover ? "#FFC107" : "#FFD600",
                border: "none",
                padding: "12px 24px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%",
                transition: "background-color 0.3s ease",
              color: "#000"
              }}
            >
                Send
            </button>
          </form>
        ) : (
          <p style={{ color: "#4CAF50", fontWeight: "bold" }}>
            Thank you for contacting us! We will get back to you soon.
          </p>
        )}
      </div>

      <div>
        <h2>Find Us Here</h2>
        <iframe
          title="Tasty Treat Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.35776563743!2d72.7850474!3d19.70518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d0000b220d3%3A0x2032194b7c392869!2sTasty%20treat%20cafe!5e1!3m2!1sen!2sin!4v1756011894012!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: 8, paddingBottom: "20px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
