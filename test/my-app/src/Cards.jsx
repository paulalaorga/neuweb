import React from 'react';
import './Cards.css';

export default function Cards() {

    return (
<div className="Cards-container">
        <div className="Card">
          <h2>Projects</h2>
          <p>Check out my projects</p>
        </div>
        <div className="Card">
          <h2>Skills</h2>
          <p>Check out my skills</p>
        </div>
        <div className="Card">
          <h2>Contact</h2>
          <p>Get in touch</p>
        </div>
      </div>
);
}