
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}


const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { theme } = useTheme(); // Get theme and toggle function
  
  
  return (
    
    <Link to={`/movie/${movie.id}`} className={`h-full block w-auto `}>
      <div className={` rounded-lg overflow-hidden w-full h-full shadow-lg ${theme === 'DarkBlue' ? 'bg-secondarydark' : 'bg-secondarylight'}`}>
        <img className='h- w-full object-cover' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className={`p-4  ${theme === 'DarkBlue' ? 'bg-secondarydark' : 'bg-secondarylight'} `}>
          <h3 className={`flex-grow text-lg ${theme === 'DarkBlue' ? 'text-yellow-400' : 'text-blue-700'} `} >{movie.title}</h3>
          <p className={`${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark' }`}>Rating: {movie.vote_average}</p>
          <p className={`${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark' }`}>Release Date: {movie.release_date}</p>
       
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;