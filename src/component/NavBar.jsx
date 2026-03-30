const NavBar = () => {
  return (
    <div className="navbar w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
         DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex space-x-2">
           <div>
           <img className="mt-1" src="/shopping-cart.png" alt="" />
          </div> 
           <li>
            <p>Login</p>
          </li> 
        </div>
        
        <a className="btn bg-purple-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;

