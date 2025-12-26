"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const handleMouseEnter = (e) => {
    e.target.style.color = "#00bfff";
    e.target.style.textDecoration = "underline";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "white";
    e.target.style.textDecoration = "none";
  };

  const linkStyle = {
    display: "block",
    margin: "5px 0",
    textDecoration: "none",
    color: "white",
    paddingLeft: "20px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        width: "100%",
        zIndex: 9999,
        background: "#57769f73",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "white",
        transition: "all 0.3s ease",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.4)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        {/* Pages */}
        <div>
          <h3 style={{ color: "#00bfff" }}>Weather App</h3>
          <Link href="/" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Home
          </Link>
          <Link href="/contact" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Contact Us
          </Link>
          <Link href="/about" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            About Us
          </Link>
          <Link href="/termANDconditions" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Terms & Conditions
          </Link>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ color: "#00bfff" }}>Services</h3>
          <Link href="/services" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Services
          </Link>
          <Link href="/MapService" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Live Map
          </Link>
          <Link href="/ClothingSuggestions" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Clothing Suggestions
          </Link>
          <Link href="/AirQualityIndex" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Air Quality Index
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <h3 style={{ color: "#00bfff" }}>Social Links</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
            <div style={{ display: "flex", gap: "30px", paddingLeft: "20px" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "black", fontSize: "24px" }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#0e76a8", fontSize: "24px" }}>
                <FaLinkedin />
              </a>
            </div>
            <div style={{ display: "flex", gap: "30px", paddingLeft: "20px" }}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C13584", fontSize: "24px" }}>
                <FaInstagram />
              </a>
              <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "24px" }}>
                <FaWhatsapp />
              </a>
            </div>
            <div style={{ display: "flex", gap: "30px", paddingLeft: "20px" }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1DA1F2", fontSize: "24px" }}>
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2", fontSize: "24px" }}>
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/assets/forest-unscreen.gif" alt="Logo GIF" style={{ width: "100px", height: "auto" }} />
          </Link>
        </div>
      </div>

      <div style={{ padding: "20px", borderTop: "1px solid #ccc", textAlign: "center" }}>
        <p>&copy; Aurora Pixels. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
