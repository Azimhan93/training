import React from 'react';
import Social from './Social/Social';
import "./Footer.css";

export default function Footer() {
    return (
      <div className="footer">
        <Social />
        <div className="footer-item">
            <p className="footer-links">
                <a className="link-1" href="#/">Home</a>
                <a href="#/">Blog</a>
                <a href="#/">Pricing</a>
                <a href="#/">About</a>
                <a href="#/">Faq</a>
                <a href="#/">Contact</a>
            </p>
            <p>Company Name &copy; 2023</p>
        </div>
      </div>
    );
} 