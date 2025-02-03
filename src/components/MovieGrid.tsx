
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdbApi';
import MovieCard from './MovieCard';
import { useTheme } from '../components/ThemeContext';

interface MovieGridProps {
  searchTerm: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ searchTerm }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getPopularMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    };
    fetchMovies();
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;

  // Filter movies based on the search term
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
    return (
      <div className='md:container mx-auto px-2'>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <div key={movie.id} className="p-3"> {/* Add padding around each MovieCard */}
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p className="text-white">No movies found.</p>
          )}
        </div>
  
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded mx-2 ${theme === 'DarkBlue' ? 'bg-secondarylight' :'bg-primarydark' }`}
          >
            Previous
          </button>
          <span className='pl-6 pr-6 pt-3'>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded mx-2 ${theme === 'DarkBlue' ? 'bg-secondarylight' :'bg-primarydark' }`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

export default MovieGrid;