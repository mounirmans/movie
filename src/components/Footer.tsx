import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {
    const { theme } = useTheme(); // Get theme and toggle function
  return (
    <div>
    <footer className={`bg-gray-800 p-4 mt-4  ${theme === 'DarkBlue' ? 'bg-primarydark' : 'bg-primarylight' }`}>
      <div className={`container mx-auto text-center  ${theme === 'DarkBlue' ? 'bg-primarydark text-primarylight' :'bg-primarylight text-primarydark' }`}>
        <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        <p>
          <Link to="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            Data provided by TMDb
          </Link>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;