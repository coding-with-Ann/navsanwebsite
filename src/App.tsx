import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const nextOffset = Math.min(window.scrollY * 0.15, 120);
      setHeroOffset(nextOffset);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      <div
        className="fixed inset-0 z-0"
        style={{ transform: `translateY(-${heroOffset}px)` }}
      >
        <Hero />
      </div>
      <main className="relative z-10 pt-[100vh]">
        <div className="bg-white">
          <Expertise />
          <Stats />
          <Process />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
