const NavBar = ({ carts, setActiveTab }) => {
  return (
    <div className="navbar max-w-7xl w-[80%] mx-auto">

      <div className="navbar-start">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          DigiTools
        </h1>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 font-bold">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-5">

        {/* Cart Icon */}
        <div
          className="relative cursor-pointer"
          onClick={() => setActiveTab("cart")}
        >
          <img className="w-6" src="/shopping-cart.png" alt="" />

          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {carts.length}
            </span>
          )}
        </div>

        <p className="font-bold">Login</p>

        <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;