// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-lg font-bold">
//           MovieApp
//         </Link>
//         <div>
          
//           <Link to="/About" className="text-gray-300 hover:text-white mx-2">
//             About us
//           </Link>
//           <Link to="/Contact" className="text-gray-300 hover:text-white mx-2">
//             Contact us
//           </Link>
//           {/* Add more links here if needed */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <nav className={`p-4 ${theme === 'DarkBlue' ? 'bg-primarydark' :'bg-primarylight' }`}>
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
            {theme === 'DarkBlue' ? 'ON' : 'OFF'}
          
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;