
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Partner from './pages/Partner';
import Values from './pages/Values';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Partner />} />
            <Route path="/values" element={<Values />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;