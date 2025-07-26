import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Mock product data - in a real app, this would come from an API
  const mockProduct = {
    id: parseInt(id),
    title: "Premium Cotton T-Shirt",
    price: "29.99",
    originalPrice: "39.99",
    category: "Clothing",
    description: "This premium cotton t-shirt is made from 100% organic cotton, providing ultimate comfort and breathability. Perfect for everyday wear, it features a classic fit and comes in multiple colors and sizes.",
    features: [
      "100% Organic Cotton",
      "Classic Fit",
      "Machine Washable",
      "Pre-shrunk fabric",
      "Reinforced stitching"
    ],
    images: [
      "/src/assets/images/products/shirt-1.jpg",
      "/src/assets/images/products/shirt-2.jpg",
      "/src/assets/images/products/clothes-1.jpg",
      "/src/assets/images/products/clothes-2.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", code: "#FFFFFF" },
      { name: "Black", code: "#000000" },
      { name: "Navy", code: "#000080" },
      { name: "Gray", code: "#808080" }
    ],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sku: "TSH-001"
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(mockProduct);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor
    }, quantity);
    
    alert('Product added to cart!');
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<ion-icon key={i} name="star"></ion-icon>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<ion-icon key={i} name="star-half-outline"></ion-icon>);
      } else {
        stars.push(<ion-icon key={i} name="star-outline"></ion-icon>);
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/category">{product.category}</a>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.title} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="option-group">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`color-btn ${selectedColor === color.name ? 'active' : ''}`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>Quantity:</label>
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <ion-icon name="remove-outline"></ion-icon>
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button
                className="btn-primary btn-large"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ion-icon name="bag-add-outline"></ion-icon>
                Add to Cart
              </button>
              <button className="btn-secondary btn-large">
                <ion-icon name="heart-outline"></ion-icon>
                Add to Wishlist
              </button>
            </div>

            <div className="product-meta">
              <p><strong>SKU:</strong> {product.sku}</p>
              <p><strong>Availability:</strong> 
                <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
            </div>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 