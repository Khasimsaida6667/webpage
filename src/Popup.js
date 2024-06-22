
import React from 'react';
import './Popup.css';

function Popup({ product, onClose }) {
  return (
    <div className="overlay3" onClick={onClose}>
      <div className="popup3" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="close-button3">×</button>
        <div className="content3">
          <div className="image-section3">
            <img src={product.image} alt={product.name} className="main-image3" />
            <div className="thumbnails3">
              {product.thumbnails.map((thumb, index) => (
                <img key={index} src={thumb} alt={`${product.name} thumbnail ${index + 1}`} className="thumbnail3" />
              ))}
            </div>
          </div>
          <div className="info-section3">
            <h2 className="title3">{product.name}</h2>
            <p className="price3">MRP: {product.price}</p>
            <div className="description3">
              <h3>Product Description:</h3>
              <p>{product.description}</p>
            </div>
            <div className="contents3">
              <h3>Product Contents:</h3>
              <ul>
                {product.contents.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="shipping3">Shipping Time: {product.shippingTime}</p>
            <button className="buy-button3">Choose Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;