
import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ProductList from './ProductList';
import Footer from './Footer';
import Popup from './Popup';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => {
    setSelectedProduct(product);
  };


  return (
    <div className="app">
      <Header />
      <main className="main">
        <About />
        <ProductList openPopup={openPopup} />
      </main>
      <Footer />
      {/* {selectedProduct && (
        <Popup product={selectedProduct} onClose={closePopup} />
      )} */}
      {selectedProduct && (
  <Popup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
)}
    </div>
  );
}

export default App;