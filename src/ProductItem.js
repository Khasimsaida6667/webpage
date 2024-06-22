
import React from 'react';
import './ProductItem.css';

function ProductItem({ product, openPopup }) {
  return (
    <div className="productItem">
      <img src={product.image} alt={product.name} className="image" />
      <div className='s'>
      <h3 className="name">{product.name}</h3>
      <button onClick={() => openPopup(product)} className="button4">
        QUICK VIEW
      </button></div>
    </div>
  );
}

export default ProductItem;