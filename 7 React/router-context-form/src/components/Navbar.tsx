import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" text-gray-100 shadow-lg fixed w-full z-10 top-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-white/10 backdrop-blur-xl rounded-2xl">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <Link to={"/"} className="flex-shrink-0 flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-400">
                Use Context
              </span>
            </div>
          </Link>

          {/* Right side - Navigation items */}
          <div className="flex items-center space-x-4">
            <Link
              to={"/dashboard"}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/addUser"
              className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Add User
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
