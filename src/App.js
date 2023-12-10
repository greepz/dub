import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SellerInterface from './components/SellerInterface';
import BuyerInterface from './components/BuyerInterface';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<SellerInterface />} />
        <Route path="/buyer" element={<BuyerInterface />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
