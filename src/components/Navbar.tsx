import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; 
import { MdOutlineWbSunny } from "react-icons/md";
import { MdSunny } from "react-icons/md";


const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <div className={`${theme === 'DarkBlue' ? 'bg-primarydark' :'bg-primarylight' }`}>
    <nav className={` md:container md:mx-auto p-4 ${theme === 'DarkBlue' ? 'bg-primarydark' :'bg-primarylight' }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-lg font-bold 
          ${theme === 'DarkBlue' ? 'bg-primarydark text-secondarylight hover:text-accent '  : 'bg-primarylight text-secondarydark  hover:text-accent'}`} >
          MovieApp
        </Link>
        <div className="flex items-center">
         
          <Link to="/about"  className={`  mx-2 ${theme === 'DarkBlue' ? 'text-secondarylight hover:text-accent' : 'text-primarydark hover:text-accent'}`}>
            About us
          </Link>
          <Link to="/contact"  className={`  mx-2 ${theme === 'DarkBlue' ? 'text-secondarylight hover:text-accent' : 'text-primarydark hover:text-accent '}`}>
            Contact us
          </Link>
          <button onClick={toggleTheme} className={`  mx-2 ${theme === 'DarkBlue' ? 'text-secondarylight hover:text-accent' : 'text-primarydark hover:text-accent'}`}>
            {theme === 'DarkBlue' ? <MdOutlineWbSunny /> : <MdSunny/>}
          
          </button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;