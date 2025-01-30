import React, { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Popular Movies</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 mb-4 rounded-lg w-full md:w-1/3 bg-gray-800 text-white placeholder-gray-400"
        />
        
        {/* Pass the search term to MovieGrid */}
        <MovieGrid searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;