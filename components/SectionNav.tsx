
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
}

const SectionNav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [isMainHeaderVisible, setIsMainHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsMainHeaderVisible(false);
      } else {
        setIsMainHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update active section if we aren't mid-programmatic scroll
        if (isScrollingRef.current) return;

        // Find the entry that is most visible or intersecting
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length > 0) {
          // If multiple are visible, pick the one closest to the top
          const mostVisible = intersecting.reduce((prev, curr) => 
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveId(mostVisible.target.id);
        }
      },
      { 
        threshold: [0.1, 0.2, 0.3], // Multiple thresholds for better detection
        rootMargin: "-20% 0px -20% 0px" 
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [items, lastScrollY]);

  // Mobile horizontal auto-scroll
  useEffect(() => {
    if (activeBtnRef.current && mobileNavRef.current) {
      const container = mobileNavRef.current;
      const element = activeBtnRef.current;
      
      const scrollLeft = element.offsetLeft - (container.offsetWidth / 2) + (element.offsetWidth / 2);
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id); // Immediate UI feedback
      isScrollingRef.current = true;
      
      const offset = window.innerWidth < 768 ? 140 : 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Release the scroll lock after animation finishes roughly
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[180px] bg-[#0c0d08] flex-col z-[100] border-r border-white/10">
        <div className="p-6 border-b border-white/10 bg-black h-24 flex items-center">
          <Link to="/" className="text-lg font-serif font-bold tracking-tight text-white block">
            Alchemists
          </Link>
        </div>
        <nav className="flex flex-col">
          {items.map((item, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex flex-col items-start px-4 py-4 border-b border-white/10 transition-colors text-left
                  ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
              >
                <div className="flex items-start space-x-3">
                  <span className={`text-[9px] font-mono tracking-tighter pt-0.5 ${isActive ? 'text-[#a3966a]' : 'text-white/30'}`}>
                    {num}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] leading-tight transition-all duration-300 ${
                    isActive ? 'text-white opacity-100' : 'text-white/40 group-hover:text-white/60'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto p-6 opacity-20">
           <span className="text-[7px] uppercase tracking-[0.5em] [writing-mode:vertical-lr] font-mono">
             STUDIO // 2025
           </span>
        </div>
      </aside>

      {/* Mobile Fixed Sub-Nav */}
      <div 
        ref={mobileNavRef}
        style={{ transform: isMainHeaderVisible ? 'translateY(64px)' : 'translateY(0px)' }}
        className="md:hidden fixed z-[130] left-0 top-0 w-full bg-[#0c0d08] border-b border-white/10 overflow-x-auto no-scrollbar py-4 px-6 flex space-x-8 transition-all duration-500 ease-in-out shadow-2xl"
      >
        {items.map((item) => (
          <button
            key={item.id}
            ref={activeId === item.id ? activeBtnRef : null}
            onClick={() => scrollToSection(item.id)}
            className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] transition-all whitespace-nowrap py-1 border-b-2 ${
              activeId === item.id ? 'text-[#a3966a] border-[#a3966a]' : 'text-white/40 border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default SectionNav;