const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl text-purple-500">
         DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
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
        <ul className="flex space-x-2">
           <li>
           <img className="mt-1" src="/shopping-cart.png" alt="" />
          </li> 
           <li>
            <p>Login</p>
          </li> 
        </ul>
        
        <a className="btn bg-purple-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;