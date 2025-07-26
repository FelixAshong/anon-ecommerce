import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <div className="product-main">
      <h2 className="title">{title}</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 