
import React from 'react';
import Footer from '../components/Footer';
import SectionNav from '../components/SectionNav';

const Values: React.FC = () => {
  const navItems = [
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'relationships', label: 'Relationships' },
  ];

  return (
    <div className="parchment text-zinc-900 min-h-screen overflow-x-hidden font-sans">
      <SectionNav items={navItems} />

      <div className="md:pl-[180px] w-full pt-20 md:pt-0">
        {/* HERO SECTION */}
        <section id="philosophy" className="snap-section px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col justify-center min-h-[80vh]">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#a3966a] mb-6 block">Company Values</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-10 tracking-tighter leading-none">
              How We <br/><span className="italic">Deliver</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-500 max-w-2xl">
              Building great software is equal parts thinking and execution. Our values define how we navigate that process every day.
            </p>
          </div>
        </section>

        {/* PROACTIVE PARTNERSHIP */}
        <section id="partnership" className="px-6 md:px-16 lg:px-24 py-24 border-t border-zinc-200">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#6b5f3a]">Proactive Partnership</h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-700">
                We don't just complete tasks—we anticipate needs, proactively manage deliverables, and integrate seamlessly with your team.
              </p>
              <ul className="space-y-4 text-zinc-500 text-lg font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Anticipate operational needs before they become bottlenecks.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Manage deliverables with transparency and ownership.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Seamless integration with your existing internal workflows.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DEEP TECHNICAL EXPERTISE */}
        <section id="expertise" className="px-6 md:px-16 lg:px-24 py-24 border-t border-zinc-200">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#6b5f3a]">Deep Technical Expertise</h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-700">
                Our team's extensive experience in AI and software development ensures we can tackle the most complex challenges.
              </p>
              <ul className="space-y-4 text-zinc-500 text-lg font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Specialized knowledge in Applied AI and Machine Learning.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Architecture designed for long-term stability and scaling.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Solving hard engineering problems with elegant, maintainable code.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* KILLER RELATIONSHIP MANAGEMENT */}
        <section id="relationships" className="px-6 md:px-16 lg:px-24 py-24 border-t border-zinc-200 pb-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#6b5f3a]">Killer Relationship Management</h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-700">
                We prioritize clear communication, transparency, and alignment with your strategic goals, ensuring a partnership built on trust and success.
              </p>
              <ul className="space-y-4 text-zinc-500 text-lg font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>High-frequency, low-friction communication loops.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Total transparency regarding progress, risks, and pivots.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#a3966a] font-bold">—</span>
                  <span>Strategic alignment with your long-term business objectives.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Values;
