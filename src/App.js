import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SellerInterface from './components/SellerInterface';
import BuyerInterface from './components/BuyerInterface';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyerInterface />} />
        <Route path="/seller" element={<SellerInterface />} />
        <Route path="/buyer" element={<BuyerInterface />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
