import React from 'react';
import './wabutton.css';
import wa_icon from './wa_icon.png'

const WAB = () => {
  return (
    <div className="wa-btn-container">
      <a 
        href="https://wa.me/918384085829?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="wa-btn">
          {/* <img src={wa_icon} alt="WhatsApp Icon" /> */}
          Chat on WhatsApp
        </button>
      </a>
    </div>
  );
};

export default WAB;
