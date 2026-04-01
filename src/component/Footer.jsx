import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-gray-300 px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-5 gap-10">

        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">
            DigiTools
          </h2>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources and Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-3 mt-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaYoutube />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
              <FaXTwitter />
            </div>
          </div>
        </div>


      </div>

      {/* copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex space-x-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}