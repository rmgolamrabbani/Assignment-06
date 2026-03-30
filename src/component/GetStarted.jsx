
import { UserPlus, Package, Rocket } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: <UserPlus size={32} className="text-purple-600" />,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: <Package size={32} className="text-purple-600" />,
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: <Rocket size={32} className="text-purple-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
           
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Started In 3 Steps
            </h2>
            <p className="text-gray-500">
                Start using premium digital tools in minutes, not hours.
            </p>
           
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative border border-gray-100 flex flex-col items-center"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;