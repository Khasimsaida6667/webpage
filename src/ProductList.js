
import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ openPopup }) {

const products = [
    {
      id: 1,
      name: "Eco-Friendly Notebook",
      price: "$15.99",
      image: "/Frame 18.png",
      thumbnails: [
        "/Frame 18.png",
        "/Frame 18.png",
        "/Frame 18.png"
      ],
      description: "Made from 100% recycled materials, this notebook helps reduce waste while providing a high-quality writing experience.",
      contents: [
        "100 pages of recycled paper",
        "Biodegradable cover",
        "1 recycled pen included"
      ],
      shippingTime: "3-5 business days"
    },
    {
      id: 2,
      name: "Fair Trade Coffee Beans",
      price: "$12.99",
      image: "./Frame 19.png",
      thumbnails: [
        "/Frame 18.png",
        "/Frame 18.png",
        "/Frame 18.png"
      ],
      description: "Ethically sourced coffee beans from small-scale farmers, ensuring fair wages and sustainable farming practices.",
      contents: [
        "250g of whole coffee beans",
        "Roasted within the last week",
        "Information leaflet on origin"
      ],
      shippingTime: "2-4 business days"
    }
  ];
  return (
    <section className="productList">
      <div className="container">

      <div className='bou'>
          <img src="./Frame.png" alt="boder" className='bor1'/>
          <h2 className="title1">Our products</h2>
          <img src="./Frame.png" alt="boder" className='bor2'/>
        </div>
        
        <div className="grid">
          {products.map(product => (
            <ProductItem key={product.id} product={product} openPopup={openPopup} />
          ))}
        </div>
        <img src="./Frame.png" alt="some" className='l'/>
      </div>
    </section>
  );
}

export default ProductList;