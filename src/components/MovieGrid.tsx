// import React, { useEffect, useState } from 'react';
// import { getPopularMovies } from '../api/tmdbApi';
// import MovieCard from './MovieCard';

// interface MovieGridProps {
//   searchTerm: string;
// }

// const MovieGrid: React.FC<MovieGridProps> = ({ searchTerm }) => {
//   const [movies, setMovies] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await getPopularMovies();
//       setMovies(data.results);
//       setLoading(false);
//     };
//     fetchMovies();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   // Filter movies based on the search term
//   const filteredMovies = movies.filter(movie =>
//     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {filteredMovies.length > 0 ? (
//         filteredMovies.map(movie => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))
//       ) : (
//         <p className="text-white">No movies found.</p>
//       )}
//     </div>
//   );
// };

// export default MovieGrid;

import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdbApi';
import MovieCard from './MovieCard';

interface MovieGridProps {
  searchTerm: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ searchTerm }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data?.results);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Filter movies based on the search term
  const filteredMovies = movies?.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </div>
  );
};

export default MovieGrid;