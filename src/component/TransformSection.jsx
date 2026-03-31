export default function TransformSection() {
  return (
    <section className="bg-gradient-to-b from-indigo-600 to-purple-600 py-16 px-6 md:px-20 text-center text-white">
      
      <div className="max-w-3xl mx-auto rounded-xl p-10">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-white/80 mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
}