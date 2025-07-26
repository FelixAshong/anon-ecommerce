import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { 
    id,
    defaultImage, 
    hoverImage, 
    category, 
    title, 
    price, 
    originalPrice, 
    badge, 
    badgeType = 'angle',
    badgeColor = 'black',
    rating = 3 
  } = product;

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

  return (
    <div className="showcase">
      <div className="showcase-banner">
        <Link to={`/product/${id}`}>
          <img 
            src={defaultImage} 
            alt={title} 
            width="300" 
            className="product-img default" 
          />
          {hoverImage && (
            <img 
              src={hoverImage} 
              alt={title} 
              width="300" 
              className="product-img hover" 
            />
          )}
        </Link>

        {badge && (
          <p className={`showcase-badge ${badgeType} ${badgeColor}`}>
            {badge}
          </p>
        )}

                       <div className="showcase-actions">
                 <button className="btn-action" title="Add to Wishlist">
                   <ion-icon name="heart-outline"></ion-icon>
                 </button>
                 <button className="btn-action" title="Quick View">
                   <ion-icon name="eye-outline"></ion-icon>
                 </button>
                 <button className="btn-action" title="Compare">
                   <ion-icon name="repeat-outline"></ion-icon>
                 </button>
                 <button 
                   className="btn-action" 
                   title="Add to Cart"
                   onClick={() => addToCart(product)}
                 >
                   <ion-icon name="bag-add-outline"></ion-icon>
                 </button>
               </div>
      </div>

      <div className="showcase-content">
        <Link to={`/product/${id}`} className="showcase-category">{category}</Link>
        <Link to={`/product/${id}`}>
          <h3 className="showcase-title">{title}</h3>
        </Link>
        <div className="showcase-rating">
          {renderStars(rating)}
        </div>
        <div className="price-box">
          <p className="price">${price}</p>
          {originalPrice && <del>${originalPrice}</del>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 