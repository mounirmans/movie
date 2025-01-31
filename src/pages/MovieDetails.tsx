// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieById, getSimilarMovies } from '../api/tmdbApi';
// import MovieCard from '../components/MovieCard';

// const MovieDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [movie, setMovie] = useState<any>(null);
//   const [similarMovies, setSimilarMovies] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const movieData = await getMovieById(Number(id));
//       const similarData = await getSimilarMovies(Number(id));
//       setMovie(movieData);
//       setSimilarMovies(similarData.results);
//       setLoading(false);
//     };
//     fetchMovieDetails();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
//       <p className="text-gray-400">{movie.overview}</p>
//       <h2 className="text-xl font-bold text-white mt-4">Similar Movies</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {similarMovies.map(similar => (
//           <MovieCard key={similar.id} movie={similar} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;



import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieById, getSimilarMovies } from '../api/tmdbApi';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeContext';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the movie ID from the URL
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Get theme and toggle function
  

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieById(id!); // Fetch movie details using the ID
        const similarData = await getSimilarMovies(id!);
        setMovie(data);
        setSimilarMovies(similarData.results);

      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const renderStars = (rating: number) => {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.round(rating / 2); // Convert 10-point scale to 5-point scale
    const stars = [];
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>); // Empty star
      }
    }
  
    return stars;
  };
  
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className={` min-h-screen p-4 ${theme === 'DarkBlue' ? 'bg-accent' : 'bg-secondarylight'}`}>
      <Link to="/" className={` mb-4 inline-block hover:underline ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Back to Home</Link>
      <div className={` rounded-lg p-6 shadow-lg ${theme === 'DarkBlue' ? 'bg-primarydark' : 'bg-primarylight'}`}>
        <h1 className={`text-3xl font-bold text-center ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>{movie.title}</h1>
        <div className='flex flex-col md:flex-row mt-4'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="object-cover rounded-lg w-full md:w-1/4" // Responsive width
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <p className={` pl-16 mt-10 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Rating: {renderStars(movie.vote_average)} ({movie.vote_average}/10)</p>
            <p className={` pl-16 mt-10 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Release Date: {movie.release_date}</p>
            <p className={` pl-16 mt-10 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Genres: {movie.genres.map((genre: { name: any; }) => genre.name).join(', ')}</p>
            <p className={` pl-16 mt-10 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Overview:</p>
            <p className={` pl-16 mt-10 ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        
      <h2 className={`text-xl font-bold  mb-4  ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'}`}>Similar Movies</h2>
      <div className="flex items-center">
          <button onClick={scrollLeft} className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 mr-2">
            &lt; {/* Left Arrow */}
          </button>
          <div ref={scrollRef} className="flex overflow-x-hidden scrollbar-hide">
            {similarMovies.map(similar => (
              <div key={similar.id} className="flex-shrink-0 p-2 max-h-full min-h-full  ">
                <MovieCard movie={similar} />
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 ml-2">
            &gt; {/* Right Arrow */}
          </button>
        </div>
      </div>
      <Footer/>

    </div>
    
  );
  
};

export default MovieDetails;