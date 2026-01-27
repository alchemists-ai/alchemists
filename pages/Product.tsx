
import React from 'react';
import Footer from '../components/Footer';
import SectionNav from '../components/SectionNav';

const Product: React.FC = () => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'process', label: 'How We Build' },
    { id: 'cta', label: 'Work With Us' },
  ];

  const coreBeliefs = [
    {
      title: "Products demand ownership.",
      body: "Ownership is the foundation of a great product. We deliver the entire lifecycle — from architectural bedrock to final stabilization. One team, total accountability, zero gaps in execution."
    },
    {
      title: "Resilience over demonstrations.",
      body: "Resilience is our benchmark. We build for the chaos of real-world usage, ensuring your system performs under pressure and handles scale effortlessly."
    },
    {
      title: "Delivery is just the beginning.",
      body: "The alchemy continues after launch. We stay through the critical stabilization phase, turning early momentum into a permanent, robust foundation that grows with your users."
    }
  ];

  return (
    <div className="parchment text-zinc-900 min-h-screen overflow-x-hidden">
      <SectionNav items={navItems} />

      <div className="md:pl-[180px] w-full pt-20 md:pt-0">
        {/* HERO SECTION */}
        <section id="overview" className="snap-section px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-[#fcfaf2]">
          <div className="max-w-7xl w-full mx-auto">
            <div className="mb-24 lg:mb-32">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-tighter leading-[0.9]">
                Product
              </h1>
              <p className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl text-zinc-500">
                We build production-grade software that works under real usage, not just demonstrations of intent.
              </p>
            </div>

            <div className="max-w-4xl space-y-16 md:space-y-24 pt-16 border-t border-zinc-200">
              {coreBeliefs.map((belief, i) => (
                <div key={i} className="group">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#8b7d5b] mb-6 leading-[1.1] transition-transform duration-500 group-hover:translate-x-2">
                    {belief.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-zinc-500 font-light max-w-2xl">
                    {belief.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section id="showcase" className="snap-section relative min-h-screen py-24 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-7xl">
            <div className="mb-16">
              <h2 className="text-4xl md:text-7xl font-serif mb-6 text-white drop-shadow-lg tracking-tight">Product Showcase</h2>
              <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                These are the core categories of systems we have designed, built, and delivered over the last two decades.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/20 backdrop-blur-[2px] shadow-2xl">
              {[
                { title: "Internal Enterprise Systems", items: ["DASHBOARDS", "WORKFLOW TOOLS", "OPERATIONAL SYSTEMS"] },
                { title: "SaaS/Platforms", items: ["B2B SAAS PRODUCTS", "SUBSCRIPTION PLATFORMS", "CLOUD-NATIVE SYSTEMS"] },
                { title: "Customer-Facing Applications", items: ["WEB APPLICATIONS", "MOBILE APPS", "CUSTOMER PORTALS"] },
                { title: "AI-Native Products", items: ["AI-POWERED TOOLS", "INTELLIGENT WORKFLOWS", "APPLIED GENERATIVE AI"] },
                { title: "Data Platforms & Analytics", items: ["DATA PLATFORMS", "ANALYTICS DASHBOARDS", "BI SYSTEMS"] },
                { title: "System Integrations", items: ["API INTEGRATIONS", "CRM", "LEGACY SYSTEM CONNECTIONS"] }
              ].map((cat, i) => (
                <div key={i} className="p-8 md:p-12 lg:p-14 border border-zinc-200/20 flex flex-col min-h-[400px] transition-all duration-500 bg-white/70 hover:bg-white/95 hover:z-10 group">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-16 text-zinc-900 leading-[1.1] transition-transform duration-500 group-hover:-translate-y-1">{cat.title}</h4>
                  
                  <div className="mt-auto space-y-4">
                    {cat.items.map((item, j) => (
                      <div key={j} className="border-b border-zinc-200 pb-2">
                        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-zinc-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE BUILD SECTION */}
        <section id="process" className="snap-section dark-olive px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-20 leading-[0.9] tracking-tight">How We Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Strategy First", body: "We define the technical reality before writing code. Speed comes from focus." },
                { num: "02", title: "Critical Path", body: "We focus on the non-negotiables that make or break a system at scale." },
                { num: "03", title: "Resilient Ops", body: "Architecture built to survive failure and handle human error effortlessly." },
                { num: "04", title: "Deep Delivery", body: "Handover is the start. We stay involved until the system is stabilized." }
              ].map((step, i) => (
                <div key={i} className="group p-8 border border-white/20 bg-white/[0.08] hover:bg-white/[0.12] transition-all flex flex-col aspect-square justify-between shadow-lg">
                  <span className="text-5xl font-serif text-[#a3966a] opacity-30 group-hover:opacity-100 transition-all">{step.num}</span>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif">{step.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK WITH US SECTION */}
        <section id="cta" className="snap-section bg-[#0c0d08] flex items-center justify-center text-center px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-8xl font-serif mb-8 text-white tracking-tighter leading-none">Ready to build?</h2>
            <p className="text-white/50 text-xl mb-12 font-light max-w-2xl mx-auto">Whether it's a new venture or an enterprise modernization, we bring decades of engineering judgment to your product.</p>
            <a href="mailto:hello@alchemists.studio" className="inline-block bg-white text-black font-bold text-xs uppercase tracking-[0.3em] px-16 py-8 rounded-none hover:bg-[#a3966a] hover:text-white transition-all shadow-[0_20px_60px_rgba(255,255,255,0.05)] active:scale-95">
              Initiate Build
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Product;
