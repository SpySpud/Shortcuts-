import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ComputerSection from './components/ComputerSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-indigo-950 min-h-screen">
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ComputerSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Have a question or want to connect? Reach out to us through the form below.
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App