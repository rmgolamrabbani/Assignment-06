import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-6 mb-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>

            <div className="text-center text-white flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </h2>
              <p className="text-purple-100 text-sm md:text-base opacity-90">
                {stat.label}
              </p>
            </div>

            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;