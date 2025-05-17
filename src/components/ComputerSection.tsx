import React from 'react';
import { Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TipCard: React.FC<TipCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20">
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

const ComputerSection: React.FC = () => {
  const tips = [
    {
      icon: <Monitor className="text-white" />,
      title: "Regular Maintenance",
      description: "Keep your system running smoothly by regularly updating software, running virus scans, and cleaning temporary files."
    },
    {
      icon: <Cpu className="text-white" />,
      title: "Performance Optimization",
      description: "Monitor CPU usage, close unnecessary background programs, and maintain adequate free storage space for optimal performance."
    },
    {
      icon: <HardDrive className="text-white" />,
      title: "Data Backup",
      description: "Regularly backup important files to an external drive or cloud storage to prevent data loss."
    },
    {
      icon: <Wifi className="text-white" />,
      title: "Network Security",
      description: "Use strong passwords, enable firewall protection, and keep your network security protocols up to date."
    }
  ];

  return (
    <section id="computers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Computer <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Tips</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Essential tips and best practices to keep your computer running at its best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <TipCard 
              key={index}
              icon={tip.icon}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComputerSection;