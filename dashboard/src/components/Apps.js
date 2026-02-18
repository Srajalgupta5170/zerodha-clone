import React from "react";
import "./Apps.css";

const Apps = () => {
  const apps = [
    {
      name: "Kite",
      icon: "📈",
      description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.",
      link: "https://kite.zerodha.com",
      color: "#387ed1"
    },
    {
      name: "Console",
      icon: "📊",
      description: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      link: "https://console.zerodha.com",
      color: "#4caf50"
    },
    {
      name: "Coin",
      icon: "💰",
      description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      link: "https://coin.zerodha.com",
      color: "#ff9800"
    },
    {
      name: "Kite Connect",
      icon: "🔗",
      description: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.",
      link: "https://kite.trade",
      color: "#9c27b0"
    },
    {
      name: "Varsity",
      icon: "📚",
      description: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.",
      link: "https://zerodha.com/varsity",
      color: "#e91e63"
    },
    {
      name: "Sentinel",
      icon: "🔔",
      description: "Set alerts on stocks, indices, and more based on price movements, changes, and volumes.",
      link: "https://sentinel.zerodha.com",
      color: "#00bcd4"
    }
  ];

  return (
    <div className="apps-container">
      <div className="apps-header">
        <h1>Zerodha Apps & Platforms</h1>
        <p className="apps-subtitle">
          A technology-first stock broker with cutting-edge platforms and tools
        </p>
      </div>

      <div className="about-zerodha">
        <div className="about-card">
          <h2>🏢 About Zerodha</h2>
          <p>
            Zerodha is India's largest stock broker offering the lowest, most transparent pricing. 
            Founded in 2010, we pioneered the discount broking model in India.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1.5+ Crore</span>
              <span className="stat-label">Active Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹4+ Lakh Crore</span>
              <span className="stat-label">Daily Turnover</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15%+</span>
              <span className="stat-label">of India's Retail Volume</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹0</span>
              <span className="stat-label">Equity Delivery Charges</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title">Our Products</h2>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <a 
            key={index} 
            href={app.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="app-card"
          >
            <div className="app-icon" style={{ backgroundColor: app.color + "20", color: app.color }}>
              {app.icon}
            </div>
            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.description}</p>
            </div>
            <span className="app-arrow">→</span>
          </a>
        ))}
      </div>

      <div className="pricing-info">
        <h2>💎 Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Equity Delivery</h3>
            <p className="price">FREE</p>
            <span>₹0 brokerage</span>
          </div>
          <div className="pricing-card">
            <h3>Intraday & F&O</h3>
            <p className="price">₹20</p>
            <span>per executed order</span>
          </div>
          <div className="pricing-card">
            <h3>Mutual Funds</h3>
            <p className="price">FREE</p>
            <span>Direct plans only</span>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <h2>📞 Contact & Support</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>support@zerodha.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+91 80 4040 2020</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <span>zerodha.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
