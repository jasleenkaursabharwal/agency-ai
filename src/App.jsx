import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

export const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Mouse position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Theme handling
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Custom cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Move dot instantly with smooth animation
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateOutline = () => {
      // Smooth trailing effect
      position.current.x += (mouse.current.x - position.current.x) * 0.2;
      position.current.y += (mouse.current.y - position.current.y) * 0.2;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateOutline();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] transition-transform ease-out duration-200"
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] transition-transform ease-out duration-150"
      ></div>
    </div>
  );
};

export default App;
