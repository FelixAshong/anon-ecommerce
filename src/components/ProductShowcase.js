import React from 'react';
import ProductCard from './ProductCard';

const ProductShowcase = ({ title, products }) => {
  return (
    <div className="product-showcase">
      <h2 className="title">{title}</h2>
      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase; 