import React, { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import { useTheme } from '../components/ThemeContext'; // Import the useTheme hook
import useDebounce from '../components/useDebounce';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme(); // Get theme and toggle function
  

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 1 second delay


  return (
    <div className={`p-6 ${theme === 'DarkBlue' ? 'bg-accent' : 'bg-secondarylight'}`}>
      <div className="md:container md:mx-auto">
        <div  className="md:container md:mx-auto px-4">
        <h1 className={` text-2xl font-bold mb-4 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>
          Popular Movies
        </h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={`container mx-auto p-2 mb-4 rounded-lg w-full md:w-1/3  
          ${theme === 'DarkBlue' ? 'bg-secondarylight text-secondarydark placeholder-secondarydark' : 'bg-primarydark text-secondarylight placeholder-secondarylight'}`}
        />
        </div>
        {/* Pass the search term to MovieGrid */}
        <div className='md:container md:mx-auto '>
        <MovieGrid  searchTerm={debouncedSearchTerm} />

        </div>
      </div>
    </div>
  );
};

export default Home;


