import React from 'react';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Animated planet */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 animate-pulse shadow-lg shadow-purple-500/30"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
            <div className="absolute w-6 h-6 rounded-full bg-slate-300 right-10 top-8 opacity-70 animate-orbit"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Connect Across The
            <span className="block md:inline bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Digital Universe</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Your cosmic gateway to all your social media platforms in one beautiful, 
            space-themed hub.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-colors shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-slate-800/60 text-white font-medium rounded-full hover:bg-slate-700/60 transition-colors border border-slate-700"
            >
              Learn More
            </a>
          </div>
          
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;