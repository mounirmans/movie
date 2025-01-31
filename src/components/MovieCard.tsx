
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
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-primarydark rounded-lg overflow-hidden shadow-lg">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className={`p-4  ${theme === 'DarkBlue' ? 'bg-secondarydark' : 'bg-secondarylight'} `}>
          <h3 className={`text-lg ${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark'} `} >{movie.title}</h3>
          <p className={`${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark' }`}>Rating: {movie.vote_average}</p>
          <p className={`${theme === 'DarkBlue' ? 'text-secondarylight' : 'text-primarydark' }`}>Release Date: {movie.release_date}</p>
       
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;