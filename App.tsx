import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Works } from './components/sections/Works';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSectionId, setCurrentSectionId] = useState('home');
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 45, damping: 25, mass: 1 });
  
  const touchStart = useRef(0);
  const lastTouchX = useRef(0);
  const currentX = useRef(0);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth);
      }
    };
    handleResize();
    setTimeout(handleResize, 500); // Debounce check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate Progress Width
  const progressWidth = useTransform(springX, (latest) => {
    if (contentWidth === 0 || windowWidth === 0) return '0%';
    const max = contentWidth - windowWidth;
    if (max <= 0) return '0%';
    const progress = Math.abs(latest) / max;
    return `${Math.min(progress * 100, 100)}%`;
  });

  useEffect(() => {
    const unsubscribe = springX.on("change", (latest) => {
        if (windowWidth === 0) return;
        const absX = Math.abs(latest);
        
        // Approximate section start points based on widths below
        // Home: 0 - 100vw
        // About: 100vw - 200vw
        // Services: 200vw - 380vw (Width is 180vw)
        // Works: 380vw - 630vw (Width is 250vw)
        // Contact: > 630vw
        
        let activeId = 'home';
        if (absX < windowWidth * 0.5) activeId = 'home';
        else if (absX < windowWidth * 1.5) activeId = 'about';
        else if (absX < windowWidth * 3.0) activeId = 'services';
        else if (absX < windowWidth * 5.5) activeId = 'works';
        else activeId = 'contact';
        
        setCurrentSectionId(activeId);
    });
    return () => unsubscribe();
  }, [springX, windowWidth]);

  useEffect(() => {
    if (contentWidth === 0 || windowWidth === 0) return;

    const maxScroll = -(contentWidth - windowWidth);

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY || e.deltaX;
        currentX.current -= delta * 0.8; // Reduce sensitivity slightly
        currentX.current = Math.max(Math.min(currentX.current, 0), maxScroll);
        x.set(currentX.current);
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
        lastTouchX.current = currentX.current;
    };

    const handleTouchMove = (e: TouchEvent) => {
        const delta = e.touches[0].clientX - touchStart.current;
        const newX = lastTouchX.current + delta * 1.5;
        currentX.current = Math.max(Math.min(newX, 0), maxScroll);
        x.set(currentX.current);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [windowWidth, contentWidth, x]);

  const scrollToSection = (index: number) => {
    // Width accumulation: 
    // Home(100) -> About(100) -> Services(180) -> Works(250) -> Contact(100)
    let multiplier = 0;
    if (index === 1) multiplier = 1.0;
    if (index === 2) multiplier = 2.0;
    if (index === 3) multiplier = 3.8; // 1 + 1 + 1.8
    if (index === 4) multiplier = 6.3; // 1 + 1 + 1.8 + 2.5
    
    const target = -1 * multiplier * window.innerWidth;
    const maxScroll = -(contentWidth - windowWidth);
    const safeTarget = Math.max(target, maxScroll);
    
    currentX.current = safeTarget;
    x.set(safeTarget);
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white w-full h-full overflow-hidden fixed inset-0">
      {/* Progress Bar moved to TOP */}
      <div className="fixed top-0 left-0 h-1 bg-gray-100 w-full z-[100]">
          <motion.div 
            className="h-full bg-black"
            style={{ width: progressWidth }}
          />
      </div>

      <Navigation 
        items={navItems} 
        currentSection={currentSectionId} 
        onNavigate={scrollToSection} 
      />

      <motion.div 
        ref={containerRef}
        style={{ x: springX }} 
        className="flex h-full w-max will-change-transform"
      >
        <div id="home" className="w-screen h-screen flex-shrink-0 relative">
            <Home x={springX} />
        </div>
        <div id="about" className="w-screen h-screen flex-shrink-0 relative">
            <About x={springX} />
        </div>
        {/* Services wide section for columns */}
        <div id="services" className="w-[180vw] h-screen flex-shrink-0 relative">
            <Services x={springX} />
        </div>
        {/* Works wide section for gallery */}
        <div id="works" className="w-[250vw] h-screen flex-shrink-0 relative">
            <Works x={springX} />
        </div>
        <div id="contact" className="w-screen h-screen flex-shrink-0 relative">
            <Contact x={springX} />
        </div>
      </motion.div>
      
      {/* Scroll Hint */}
      <div className="fixed bottom-8 right-8 pointer-events-none z-40 hidden md:flex items-center gap-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">Scroll to explore</span>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-12 h-[1px] bg-black"
          />
      </div>
    </div>
  );
};

export default App;