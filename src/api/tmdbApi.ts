
const API_KEY = '93640c64d17f5e1fed42b95f24a81303';
const BASE_URL = 'https://api.themoviedb.org/3';

// export const getPopularMovies = async () => {
//   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//   if (!response.ok) throw new Error('Failed to fetch movies');
//   return await response.json();
// };

export const getPopularMovies = async (page: number = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  if (!response.ok) throw new Error('Failed to fetch movies');
  return await response.json();
};


export const getMovieById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch movie details');
  return await response.json();
};
export const getSimilarMovies = async (id: string) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch similar movies');
  return await response.json();
};


// const fetchMovies = async (page = 1) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/popular`, {
//       params: {
//         api_key: API_KEY,
//         page: page,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// };