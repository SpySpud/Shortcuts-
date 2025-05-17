import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800 mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@cosmicconnect.com" className="hover:text-purple-400 transition-colors">
                  contact@cosmicconnect.com
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <MapPin size={16} className="mr-2" />
                <span>Cosmic Street, Galaxy Way</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for cosmic updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {currentYear} Cosmic Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;