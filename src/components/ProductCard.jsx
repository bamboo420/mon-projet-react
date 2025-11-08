import React from 'react';
import './ProductCard.css';

export default function ProductCard({ title, imageSrc }) {
  return (
    <div className="product-card">
      <h1>{title}</h1>
      <img src={imageSrc} alt={title} className="product-image" />
    </div>
  );
}
