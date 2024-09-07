import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>İletişim</h2>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Gönder</button>
        </form>

        <div className="contact-info">
          <h3>İletişim Bilgilerimiz</h3>
          <p><strong>Adres:</strong> Örnek Mahallesi, 12345, İstanbul</p>
          <p>
            <a href="https://wa.me/900123456789" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ marginRight: '5px', color: '#25D366' }} />
              +90 012 345 67 89
            </a>
          </p>
          <p>
            <a href="mailto:info@solarpanels.com"><MdAttachEmail style={{ marginRight: '5px', color: '#0077B5' }} />
            info@solarpanels.com
            </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
