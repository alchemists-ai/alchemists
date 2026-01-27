
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e0f07] text-[#fcfaf2] flex flex-col justify-between p-6 md:p-12 lg:p-20 overflow-x-hidden font-sans select-none">
      
      {/* Header Section - Left Aligned */}
      <header className="max-w-4xl animate-fade-in pt-12 md:pt-16 text-left">
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif tracking-tight mb-6 leading-none">
          Alchemists
        </h1>
        <p className="text-sm md:text-base font-light leading-relaxed max-w-sm opacity-90">
          Building great software is closer to alchemy, transcending engineering — equal parts vision and execution.
        </p>
      </header>

      {/* Main Offerings Section - Left Aligned & Full Width Fill */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-start gap-6 md:gap-8 my-10 md:my-16 w-full">
        
        {/* Card 1 — Product */}
        <Link 
          to="/product" 
          className="flex-1 w-full h-[500px] md:h-[550px] bg-[#fcfaf2] p-8 md:p-12 lg:p-14 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] shadow-2xl group relative text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#6b5f3a] font-bold">Product</h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-light text-zinc-600 leading-snug">
                A comprehensive, enterprise-grade offering
              </p>
              <p className="text-lg md:text-xl font-light text-zinc-600 leading-snug">
                Designed, built, and delivered end to end, ready to be used and scaled.
              </p>
            </div>
          </div>
          
          <div className="flex justify-start">
            {/* Realistic 3D Metallic Cube Icon */}
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-transform duration-1000 group-hover:rotate-12">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]">
                <defs>
                  <linearGradient id="cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#8a8a8a', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="cube-left" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#9a9a9a', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4a4a4a', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="cube-right" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6a6a6a', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M50 20 L85 37 L50 54 L15 37 Z" fill="url(#cube-top)" />
                <path d="M15 37 L50 54 L50 90 L15 73 Z" fill="url(#cube-left)" />
                <path d="M50 54 L85 37 L85 73 L50 90 Z" fill="url(#cube-right)" />
                <path d="M50 20 L85 37 L50 54 L15 37 Z" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <path d="M15 37 L50 54 L50 90" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <path d="M50 54 L85 37" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Card 2 — Solutions */}
        <Link 
          to="/solutions" 
          className="flex-1 w-full h-[500px] md:h-[550px] bg-[#fcfaf2] p-8 md:p-12 lg:p-14 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] shadow-2xl group relative text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#6b5f3a] font-bold">Solutions</h2>
            <p className="text-lg md:text-xl font-light text-zinc-600 leading-snug">
              An ongoing partnership to refine and realize your technology, ensuring excellence at every stage of execution.
            </p>
          </div>
          
          <div className="flex justify-start">
            {/* Metallic Interlocking Rings Icon - Higher Fidelity */}
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 transition-transform duration-1000 group-hover:-rotate-12">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]">
                <defs>
                  <linearGradient id="ring-metal-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#c0c0c0', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#404040', stopOpacity: 1 }} />
                    <stop offset="70%" style={{ stopColor: '#808080', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Visual Interlocking with Layering */}
                <circle cx="40" cy="50" r="18" fill="none" stroke="url(#ring-metal-dark)" strokeWidth="8" />
                <path d="M55 35 A 18 18 0 1 1 55 65" fill="none" stroke="url(#ring-metal-dark)" strokeWidth="8" transform="translate(5, 0)" />
                <path d="M55 35 A 18 18 0 0 0 55 65" fill="none" stroke="url(#ring-metal-dark)" strokeWidth="8" transform="translate(5, 0)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </Link>
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase opacity-70 mt-auto pt-6">
        <div className="mb-6 md:mb-0">
          ALCHEMISTS PVT LTD
        </div>
        <div className="flex space-x-10 md:space-x-16">
          <Link to="/values" className="hover:text-white transition-colors duration-300">COMPANY VALUES</Link>
          <a href="mailto:hello@alchemists.studio" className="hover:text-white transition-colors duration-300">CONTACT</a>
        </div>
      </footer>

    </div>
  );
};

export default Home;
