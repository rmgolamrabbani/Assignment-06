
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.isPopular 
                ? "bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 z-10 border-transparent" 
                : "bg-gray-50 text-slate-900 border-gray-100 hover:border-purple-200"
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`text-lg ml-1 ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>
                  /Month
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={18} className={plan.isPopular ? "text-white" : "text-green-500"} />
                    <span className={plan.isPopular ? "text-purple-50" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.isPopular
                    ? "bg-white text-indigo-600 hover:bg-gray-100 shadow-lg"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;