import React from 'react';
import './ContactUs.css';
import IIITlogo from '../../../../images/IIITlogo.png'
import SAClogo from '../../../../images/SAClogo.png'
import email from '../../../../images/email.svg'
import phone from '../../../../images/phone.svg'


const ContactUs = () => {
  return (
    <div className="contact-us-container" id="Contact Us">
      <h1>Contact Us</h1>
      <hr />
      <div className="contact-us-flex">
        <div className="contact-us-item">
          <h2>Email</h2>
          <p><img src={email} alt="" /> mun@iiitnr.edu.in</p>
          <h2>Phone</h2>
          <p><img src={phone} alt="" /> +91 12345 67890</p>
          <p><img src={phone} alt="" /> +91 12345 67890</p>
        </div>
        <div className="contact-us-item">
          <h2>Social Handles</h2>
          <p><a href="https://instagram.com">Instagram</a></p>
          <p><a href="https://linkedin.com">LinkedIn</a></p>
          <p><a href="https://twitter.com">Twitter</a></p>
          <p><a href="https://facebook.com">Facebook</a></p>
        </div>
        <div className="contact-us-item">
          <h2>Address</h2>
          <p>IIIT–Naya Raipur</p>
          <p>Plot No. 7, Sector 24,</p>
          <p>Near Purkhooti Muktangan,</p>
          <p>Atal Nagar – 493661</p>
          <p>Chhattisgarh</p>
        </div>
        <div className="contact-us-item map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6009597368534!2d81.76359047497839!3d21.12846938434703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1721214197357!5m2!1sen!2sin"
            style={{border:1}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <hr />
      <footer>
        <p>Copyright © 2024 All Rights Reserved By MUN,IIITNR.</p>
        <div className='logos'>
          <img src={SAClogo} alt="" />
          <img src={IIITlogo} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
