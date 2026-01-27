
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSidebarPage = ['/product', '/solutions'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsVisible(true);
  }, [location.pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[150] flex justify-between items-center px-6 md:px-12 py-5 md:py-6 transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
          ${isHomePage ? 'bg-transparent' : (isSidebarPage && !isMenuOpen ? 'bg-white/90 backdrop-blur-md' : 'bg-[#0c0d08]/90 backdrop-blur-md')}`}
      >
        <Link 
          to="/" 
          className={`text-xl md:text-2xl font-serif font-bold tracking-tight z-[160] transition-colors duration-500
            ${isHomePage || !isSidebarPage || isMenuOpen ? 'text-white' : 'text-zinc-900'}`}
        >
          Alchemists
        </Link>

        <div className={`hidden md:flex space-x-12 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500
          ${isHomePage || !isSidebarPage ? 'text-white/50 hover:text-white' : 'text-zinc-900/50 hover:text-zinc-900'}`}>
          <Link to="/product" className="hover:text-[#a3966a] transition-colors">Product</Link>
          <Link to="/solutions" className="hover:text-[#a3966a] transition-colors">Solutions</Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden z-[160] p-2 focus:outline-none transition-colors duration-500
            ${isMenuOpen ? 'text-white' : (isHomePage || !isSidebarPage ? 'text-white' : 'text-zinc-900')}`}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </nav>

      <div className={`fixed inset-0 z-[140] bg-[#0c0d08] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/" className="text-white text-3xl font-serif">Home</Link>
        <Link to="/product" className="text-white text-3xl font-serif">Product</Link>
        <Link to="/solutions" className="text-white text-3xl font-serif">Solutions</Link>
        <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] pt-12">Studio // 2025</p>
      </div>
    </>
  );
};

export default Navbar;