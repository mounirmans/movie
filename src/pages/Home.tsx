import React, { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeContext'; // Import the useTheme hook


const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme(); // Get theme and toggle function
  

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`p-4 ${theme === 'DarkBlue' ? 'bg-accent' : 'bg-secondarylight'}`}>

      <div className="container mx-auto p-4">
        <h1 className={`text-2xl font-bold mb-4 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Popular Movies</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`p-2 mb-4 rounded-lg w-full md:w-1/3  
          ${theme === 'DarkBlue' ? 'bg-secondarylight text-secondarydark placeholder-secondarydark' : 'bg-primarydark text-secondarylight placeholder-secondarylight'}`}
        />
        
        {/* Pass the search term to MovieGrid */}
        <MovieGrid searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;