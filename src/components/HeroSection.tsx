
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-ehome-bg to-white pt-20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-from-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Transform Your Home</span>
            <span className="text-gradient bg-gradient-purple bg-clip-text text-transparent">With Smart Technology</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-ehome-muted max-w-lg">
            Create a more comfortable, efficient, and secure living space with our innovative smart home solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">Explore Products</Button>
            <Button variant="outline" className="border border-purple hover:bg-purple-light hover:text-white transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-slide-from-right">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-light/20 rounded-full filter blur-2xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple/20 rounded-full filter blur-2xl animate-pulse-subtle"></div>
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Smart Home Dashboard" 
              className="rounded-2xl shadow-xl w-full max-w-lg mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
