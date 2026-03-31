import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden max-w-7xl w-[80%] mx-auto ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
       <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1]">
            Supercharge Your <br />
            <span className="text-slate-800">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-400 text-sm font-medium cursor-pointer hover:text-purple-600 transition-colors">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-purple-200 hover:opacity-90 transition-all active:scale-95">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 px-8 py-3.5 border-2 border-purple-600 text-purple-600 rounded-full font-bold hover:bg-purple-50 transition-all active:scale-95">
             
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
           <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Banner;