
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-gradient bg-gradient-purple bg-clip-text text-transparent">
                Easy Home
              </span>
              <span className="ml-1 text-xs text-ehome-muted">
                by <a href="https://tartilab.ru" target="_blank" rel="noopener noreferrer" className="hover:text-purple hover:underline">TartiLab</a>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-ehome-text hover:text-purple transition-colors">Features</a>
            <a href="#products" className="text-ehome-text hover:text-purple transition-colors">Products</a>
            <a href="#testimonials" className="text-ehome-text hover:text-purple transition-colors">Reviews</a>
            <a href="#contact" className="text-ehome-text hover:text-purple transition-colors">Contact Us</a>
          </div>
          
          <div className="hidden md:block">
            <Button className="btn-primary">Get Started</Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-ehome-text">
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md`}>
        <div className="px-4 py-3 space-y-4">
          <a href="#features" className="block text-ehome-text hover:text-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#products" className="block text-ehome-text hover:text-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#testimonials" className="block text-ehome-text hover:text-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="block text-ehome-text hover:text-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          <Button className="btn-primary w-full">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
