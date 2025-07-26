import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import NewsletterModal from './NewsletterModal';
import NotificationToast from './NotificationToast';

const Header = () => {
  const { getCartItemCount, toggleCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    // Show toast notification after 2 seconds
    const timer = setTimeout(() => {
      setIsToastVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsOverlayActive(false);
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsOverlayActive(true);
  };

  return (
    <>
      <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      
      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <NotificationToast isVisible={isToastVisible} onClose={() => setIsToastVisible(false)} />

      <header>
        {/* Header Top */}
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>

            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - $55
              </p>
            </div>

            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* Header Main */}
        <div className="header-main">
          <div className="container">
            <Link to="/" className="header-logo">
              <img src="/src/assets/images/logo/logo.svg" alt="Anon's logo" width="120" height="36" />
            </Link>

            <div className="header-search-container">
              <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
              <button className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>

            <div className="header-user-actions">
              <Link to="/account" className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </Link>
              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>
              <button className="action-btn" onClick={toggleCart}>
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">{getCartItemCount()}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <Link to="/" className="menu-title">Home</Link>
              </li>
              <li className="menu-category">
                <Link to="/products" className="menu-title">Categories</Link>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Desktop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Laptop</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Camera</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Tablet</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Headphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src="/src/assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250" height="119" />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Men's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Sports</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Jacket</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Sunglasses</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src="/src/assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Women's</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Perfume</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Cosmetics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Bags</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src="/src/assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Smart Watch</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Smart TV</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Keyboard</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Mouse</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">Microphone</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="#">
                        <img src="/src/assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Men's</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Shirt</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shorts & Jeans</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Safety Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Wallet</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Women's</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Dress & Frock</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Jewelry</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Perfume</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Clothes Perfume</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Deodorant</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Flower Fragrance</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Air Freshener</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Bottom Navigation */}
        <div className="mobile-bottom-navigation">
          <button className="action-btn" onClick={openMobileMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button className="action-btn" onClick={toggleCart}>
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">{getCartItemCount()}</span>
          </button>
          <Link to="/" className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </Link>
          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>
          <button className="action-btn" onClick={openMobileMenu}>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-navigation-menu has-scrollbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" onClick={closeMobileMenu}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>
            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 0 ? 'active' : ''}`}
                onClick={() => toggleAccordion(0)}
              >
                <p className="menu-title">Men's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 0 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Shirt</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Shorts & Jeans</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Safety Shoes</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Wallet</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 1 ? 'active' : ''}`}
                onClick={() => toggleAccordion(1)}
              >
                <p className="menu-title">Women's</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 1 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Dress & Frock</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Earrings</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Necklace</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Makeup Kit</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 2 ? 'active' : ''}`}
                onClick={() => toggleAccordion(2)}
              >
                <p className="menu-title">Jewelry</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 2 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Earrings</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Couple Rings</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Necklace</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Bracelets</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 3 ? 'active' : ''}`}
                onClick={() => toggleAccordion(3)}
              >
                <p className="menu-title">Perfume</p>
                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 3 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Clothes Perfume</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Deodorant</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Flower Fragrance</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Air Freshener</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>

          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button 
                  className={`accordion-menu ${activeAccordion === 4 ? 'active' : ''}`}
                  onClick={() => toggleAccordion(4)}
                >
                  <p className="menu-title">Language</p>
                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className={`submenu-category-list ${activeAccordion === 4 ? 'active' : ''}`}>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">English</a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Español</a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">Français</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button 
                  className={`accordion-menu ${activeAccordion === 5 ? 'active' : ''}`}
                  onClick={() => toggleAccordion(5)}
                >
                  <p className="menu-title">Currency</p>
                  <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                </button>
                <ul className={`submenu-category-list ${activeAccordion === 5 ? 'active' : ''}`}>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">USD $</a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">EUR €</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="menu-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 