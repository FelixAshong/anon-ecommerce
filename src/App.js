import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import ShoppingCart from './components/ShoppingCart';
import './assets/css/style.css';
import './assets/css/ecommerce-features.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <ShoppingCart />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 