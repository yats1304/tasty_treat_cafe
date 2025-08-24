import React from 'react';

const About = () => {
  return (
    <section style={{
      maxWidth: 800,
      margin: '60px auto 40px auto',
      padding: '0 20px',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      color: '#222',
      background: '#fff',
      boxShadow: '0 2px 22px -6px #ccc',
      borderRadius: 18,
    }}>
      <h1 style={{
        fontSize: '2.7rem',
        fontWeight: 'bold',
        color: '#FFD600',
        marginBottom: 8,
        letterSpacing: 1,
      }}>About Tasty Treat Cafe</h1>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: 1.6,
        marginBottom: 20,
      }}>
        Welcome to <strong>Tasty Treat Cafe</strong>, where every bite is a flavorful journey crafted with passion and care. Our cafe is more than just a place to enjoy delicious food — it’s a community hub where friends and families gather to create unforgettable moments.
      </p>

      <h2 style={{
        fontSize: '1.8rem',
        color: '#222',
        marginBottom: 10,
      }}>Our Story</h2>
      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 20}}>
        Founded with a love for authentic flavors and fresh ingredients, Tasty Treat Cafe began as a small idea to bring delightful, high-quality cafe dishes to our neighborhood. Over the years, we have grown into a beloved local favorite, offering a menu inspired by diverse tastes and traditions but made with a unique signature touch.
      </p>

      <h2 style={{fontSize: '1.8rem', color: '#222', marginBottom: 10}}>Our Philosophy</h2>
      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 20}}>
        At Tasty Treat Cafe, we believe food is an experience. We are dedicated to:
      </p>
      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 20, paddingLeft: 22}}>
        <li><strong>Freshness:</strong> Sourcing the finest ingredients to prepare every dish with care.</li>
        <li><strong>Quality:</strong> Maintaining high culinary standards and consistency.</li>
        <li><strong>Flavor:</strong> Combining bold and subtle flavors that excite your palate.</li>
        <li><strong>Customer happiness:</strong> Creating a warm and welcoming environment where every guest feels special.</li>
      </ul>

      <h2 style={{fontSize: '1.8rem', color: '#222', marginBottom: 10}}>What We Offer</h2>
      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 20}}>
        Our menu features an eclectic mix of comforting classics, innovative creations, and crowd favorites — all prepared lovingly in our cozy kitchen. Whether you come for a hearty meal, a quick bite, or a comforting drink, Tasty Treat Cafe promises satisfaction with every order.
      </p>

      <h2 style={{fontSize: '1.8rem', color: '#222', marginBottom: 10}}>Join Us</h2>
      <p style={{fontSize: '1.1rem', lineHeight: 1.6}}>
        Come visit us and experience the perfect blend of taste and hospitality. Your next favorite dish awaits at <strong>Tasty Treat Cafe</strong> — <em>Flavor That Delights Every Bite</em>.
      </p>
    </section>
  );
};

export default About;
