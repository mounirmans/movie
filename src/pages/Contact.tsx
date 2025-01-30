import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
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
    <div className='bg-gray-800'>
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg">
    <Link to="/" className="text-white mb-4 inline-block hover:underline">Back to Home</Link>

      <h1 className="text-4xl font-bold text-gray-200 mb-6 text-center">Contact Us</h1>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-500 mb-2">Feel free to reach out to us through any of the following methods:</p>
        <p className="text-lg text-gray-300 mb-2"><strong>Contact Number:</strong> 0096181974318</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Follow Us</h2>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="mr-2" />
              TikTok
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
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
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
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