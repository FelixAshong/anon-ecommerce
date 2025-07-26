import React, { useState } from 'react';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-close-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="newsletter-img">
          <img src="/src/assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400" />
        </div>

        <div className="newsletter">
          <form onSubmit={handleSubmit}>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe the <b>Anon</b> to get latest products and discount update.
              </p>
            </div>

            <input
              type="email"
              name="email"
              className="email-field"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal; 