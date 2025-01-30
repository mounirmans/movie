import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="p-4">
          <h3 className="text-white text-lg">{movie.title}</h3>
          <p className="text-gray-400">Rating: {movie.vote_average}</p>
          <p className="text-gray-400">Release Date: {movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;