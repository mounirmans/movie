import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";


const About = () => {
    const { theme } = useTheme(); // Get theme and toggle function
  
  return (
    <div className={`p-4 ${theme === 'DarkBlue' ? 'bg-accent' : 'bg-secondarylight'}`}>
    <div className={`max-w-4xl mx-auto p-6 shadow-lg rounded-lg ${theme === 'DarkBlue' ? 'bg-secondarylight' : 'bg-secondarydark'} `}>
    <Link to="/" className={`mb-4 inline-block font-bold hover:underline ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Back to Home</Link>

      <h1 className={`text-5xl font-bold  mb-6 text-center ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>About Us</h1>
      <p className={`text-lg  mb-4 text-center leading-relaxed ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>
      Welcome to our movie app, where film lovers unite! Our mission is to provide a seamless platform for discovering, reviewing, and sharing your favorite films. With a vast library and personalized recommendations, we aim to enhance your movie-watching experience and connect you with fellow cinephiles. Join us on this cinematic journey! At our movie app, we believe in the power of storytelling through film. Our team is passionate about curating a diverse selection of movies, from timeless classics to the latest blockbusters, ensuring there's something for everyone.
      </p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className={`text-3xl font-semibold  text-center mt-8 mb-4 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Our Vision</h2>
      <p className={`text-lg mb-4 text-center leading-relaxed ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>
      We envision a world where every movie enthusiast can easily find and enjoy films that resonate with them. By leveraging advanced algorithms and user feedback, we strive to create a personalized experience that caters to your unique tastes.      </p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className={`text-3xl font-semibold  text-center mt-8 mb-4 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Community Engagement</h2>
      <p className={`text-lg t text-center leading-relaxed ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>
      We are more than just a platform; we are a community. Our app encourages users to share their thoughts, reviews, and recommendations, fostering discussions that enrich the movie-watching experience.      </p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mt-8">
     
        <h2 className={`text-3xl font-semibold  text-center mb-4  ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Commitment to Quality</h2>
        <ul className={`list-disc list-inside text-lg text-center  ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'} `}>
        Quality is at the heart of what we do. We continuously update our library and features based on user feedback, ensuring that our app remains user-friendly and engaging.

        Join us as we explore the magic of cinema together! Whether you're looking for a thrilling adventure, a heartwarming story, or a thought-provoking documentary, our movie app is your go-to destination for all things film.  
        </ul>
      </div>
    </div>
    </div>
  );
};

export default About;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = "93640c64d17f5e1fed42b95f24a81303";
// const BASE_URL = "https://api.themoviedb.org/3";

// const MovieList = () => {
//   const [movies, setMovies] = useState<{  id: number; poster_path: string; title: string }[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/movie/popular`, {
//           params: { api_key: API_KEY, page: currentPage },
//         });
//         setMovies(response.data.results);
//         setTotalPages(response.data.total_pages);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, [currentPage]); // Re-fetch when currentPage changes

//   return (
//     <div className="p-4">
//       {/* Movies Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {movies.map((movie) => (
//           <div key={movie.id} className="bg-gray-800 p-2 rounded-lg">
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt={movie.title}
//               className="rounded-md"
//             />
//             <h3 className="text-white mt-2">{movie.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         <span className="text-white px-4 py-2">Page {currentPage} of {totalPages}</span>

//         <button
//           className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
