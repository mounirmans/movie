import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          MovieApp
        </Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/About" className="text-gray-300 hover:text-white mx-2">
            About us
          </Link>
          <Link to="/Contact" className="text-gray-300 hover:text-white mx-2">
            Contact us
          </Link>
          {/* Add more links here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
