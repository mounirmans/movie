import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const Contact: React.FC = () => {
    const { theme } = useTheme(); // Get theme and toggle function
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      };
    
  return (
    <div className={` p-4 ${theme === 'DarkBlue' ? 'bg-accent' : 'bg-secondarylight'}`}>
    <div className={`max-w-2xl mx-auto p-6 shadow-lg rounded-lg ${theme === 'DarkBlue' ? 'bg-secondarylight' : 'bg-secondarydark'}`}>
    <Link to="/" className={` mb-4 inline-block hover:underline ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Back to Home</Link>

      <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Contact Us</h1>
      
      <div className="mb-6">
        <h2 className={`text-2xl font-semibold text-gray-300 mb-4 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Get in Touch</h2>
        <p className={`text-lg ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Feel free to reach out to us through any of the following methods:</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <p className={`text-lg text-gray-300 mb-2 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}><strong>Contact Number:</strong> 0096181974318</p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="mb-6">
        <h2 className={`text-2xl font-semibold text-gray-300 mb-4 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Follow Us</h2>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center  transition-colors ${theme === 'DarkBlue' ? 'text-secondarydark  hover:text-blue-700' : 'text-secondarylight  hover:text-blue-700'}`}
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center  transition-colors ${theme === 'DarkBlue' ? 'text-secondarydark  hover:text-blue-700' : 'text-secondarylight  hover:text-blue-700'}`}
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center  transition-colors ${theme === 'DarkBlue' ? 'text-secondarydark  hover:text-blue-700' : 'text-secondarylight  hover:text-blue-700'}`}
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </Link>
          </li>
          <li>
            <Link
              to="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center  transition-colors ${theme === 'DarkBlue' ? 'text-secondarydark  hover:text-blue-700' : 'text-secondarylight  hover:text-blue-700'}`}
            >
              <FontAwesomeIcon icon={faTiktok} className="mr-2" />
              TikTok
            </Link>
          </li>
        </ul>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>


      <div className="mb-6">
        <h2 className={`text-2xl font-semibold mb-4 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`}>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block  text-sm font-bold mb-2 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          <label className={`block  text-sm font-bold mb-2 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`} htmlFor="name">
          Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          <label className={`block  text-sm font-bold mb-2 ${theme === 'DarkBlue' ? 'text-secondarydark' : 'text-secondarylight'}`} htmlFor="name">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
 <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
    </div>
    </div>
  );
};

export default Contact;