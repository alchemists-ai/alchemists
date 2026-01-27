
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import SectionNav from '../components/SectionNav';

interface CapabilityCardProps {
  label: string;
  desc: string;
  shape: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ label, desc, shape }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getClipPath = () => {
    switch (shape) {
      case 'square': return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
      case 'circle': return 'circle(50% at 50% 50%)';
      case 'hexagon': return 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
      case 'pentagon': return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
      case 'diamond': return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      case 'octagon': return 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
      default: return 'none';
    }
  };

  return (
    <div 
      className="relative group bg-white p-8 md:p-12 min-h-[280px] flex flex-col justify-between transition-colors duration-500 hover:bg-zinc-50 border-r border-b border-zinc-200 last:border-r"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-900 mb-6">
          {label}
        </h3>
        <p className="text-sm md:text-base font-light leading-relaxed text-zinc-500 max-w-[95%]">
          {desc}
        </p>
      </div>

      {/* Tiny Shape at Bottom Right */}
      <div className="flex justify-end pr-2 pb-2">
        <motion.div 
          animate={{ 
            rotate: isHovered ? 90 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-4 h-4 bg-black"
          style={{ clipPath: getClipPath() }}
        />
      </div>
    </div>
  );
};

const Partner: React.FC = () => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'strategy', label: 'Strategic Ownership' },
    { id: 'operational', label: 'Operational Ownership' },
    { id: 'difference', label: 'The Difference' },
    { id: 'cta', label: 'Inquire' },
  ];

  const capabilities = [
    { label: "Engineering", shape: "octagon", desc: "Senior engineers with deep system context who own the code and the outcome." },
    { label: "Product & Delivery", shape: "square", desc: "Practitioners experienced in running complex execution cycles without overhead." },
    { label: "Design", shape: "circle", desc: "Designers accustomed to ambiguous environments and functional depth." },
    { label: "Tech Leadership", shape: "hexagon", desc: "Architects with experience across evolving systems and legacy migrations." },
    { label: "Quality & Reliability", shape: "diamond", desc: "Engineers trained in production-grade environments and long-term stability." },
    { label: "Platform & Infra", shape: "pentagon", desc: "Specialists concerned with scalability, security, and developer velocity." }
  ];

  return (
    <div className="text-zinc-900 overflow-x-hidden">
      <SectionNav items={navItems} />

      <div className="md:pl-[180px] w-full min-h-screen pt-20 md:pt-0">
        
        {/* HERO SECTION */}
        <section id="overview" className="snap-section parchment px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 tracking-tighter leading-[0.9]">
              Solutions
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
              <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-500 max-w-2xl">
                A long-term engagement for organizations that need experienced technology leadership.
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight text-zinc-800 border-l-2 border-[#a3966a] pl-8">
                We work alongside your teams to <span className="text-[#a3966a]">shape decisions</span>, guide execution, and <span className="italic">take ownership</span> as systems evolve.
              </h2>
            </div>
          </div>
        </section>

        {/* STRATEGIC OWNERSHIP */}
        <section id="strategy" className="snap-section dark-olive px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-20">
              <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight text-white">Strategic Ownership</h2>
              <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl">
                We take ownership of the technology decisions that shape long-term outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
              {[
                "Technology strategy & direction",
                "Architecture & platform design",
                "Technology stack decisions",
                "Build vs buy evaluation",
                "Legacy modernization direction",
                "Security, compliance & risk planning",
                "Cost & technical debt assessment",
                "Future-proof ecosystem planning"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group relative bg-[#fcfaf2] aspect-[2/3] w-full flex flex-col justify-end p-4 md:p-10 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] md:w-[10px] bg-[#a3966a]/20 border-r border-[#a3966a]/10"></div>
                  <div className="absolute left-[8px] md:left-[18px] top-0 bottom-0 w-[1px] bg-zinc-200/50"></div>
                  <div className="relative z-10">
                    <h4 className="text-sm md:text-xl lg:text-3xl font-bold font-serif text-zinc-900 leading-tight mb-4 md:mb-10">{item}</h4>
                    <div className="w-8 h-[1px] bg-zinc-300 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATIONAL OWNERSHIP */}
        <section id="operational" className="snap-section bg-white text-zinc-900 px-6 md:px-16 lg:px-24 py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-20">
              <h2 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter">Operational Ownership</h2>
              <p className="text-zinc-500 text-lg md:text-2xl font-light max-w-3xl mb-12 leading-relaxed">
                Where execution needs continuity, we take ownership of how work runs day to day.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              {/* Grid Title moved closer and redesigned */}
              <div className="mb-6 pb-4 border-b border-zinc-900/10">
                <h4 className="text-zinc-900 text-base md:text-xl font-serif italic tracking-tight opacity-90">
                  Delivered through dedicated teams
                </h4>
              </div>

              {/* Seamless Grid with Intentional Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-zinc-200">
                {capabilities.map((cap) => (
                  <CapabilityCard 
                    key={cap.label}
                    label={cap.label}
                    desc={cap.desc}
                    shape={cap.shape}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        </section>

        {/* THE DIFFERENCE */}
        <section id="difference" className="snap-section parchment px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-5xl md:text-7xl font-serif mb-20 text-[#8b7d5b] tracking-tight">The Difference</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">Strategic Ownership <br/><span className="text-[#a3966a] italic">vs consulting</span></h3>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                  Traditional consulting provides frameworks and moves on, leaving you with the risk. We inhabit the problem space with you, making decisions alongside your leadership.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">Operational Ownership <br/><span className="text-[#a3966a] italic">vs staffing</span></h3>
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                  Staffing adds hands to tasks, but leaves management on you. We provide the complete team and senior management layer for guaranteed quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="cta" className="snap-section bg-[#0c0d08] flex items-center justify-center text-center px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-8xl font-serif mb-12 text-white tracking-tighter leading-none">Beyond delivery.</h2>
            <button className="bg-white text-black font-bold text-xs uppercase tracking-[0.3em] px-16 py-8 rounded-none hover:bg-[#a3966a] hover:text-white transition-all shadow-[0_20px_60px_rgba(255,255,255,0.05)] active:scale-95">
              Initiate Partnership
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Partner;