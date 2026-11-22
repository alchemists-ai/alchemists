
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC<{ heightClass?: string }> = ({ heightClass = "" }) => {
  return (
    <footer className={`dark-olive w-full px-6 md:px-24 py-12 md:py-20 flex flex-col justify-end ${heightClass} snap-section-auto`}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl">Alchemists.AI Private Limited</h3>
          <p className="text-white/40 text-sm max-w-xs">Building software as a deliberate act of engineering and judgment.</p>
          <p className="text-white/40 text-xs">CIN U62090KA2025PTC203883 · Bengaluru, India</p>
          <p className="text-white/40 text-xs">Our product: <a href="https://easydocument.ai" className="underline hover:text-white/70">EasyDocument.ai</a></p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <span className="text-[#a3966a] text-xs font-bold uppercase tracking-widest mb-4">Offerings</span>
          <Link to="/product" className="hover:text-[#a3966a] transition-colors">Product</Link>
          <Link to="/solutions" className="hover:text-[#a3966a] transition-colors">Solutions</Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-[#a3966a] text-xs font-bold uppercase tracking-widest mb-4">Foundation</span>
          <Link to="/values" className="hover:text-[#a3966a] transition-colors">Company Values</Link>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-[#a3966a] text-xs font-bold uppercase tracking-widest mb-4">Engagement</span>
          <a href="mailto:hello@alchemists.ltd" className="hover:text-white/60">Contact Us</a>
          <a href="/privacy/" className="hover:text-white/60">Privacy Policy</a>
          <p className="text-white/40 text-[10px] mt-4 uppercase tracking-widest">© {new Date().getFullYear()} Alchemists.AI Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
