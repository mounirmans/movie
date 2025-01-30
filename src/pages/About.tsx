import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="bg-gray-800">
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg ">
    <Link to="/" className="text-white mb-4 inline-block hover:underline">Back to Home</Link>

      <h1 className="text-5xl font-bold text-gray-200 mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-400 mb-4 text-center leading-relaxed">
      Welcome to our movie app, where film lovers unite! Our mission is to provide a seamless platform for discovering, reviewing, and sharing your favorite films. With a vast library and personalized recommendations, we aim to enhance your movie-watching experience and connect you with fellow cinephiles. Join us on this cinematic journey! At our movie app, we believe in the power of storytelling through film. Our team is passionate about curating a diverse selection of movies, from timeless classics to the latest blockbusters, ensuring there's something for everyone.
      </p>
      <h2 className="text-3xl font-semibold text-gray-200 text-center mt-8 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-400 mb-4 text-center leading-relaxed">
      We envision a world where every movie enthusiast can easily find and enjoy films that resonate with them. By leveraging advanced algorithms and user feedback, we strive to create a personalized experience that caters to your unique tastes.      </p>
      <h2 className="text-3xl font-semibold text-gray-200 text-center mt-8 mb-4">Community Engagement</h2>
      <p className="text-lg text-gray-400 text-center leading-relaxed">
      We are more than just a platform; we are a community. Our app encourages users to share their thoughts, reviews, and recommendations, fostering discussions that enrich the movie-watching experience.      </p>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-200 text-center mb-4">Commitment to Quality</h2>
        <ul className="list-disc list-inside text-lg text-center text-gray-400">
        Quality is at the heart of what we do. We continuously update our library and features based on user feedback, ensuring that our app remains user-friendly and engaging.

        Join us as we explore the magic of cinema together! Whether you're looking for a thrilling adventure, a heartwarming story, or a thought-provoking documentary, our movie app is your go-to destination for all things film.  
        </ul>
      </div>
    </div>
    </div>
  );
};

export default About;