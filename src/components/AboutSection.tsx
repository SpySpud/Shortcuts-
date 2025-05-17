import React from 'react';
import { Rocket, Star, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
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

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="text-white" />,
      title: "Launch Your Presence",
      description: "Establish your online presence across multiple platforms with seamless integration."
    },
    {
      icon: <Star className="text-white" />,
      title: "Stellar Connections",
      description: "Connect with your audience across the digital universe with our space-themed designs."
    },
    {
      icon: <Zap className="text-white" />,
      title: "Cosmic Speed",
      description: "Experience lightning-fast performance with our optimized web technologies."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Cosmic Connect</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We help you navigate the digital galaxy by connecting your online presence across multiple platforms.
            Our space-themed designs will make your social media presence truly stand out among the stars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;