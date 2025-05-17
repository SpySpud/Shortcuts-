import React from 'react';
import { Github, Facebook, ShoppingBag, Disc as Discord } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex flex-col items-center transition-all duration-300"
      aria-label={label}
    >
      <div className="p-4 rounded-full bg-slate-900/60 border border-slate-700 text-white backdrop-blur-sm
                     transition-all duration-300 group-hover:bg-slate-800/80 group-hover:scale-110
                     group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]">
        {icon}
      </div>
      <span className="mt-2 text-sm font-medium text-white opacity-0 transform translate-y-2
                      transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {label}
      </span>
    </a>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 sm:space-x-10 mt-8">
      <SocialLink 
        href="https://github.com" 
        icon={<Github className="w-6 h-6" />} 
        label="GitHub"
      />
      <SocialLink 
        href="https://facebook.com" 
        icon={<Facebook className="w-6 h-6" />} 
        label="Facebook"
      />
      <SocialLink 
        href="https://ebay.com" 
        icon={<ShoppingBag className="w-6 h-6" />} 
        label="eBay"
      />
      <SocialLink 
        href="https://discord.com" 
        icon={<Discord className="w-6 h-6" />} 
        label="Discord"
      />
    </div>
  );
};

export default SocialLinks;