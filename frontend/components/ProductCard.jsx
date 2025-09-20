import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h4>{product.name}</h4>
      <p>Category: {product.category}</p>
      <p>Score: {product.sustainabilityScore}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
