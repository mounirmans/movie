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