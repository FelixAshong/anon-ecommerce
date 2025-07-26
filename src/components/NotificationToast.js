import React from 'react';

const NotificationToast = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="notification-toast">
      <button className="toast-close-btn" onClick={onClose}>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="toast-banner">
        <img src="/src/assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
      </div>

      <div className="toast-detail">
        <p className="toast-message">
          Someone in new just bought
        </p>
        <p className="toast-title">
          Rose Gold Earrings
        </p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default NotificationToast; 