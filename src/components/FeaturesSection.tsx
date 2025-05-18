
import React from 'react';
import { Wifi, Lightbulb, Lock, Thermometer, Shield } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="h-8 w-8 text-purple" />,
    title: 'Seamless Connectivity',
    description: 'Connect and control all your devices from a single application, providing a truly integrated smart home experience.'
  },
  {
    icon: <Thermometer className="h-8 w-8 text-purple" />,
    title: 'Climate Control',
    description: "Optimize your home's temperature automatically based on your preferences and habits to enhance comfort and efficiency."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-purple" />,
    title: 'Smart Lighting',
    description: 'Automate your lighting based on time of day, occupancy, or custom schedules to create the perfect ambiance.'
  },
  {
    icon: <Lock className="h-8 w-8 text-purple" />,
    title: 'Enhanced Security',
    description: 'Monitor and control access to your home remotely with smart locks, cameras, and motion sensors.'
  },
  {
    icon: <Shield className="h-8 w-8 text-purple" />,
    title: 'Data Privacy',
    description: 'Your information stays secure with our advanced encryption and local processing technology.'
  },
  {
    icon: <Wifi className="h-8 w-8 text-purple" />,
    title: 'Voice Control',
    description: 'Control your entire smart home system with natural voice commands for a hands-free experience.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-ehome-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            Our smart home solutions are designed to make your life easier, more comfortable, and more secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card hover-scale"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4 p-3 bg-purple/10 w-fit rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-ehome-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
